import api from '@/axios/axiosConfig';
import { AxiosResponse, AxiosError } from 'axios';

// Define interfaces
export interface Review {
  reviewId: number;
  name: string;
  email: string;
  role: string;
  comment: string;
  isApproved: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  meta: {
    success: boolean;
    message: string | T | T[];
  };
}

export interface ApiError {
  meta: {
    success: boolean;
    message: string;
    errors?: Array<{
      field: string;
      message: string;
    }>;
  };
}

interface GetTestimonialsParams {
  limit?: number;
  isApproved?: boolean;
}

class ListReviewService {
  private static readonly BASE_URL = '/myg/api/testimonials';

  // Fetch all testimonials with optional approval status and limit
  // static async getAllTestimonials(
  //   params: GetTestimonialsParams = {}
  // ): Promise<ApiResponse<Review[]>> {
  //   try {
  //     // Only include parameters that are explicitly set
  //     const queryParams: Record<string, any> = {};
  //     if (typeof params.limit !== 'undefined') queryParams.limit = params.limit;
  //     if (typeof params.isApproved !== 'undefined') queryParams.isApproved = params.isApproved;

  //     const response: AxiosResponse<ApiResponse<Review[]>> = await api.get(
  //       this.BASE_URL,
  //       {
  //         params: queryParams
  //       }
  //     );

  //     // Ensure we have an array, even if empty
  //     const testimonials = Array.isArray(response.data.meta.message) 
  //       ? response.data.meta.message 
  //       : [];

  //     return {
  //       meta: {
  //         ...response.data.meta,
  //         message: testimonials
  //       }
  //     };
  //   } catch (error) {
  //     if (error instanceof AxiosError && error.response?.data) {
  //       throw new Error((error.response.data as ApiError).meta.message);
  //     }
  //     throw new Error('Failed to fetch testimonials');
  //   }
  // }
  // listReviewServiceAPI.js
  static async getAllTestimonials(
    params: GetTestimonialsParams & { page?: number } = {}
  ): Promise<ApiResponse<Review[]>> {
    try {
        const queryParams: Record<string, any> = {};
        if (params.limit) queryParams.limit = params.limit;
        if (params.isApproved !== undefined) queryParams.isApproved = params.isApproved;
        if (params.page) queryParams.page = params.page; // Tambahkan page ke query params

        const response: AxiosResponse<ApiResponse<Review[]>> = await api.get(
            this.BASE_URL,
            {
                params: queryParams
            }
        );

        const testimonials = Array.isArray(response.data.meta.message) 
            ? response.data.meta.message 
            : [];

        return {
            meta: {
                ...response.data.meta,
                message: testimonials
            }
        };
    } catch (error) {
        if (error instanceof AxiosError && error.response?.data) {
            throw new Error((error.response.data as ApiError).meta.message);
        }
        throw new Error('Failed to fetch testimonials');
    }
  }


  // Fetch testimonial by ID
  static async getTestimonialById(id: number): Promise<ApiResponse<Review>> {
    try {
      const response: AxiosResponse<ApiResponse<Review>> = await api.get(
        `${this.BASE_URL}/${id}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        throw new Error((error.response.data as ApiError).meta.message);
      }
      throw new Error('Failed to fetch testimonial');
    }
  }

  // Delete a testimonial by ID
  static async deleteTestimonial(id: number): Promise<ApiResponse<Review>> {
    try {
      const response: AxiosResponse<ApiResponse<Review>> = await api.delete(
        `${this.BASE_URL}/${id}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        throw new Error((error.response.data as ApiError).meta.message);
      }
      throw new Error('Failed to delete testimonial');
    }
  }

  // Approve or unapprove a testimonial by ID
  static async toggleApprovalStatus(
    id: number,
    isApproved: boolean
  ): Promise<ApiResponse<Review>> {
    try {
      const response: AxiosResponse<ApiResponse<Review>> = await api.patch(
        `${this.BASE_URL}/${id}/approve`,
        { isApproved }
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data) {
        throw new Error((error.response.data as ApiError).meta.message);
      }
      throw new Error('Failed to update approval status');
    }
  }
}

export default ListReviewService;
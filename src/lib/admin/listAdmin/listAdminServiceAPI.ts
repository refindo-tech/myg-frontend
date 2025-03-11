// listAdminService.ts
import api from '@/axios/axiosConfig';
import { AxiosResponse } from 'axios';

interface AdminData {
  adminId: number;
  name: string;
  email: string;
  role: string;
  profilePicture: string;
  userLabel: string;
  createdAt: string;
  updatedAt: string;
}

interface AdminListResponse {
  meta: {
    success: boolean;
    message: string;
  };
  results: {
    admins: AdminData[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  };
}

interface AdminDetailsResponse {
  meta: {
    success: boolean;
    message: string;
  };
  results: AdminData;
}

class ListAdminService {
  async registerAdmin(formData: FormData): Promise<AxiosResponse<AdminDetailsResponse>> {
    return api.post('/admin/adminPage/registerAdmin/', formData);
  }

  async getAllAdmins(page: number = 1, limit: number = 10, search: string = ''): Promise<AxiosResponse<AdminListResponse>> {
    const params = { page, limit, search };
    return api.get('/admin/adminPage/admins/', { params });
  }

  async getAdminById(adminId: number): Promise<AxiosResponse<AdminDetailsResponse>> {
    return api.get(`/admin/adminPage/admins/${adminId}`);
  }

  async updateAdminById(adminId: number, updateData: Partial<Omit<AdminData, 'adminId' | 'createdAt' | 'updatedAt'>>): Promise<AxiosResponse<AdminDetailsResponse>> {
    return api.put(`/admin/adminPage/admins/${adminId}`, updateData);
  }

  async updateProfilePicture(adminId: number, profilePicture: File): Promise<AxiosResponse<AdminDetailsResponse>> {
    const formData = new FormData();
    formData.append('profilePicture', profilePicture);
    return api.put(`/admin/adminPage/admins/${adminId}/profilePicture`, formData);
  }

  async deleteAdmin(adminId: number): Promise<AxiosResponse<{ meta: { success: boolean; message: string } }>> {
    return api.delete(`/admin/adminPage/admins/${adminId}`);
  }
}

const listAdminService = new ListAdminService();
export default listAdminService;

// SWR + Axios, axios berfungsi untuk mengambil data dari API, sedangkan SWR berfungsi untuk mengelola state dari data yang diambil dari API.
import useSWR from 'swr';
import Testimony from '@/types/testimony';
import TestimonyService from '@/lib/testimonyService';

class useTestimonies {
  static all(params: { limit: number }) {
    const { data, error } = useSWR<Testimony[], Error>(['products', params], () => TestimonyService.fetchTestimonies(params));
    return {
      data: data || [],
      isLoading: !error && !data,
      isError: error,
    };
  }
  static byId(id: number) {
    const { data, error } = useSWR<Testimony, Error>(`product/${id}`, () => TestimonyService.fetchTestimonyById(id));
    return {
      data: data,
      isLoading: !error && !data,
      isError: error,
    };
  }
}

export default useTestimonies;
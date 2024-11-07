// listUserServiceAPI.ts
import api from '@/axios/axiosConfig';

// Interface untuk struktur data pengguna
interface UserProfile {
  profileId: number;
  userId: number;
  fullName: string;
  address: string;
  phoneNumber: string;
  socialMedia: string;
  profilePicture: string | null;
  studioName: string | null;
  ktpPicture: string | null;
  studioLogo: string | null;
  birthdate: string;
  createdAt: string;
  updatedAt: string;
}

interface User {
  userId: number;
  email: string;
  userLabel: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
  userProfiles: UserProfile[];
}

// Fungsi untuk mendapatkan semua pengguna
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get('/myg/api/users');
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

// Fungsi untuk menghapus pengguna berdasarkan ID
export const deleteUserById = async (userId: number): Promise<void> => {
  try {
    await api.delete(`/myg/api/users/${userId}`);
  } catch (error) {
    console.error(`Failed to delete user with ID ${userId}:`, error);
    throw error;
  }
};

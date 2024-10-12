import api from '@/axios/axiosConfig';

interface UserProfile {
  fullName: string;
  phoneNumber: string;
  birthdate: string;
  socialMedia: string;
  address: string;
}

interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  userProfile: UserProfile;
}

interface ValidationError {
  instancePath: string;
  message: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await api.post('/myg/auth/register', data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);  // Pastikan error message dilemparkan ke frontend
    }
    throw new Error('Registration failed');
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/myg/auth/login', { email, password });
    return response.data;
  } catch (error: any) {
    // Jika ada error, lemparkan error agar bisa ditangani di komponen yang memanggilnya
    if (error.response) {
      // Menangani error yang berasal dari respons server
      throw error.response;
    } else {
      console.error('Error logging in:', error);
      throw new Error('Network error');
    }
  }
};

export const refreshToken = async () => {
  try {
    const response = await api.get('/myg/auth/refresh-token');
    return response.data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.delete('/myg/auth/logout');
    sessionStorage.removeItem('accessToken');
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    return null;
  }
};

export const getUserProfile = async () => {
  try {
    const token = sessionStorage.getItem('accessToken');
    if (!token) {
      throw new Error('No access token found');
    }
    const response = await api.get('/myg/auth/profile', {
    });
    return response.data.results;
  } catch (error) {
    // console.error('Error getting user profile:', error);
    return null;
  }
}

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
    if (error.response && error.response.data && error.response.data.errors) {
      throw error.response.data.errors;
    }
    throw new Error(error.response?.data?.message || 'Registration failed');
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await api.post('/myg/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
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

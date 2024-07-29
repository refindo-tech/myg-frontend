// fetchData.ts
import axios from 'axios';

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
    const response = await axios.post(`http://localhost:5000/myg/auth/register`, data);
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
    const response = await axios.post('http://localhost:5000/myg/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

export const refreshToken = async (refreshToken: string) => {
  try {
    const response = await axios.get('http://localhost:5000/myg/auth/refresh-token', {
      headers: {
        'Authorization': `Bearer ${refreshToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    return null;
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.delete('http://localhost:5000/myg/auth/logout', {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error('Error logging out:', error);
    return null;
  }
};


export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:5000/myg/api/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

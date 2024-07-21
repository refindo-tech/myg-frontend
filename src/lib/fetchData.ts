import axios from 'axios';

export const fetchServices = async () => {
  try {
    const response = await axios.get('http://localhost:5000/myg/api/layanan');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    return null;
  }
};

export const fetchServiceById = async (id: string | string[]) => {
  try {
    const response = await axios.get(`http://localhost:5000/myg/api/services/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching service by id:', error);
    return null;
  }
};


export const fetchTestimonials = async () => {
    try {
      const response = await axios.get('http://localhost:5000/myg/api/testimonials');
      return response.data;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return null;
    }
  };


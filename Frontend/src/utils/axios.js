import axios, { Method } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const apiRequest = async ({ url, method, data }) => {
  console.log('API URL:', `${BASE_URL}/${url}`);
  console.log('API Method:', method);
  console.log('API Data:', data);
  try {
    const response = await axios({
      url: `${BASE_URL}/${url}`,
      method,
      data,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  } catch (error) {
    throw error?.response?.data?.message || 'Something went wrong';
  }
};

import { apiRequest } from '../utils/axios';

export const getCaptionLogin = async (params) => {
  try {
    const response = await apiRequest({
      url: 'caption/login',
      method: 'POST',
      params,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const getCaptionRegister = async (payload) => {
  try {
    const response = await apiRequest({
      url: 'caption/register',
      method: 'POST',
      data: payload,
    });
    return response;
  } catch (error) {
    throw error;
  }
}


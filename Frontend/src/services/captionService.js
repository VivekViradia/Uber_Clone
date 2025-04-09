export const getCaptionLogin = async (params) => {
  try {
    const response = await apiRequest({
      url: '/captions',
      method: 'GET',
      params,
    });
    return response;
  } catch (error) {
    throw error;
  }
}
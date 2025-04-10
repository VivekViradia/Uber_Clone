import { SignupFormValues, UserLoginFormValues } from "@/types/user.type";
import { apiRequest } from "../utils/axios";

export const getUserAndCaptionLogin = async (slug: string,payload: UserLoginFormValues): Promise<any> => {
  try {
    const response = await apiRequest({
      url: `${slug}/login`,
      method: "POST",
      data: payload,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUserRegistration = async (payload: SignupFormValues): Promise<any> => {
  try {
    const response = await apiRequest({
      url: `user/register`,
      method: "POST",
      data: payload,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

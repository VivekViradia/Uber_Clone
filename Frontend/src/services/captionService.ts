import { CaptainSignupFormValues } from "@/types/caption.type";
import { apiRequest } from "../utils/axios";

export const getCaptionRegister = async (
  payload: CaptainSignupFormValues,
): Promise<any> => {
  try {
    const response = await apiRequest({
      url: "caption/register",
      method: "POST",
      data: payload,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

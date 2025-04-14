import { CaptainSignupFormValues, CaptionSignUpPayload } from "@/types/caption.type";
import { apiRequest } from "../utils/axios";

export const getCaptionRegister = async (
  payload: CaptionSignUpPayload,
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

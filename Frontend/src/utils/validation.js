import * as Yup from "yup";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const captionSignUpSchema = Yup.object({
  fullName: Yup.object({
    firstName: Yup.string()
      .required("First name is required")
      .min(2, "Minimum 2 characters"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(2, "Minimum 2 characters"),
  }),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  vehicle: Yup.object({
    color: Yup.string().required("Vehicle color is required"),
    plateNumber: Yup.string().required("Plate number is required"),
    capacity: Yup.number()
      .typeError("Capacity must be a number")
      .required("Capacity is required")
      .min(1, "Minimum 1 seat")
      .max(6, "Maximum 6 seats"),
    vehicleType: Yup.string().required("Vehicle type is required"),
  }),
});

export const SignInSchema = Yup.object({
    email: Yup.string()
      .trim()
      .required("Email is required")
      .matches(EMAIL_REGEX, "Email is not valid"),
    password: Yup.string().trim().required("Password is required"),
  });
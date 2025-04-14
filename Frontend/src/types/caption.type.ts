export interface CaptainLoginFormValues {
  email: string;
  password: string;
}

export interface CaptainSignupFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  vehicleType: string;
  vehicleColor: string;
  plateNumber: string;
  passengerCapacity: string;
  terms: boolean;
}

export interface CaptionSignUpPayload{
  fullName: {
    firstName: string;
    lastName: string;
  },
  email: string;
  password: string;
  vehicle: {
    vehicleType: string;
    color: string;
    plateNumber: string;
    capacity: string;
  }
}
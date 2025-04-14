"use client";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { User, Mail, Lock } from "lucide-react";
import { getCaptionRegister } from "@/services/captionService";
import { CaptainSignupFormValues } from "@/types/caption.type";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const CaptainSignupForm = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CaptainSignupFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      vehicleType: "",
      vehicleColor: "",
      plateNumber: "",
      passengerCapacity: "",
    },
  });

  const onSubmit = async (data: CaptainSignupFormValues) => {
    console.log("Captain signup data:", data);
    // Handle captain signup logic here
    const payload = {
      fullName: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      email: data.email,
      password: data.password,
      vehicle: {
        vehicleType: data.vehicleType,
        color: data.vehicleColor,
        plateNumber: data.plateNumber,
        capacity: data.passengerCapacity,
      },
    };
    setErrorMessage(null); // Reset error message
    await getCaptionRegister(payload)
      .then((res) => {
        console.log("Caption SignUp Form Response: ", res?.caption);
        setCookie("captionDetails", res?.caption);
        alert(
          `Caption you are register as ${res?.caption?.fullName?.firstName} ${res?.caption?.fullName?.lastName}`,
        );
        router.push("/");
      })
      .catch((err) => {
        console.log("Caption SignUp Form Error: ", err);
        setErrorMessage(err);
        // alert(err.response.data.message);
      });
  };

  return (
    <div className='w-full max-w-md'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold'>Captain Registration</h1>
        <p className='text-gray-400'>
          Sign up to join our team of professional drivers
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <label htmlFor='firstName' className='text-sm font-medium'>
              First Name
            </label>
            <div className='relative'>
              <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <Input
                id='firstName'
                placeholder='First Name'
                className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
            </div>
            {errors.firstName && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className='space-y-2'>
            <label htmlFor='lastName' className='text-sm font-medium'>
              Last Name
            </label>
            <div className='relative'>
              <User className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
              <Input
                id='lastName'
                placeholder='Last Name'
                className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
                {...register("lastName", { required: "Last name is required" })}
              />
            </div>
            {errors.lastName && (
              <p className='text-red-500 text-xs mt-1'>
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className='space-y-2'>
          <label htmlFor='email' className='text-sm font-medium'>
            Email
          </label>
          <div className='relative'>
            <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
          )}
        </div>
        <div className='space-y-2'>
          <label htmlFor='password' className='text-sm font-medium'>
            Password
          </label>
          <div className='relative'>
            <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
            <Input
              id='password'
              type='password'
              placeholder='Create a password'
              className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
          </div>
          {errors.password && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.password.message}
            </p>
          )}
          <p className='text-xs text-gray-400'>
            Password must be at least 8 characters long
          </p>
        </div>

        <div className='border-t border-gray-800 pt-4 mt-4'>
          <h3 className='text-lg font-medium mb-4'>Vehicle Information</h3>
          <div className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='vehicleType' className='text-sm font-medium'>
                Vehicle Type
              </label>
              <Controller
                name='vehicleType'
                control={control}
                rules={{ required: "Vehicle type is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className='bg-gray-900 border-gray-700 focus:ring-amber-500'>
                      <SelectValue placeholder='Select vehicle type' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='sedan'>Luxury Sedan</SelectItem>
                      <SelectItem value='suv'>Premium SUV</SelectItem>
                      <SelectItem value='van'>Executive Van</SelectItem>
                      <SelectItem value='bike'>Motorcycle</SelectItem>
                      <SelectItem value='auto'>Auto Rickshaw</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.vehicleType && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.vehicleType.message}
                </p>
              )}
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-2'>
                <label htmlFor='color' className='text-sm font-medium'>
                  Vehicle Color
                </label>
                <Input
                  id='color'
                  placeholder='e.g. Black'
                  className='bg-gray-900 border-gray-700 focus:border-amber-500'
                  {...register("vehicleColor", {
                    required: "Vehicle color is required",
                  })}
                />
                {errors.vehicleColor && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.vehicleColor.message}
                  </p>
                )}
              </div>
              <div className='space-y-2'>
                <label htmlFor='plateNumber' className='text-sm font-medium'>
                  Plate Number
                </label>
                <Input
                  id='plateNumber'
                  placeholder='e.g. ABC123'
                  className='bg-gray-900 border-gray-700 focus:border-amber-500'
                  {...register("plateNumber", {
                    required: "Plate number is required",
                  })}
                />
                {errors.plateNumber && (
                  <p className='text-red-500 text-xs mt-1'>
                    {errors.plateNumber.message}
                  </p>
                )}
              </div>
            </div>
            <div className='space-y-2'>
              <label htmlFor='capacity' className='text-sm font-medium'>
                Passenger Capacity
              </label>
              <Controller
                name='passengerCapacity'
                control={control}
                rules={{ required: "Passenger capacity is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className='bg-gray-900 border-gray-700 focus:ring-amber-500'>
                      <SelectValue placeholder='Select capacity' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='1'>1 Passenger</SelectItem>
                      <SelectItem value='2'>2 Passengers</SelectItem>
                      <SelectItem value='4'>4 Passengers</SelectItem>
                      <SelectItem value='6'>6 Passengers</SelectItem>
                      <SelectItem value='8'>8+ Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.passengerCapacity && (
                <p className='text-red-500 text-xs mt-1'>
                  {errors.passengerCapacity.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className='flex items-center space-x-2'>
          <input
            type='checkbox'
            id='terms'
            className='h-4 w-4 rounded border-gray-700 text-amber-500 focus:ring-amber-500'
            {...register("terms", {
              required: "You must agree to the terms and conditions",
            })}
          />
          <label htmlFor='terms' className='text-sm text-gray-400'>
            I agree to the{" "}
            <Link href='#' className='text-amber-500 hover:underline'>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href='#' className='text-amber-500 hover:underline'>
              Privacy Policy
            </Link>
          </label>
        </div>
        {errors.terms && (
          <p className='text-red-500 text-xs mt-1'>{errors.terms.message}</p>
        )}
        {errorMessage && (
          <p className='text-red-500 text-xs mt-1'>{errorMessage}</p>
        )}
        <Button
          type='submit'
          className='w-full bg-amber-500 text-black hover:bg-amber-600'
          disabled={isSubmitting}
        >
          {isSubmitting ? "Registering..." : "Register as Captain"}
        </Button>
        <div className='text-center text-sm text-gray-400'>
          Already have an account?{" "}
          <Link href='/login' className='text-amber-500 hover:underline'>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

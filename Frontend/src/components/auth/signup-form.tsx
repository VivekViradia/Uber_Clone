"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { User, Mail, Lock } from "lucide-react";
import { SignupFormValues } from "@/types/user.type";
import { getUserRegistration } from "@/services/userService";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const SignupForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: SignupFormValues) => {
    console.log("Signup data:", data);
    setErrorMessage(null); // Reset error message
    // Handle signup logic here
    await getUserRegistration(data)
      .then((res) => {
        console.log("response", res);
        router.push("/");
        // Handle successful signup, e.g., redirect to login page or show success message
      })
      .catch((err) => {
        console.error("Signup error:", err);
        setErrorMessage(err);
      });
  };

  const password = watch("password");

  return (
    <div className='w-full max-w-md'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold'>Create Your Account</h1>
        <p className='text-gray-400'>Sign up to start your luxury journey</p>
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
        <div className='space-y-2'>
          <label htmlFor='confirmPassword' className='text-sm font-medium'>
            Confirm Password
          </label>
          <div className='relative'>
            <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
            <Input
              id='confirmPassword'
              type='password'
              placeholder='Confirm your password'
              className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
          </div>
          {errors.confirmPassword && (
            <p className='text-red-500 text-xs mt-1'>
              {errors.confirmPassword.message}
            </p>
          )}
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
          {isSubmitting ? "Creating Account..." : "Create Account"}
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

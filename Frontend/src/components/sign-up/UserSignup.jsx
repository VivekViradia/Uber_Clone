"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useActions } from "../../redux/hook";
import { userSignUpSchema } from "../../utils/validation";

const UserSignup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { UpdateCaptionDetails } = useActions();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSignUpSchema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, data)
        .then((res) => {
          console.log("res", res);
        setCookie("captionDetails", res?.data?.caption);
        UpdateCaptionDetails(res?.data?.caption);
        alert(
          `Caption you are register as ${res} ${res}`,
        );
        router.push("/");
      })
      .catch((err) => {
        console.log("err.response.data.message);", err);
        setErrorMessage(err);
        // alert(err.response.data.message);
      });
  };
  return (
    <div className='max-h-screen flex items-center justify-center bg-gray-100 p-6'>
      <div className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl'>
        <h2 className='text-3xl font-bold text-center mb-6'>
          User Registration
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block mb-1 font-medium'>First Name</label>
              <input
                type='text'
                {...register("fullName.firstName")}
                className='w-full p-2 border rounded-lg'
              />
              {errors.fullName?.firstName && (
                <p className='text-red-500 text-sm'>
                  {errors.fullName.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className='block mb-1 font-medium'>Last Name</label>
              <input
                type='text'
                {...register("fullName.lastName")}
                className='w-full p-2 border rounded-lg'
              />
              {errors.fullName?.lastName && (
                <p className='text-red-500 text-sm'>
                  {errors.fullName.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className='block mb-1 font-medium'>Email</label>
            <input
              type='email'
              {...register("email")}
              className='w-full p-2 border rounded-lg'
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className='block mb-1 font-medium'>Password</label>
            <input
              type='password'
              {...register("password")}
              className='w-full p-2 border rounded-lg'
            />
            {errors.password && (
              <p className='text-red-500 text-sm'>{errors.password.message}</p>
            )}
          </div>

          {errorMessage && (
            <p className='text-red-500 text-sm'>{errorMessage}</p>
          )}
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all'
          >
            Register as User
          </button>
          <button
            type='button'
            className='w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-all'
            onClick={() => router.push("/")}
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignup;

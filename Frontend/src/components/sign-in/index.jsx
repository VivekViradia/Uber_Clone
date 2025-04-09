"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import getUserAndCaptionLogin from "../../services/userService";
import { SignInSchema } from "../../utils/validation";


const SignInComponent = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
    mode: "all",
  });

  const handleLogin = async (values) => {
    setErrorMessage("");
    await getUserAndCaptionLogin(slug, values).then((res) => {
      router.push("/");
    })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  return (
    <div>
      <div className='bg-gray-100 flex items-center justify-center h-[70vh]'>
        <div className='relative w-full max-w-md bg-white shadow-lg rounded-lg p-6 overflow-hidden'>
          <div
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage: 'url("/images/signIn_image.jpg")',
              opacity: "0.6",
            }}
          />
          <div className='relative z-10'>
            <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
              Welcome Back! {slug.toUpperCase()}
            </h2>
            <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label className='text-black'>EMAIL</label>
                <span className='text-rose-600'>*</span>
                <input
                  {...register("email")}
                  type='email'
                  placeholder='Email'
                  className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400'
                />
                {errors?.email?.message && (
                  <p className='text-red-800'>{errors?.email?.message}</p>
                )}
              </div>
              <div>
                <label className='text-black'>PASSWORD</label>
                <span className='text-rose-600'>*</span>
                <input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400'
                />
                {errors?.password?.message && (
                  <p className='text-red-800'>{errors?.password?.message}</p>
                )}
                <div
                  className='absolute right-[10px] top-[186px] opacity-50'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className='material-icons-outlined'>
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </div>
              </div>
              <p className='text-red-800'>{errorMessage}</p>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all'
              >
                Sign In
              </button>
              <p className='text-center mt-4 text-gray-700'>
                Don't have an account?
                <button
                  type='button'
                  className='text-blue-500 hover:underline cursor-pointer'
                  onClick={() => router.push(`/signUp/${slug}`)}
                >
                  Sign Up
                </button>
              </p>
              <button
                type='button'
                className='text-center mt-4 text-gray-700 cursor-pointer'
                onClick={() => router.push("/")}
              >
                Back to Home
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;

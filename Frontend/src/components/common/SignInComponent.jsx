"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import getUserAndCaptionLogin from "../../services/userService";
import { SignInSchema } from "../../utils/validation";
import { useSelector } from "react-redux";
import { useActions } from "../../redux/hook";

const SignInComponent = () => {
  const router = useRouter();
  const { loginModel } = useSelector((state) => state.common);
  const { showLoginModel } = useActions();
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
    await getUserAndCaptionLogin(loginModel.type, values)
      .then((res) => {
        console.log("response", res);
        router.push("/");
        showLoginModel({
          isOpen: false,
          type: "",
        });
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };
  if (!loginModel.isOpen || loginModel.type === "") return null;
  return (
    <div
      id='LoginModal'
      aria-hidden='true'
      className='overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal inset-0 text-default-text tracking-normal'
    >
      <div className='w-full h-full bg-[#000000] bg-opacity-[0.50] flex items-center justify-center'>
        <div className='relative px-[16px] w-full max-w-md h-auto'>
          <div className='relative bg-[#ffffff] rounded-[15px] max-h-screen overflow-y-auto py-[16px] lg:py-[50px] px-[22px] lg:px-[34px]'>
            <div
              className=' flex items-center justify-center'
              style={{ backgroundColor: "rgba(167, 167, 167, 0.75)" }}
            >
              <div className='relative w-full shadow-lg rounded-lg p-6 overflow-hidden'>
                <div className='absolute inset-0 bg-cover bg-center' />
                <div className='relative z-10'>
                  <h2 className='text-3xl font-bold text-center mb-6 text-gray-800'>
                    Welcome Back! {loginModel.type.toUpperCase()}
                  </h2>
                  <form
                    className='space-y-4'
                    onSubmit={handleSubmit(handleLogin)}
                  >
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
                        <p className='text-red-800'>
                          {errors?.password?.message}
                        </p>
                      )}
                      <div
                        className='absolute right-[10px] top-[221px] opacity-50'
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
                        onClick={() => {
                          router.push(`/signUp/${loginModel.type}`);
                          showLoginModel({
                            isOpen: false,
                            type: "",
                          });
                        }}
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
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;

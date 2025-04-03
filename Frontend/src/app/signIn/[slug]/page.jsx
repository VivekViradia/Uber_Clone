"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const { slug } = useParams();
  const router = useRouter();
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
            <form className='space-y-4'>
              <div>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400'
                />
              </div>
              <div>
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400'
                />
              </div>
              <button className='w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all'>
                Sign In
              </button>
            </form>
            <p className='text-center mt-4 text-gray-700'>
              Don't have an account?
              <a
                href='#'
                className='text-blue-500 hover:underline cursor-pointer'
                onClick={() => router.push(`/signUp/${slug}`)}
              >
                Sign Up
              </a>
            </p>
            <p
              className='text-center mt-4 text-gray-700 cursor-pointer'
              onClick={() => router.push("/")}
            >
              Back to Home
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

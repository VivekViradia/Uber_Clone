"use client";
import React, { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import Image from "next/image";
import { useActions } from "../../redux/hook";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
  const [userName, setUserName] = useState(null);
  const { showModel } = useActions();
  const {userDetails} = useSelector((state) => state.user);
  useEffect(() => {
    if (userDetails) {
      setUserName(`${userDetails?.fullName?.firstName} ${userDetails?.fullName?.lastName}`);
    }
  }, [userDetails]);

  const handleLogout = () => {
    console.log("Logout Clicked");
    deleteCookie("captionDetails");
    deleteCookie("captionId");
    setUserName(null);
  };

  const handleLogin = () => {
    console.log("Login Clicked");
    showModel(true)
  }

  const isLoggedIn = !!userName;

  return (
    <nav className='bg-white h-24 px-6 flex justify-center items-center gap-16 border-b border-gray-300 sticky top-0 z-50 shadow-lg'>
      {/* Logo */}
      <div className='w-24 h-full flex items-center'>
        <Image
          src='/images/logo_2.png'
          alt='Nexon Logo'
          width={96}
          height={40}
          className='object-contain max-h-full'
          priority
        />
      </div>

      {/* Title */}
      <h1 className='text-xl font-bold text-gray-800 text-center whitespace-nowrap underline'>
        NEXON A LUXURY CAB SERVICE
      </h1>

      {/* Login/Logout */}
      <div className='flex items-center gap-4 text-gray-700'>
        <div className='justify-center items-center gap-2 cursor-pointer'>
          <div className='flex justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              fill='#5f6368'
            >
              <path d='M480-440v-360q0-17 11.5-28.5T520-840h280q17 0 28.5 11.5T840-800v200q0 17-11.5 28.5T800-560H600L480-440Zm80-200h200v-120H560v120Zm0 0v-120 120Zm238 520q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z' />
            </svg>
          </div>
          <p>Contact Us</p>
        </div>
        {isLoggedIn ? (
          <>
            <div className='justify-center items-center gap-2 cursor-pointer'>
              <div className='flex justify-center items-center'>
                <button onClick={handleLogout} title='Logout'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='24px'
                    viewBox='0 -960 960 960'
                    width='24px'
                    fill='#5f6368'
                  >
                    <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z' />
                  </svg>
                </button>{" "}
              </div>

              <span className='font-medium'>{userName}</span>
            </div>
          </>
        ) : (
          <div className='justify-center items-center gap-2 cursor-pointer'>
            <div className='flex justify-center items-center'>
              <button
                onClick={handleLogin}
                title='Login'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24px'
                  viewBox='0 -960 960 960'
                  width='24px'
                  fill='#5f6368'
                >
                  <path d='M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z' />
                </svg>
              </button>
            </div>
            <span className='font-medium'>Login</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderComponent;

"use client";
import React, { useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";

const HeaderComponent = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const user = JSON.parse(getCookie("captionDetails") || null);
    if (user) {
      setUserName(user?.fullName?.firstName);
    }
  }, []);

  const handleLogout = () => {
    console.log("Logout Clicked");
    deleteCookie("captionDetails");
    deleteCookie("captionId");
    setUserName(null);
    // You can also redirect the user here
  };

  const isLoggedIn = !!userName;

  return (
    <nav className='bg-white shadow-md px-6 py-4 flex justify-between items-center'>
      {/* Left Side Icons */}
      <div className='flex gap-4 items-center text-gray-700'>
        {/* Sample 3 icons */}
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 12h18M3 6h18M3 18h18' />
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
        </svg>
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
        </svg>
      </div>

      {/* Center Title */}
      <h1 className='text-2xl font-bold text-gray-800 text-center flex-1 pr-6'>
        NEXON A LUXURY CAB SERVICE
      </h1>

      {/* Right Side Login/Logout */}
      <div className='flex items-center gap-2 text-gray-700'>
        {isLoggedIn && <span className='font-medium'>{userName}</span>}
        {isLoggedIn ? (
          <button onClick={handleLogout} title='Logout'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 hover:text-red-500 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-8V7'
              />
            </svg>
          </button>
        ) : (
          <button onClick={() => console.log("Login Clicked")} title='Login'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 hover:text-green-500 cursor-pointer'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10 16l4-4m0 0l-4-4m4 4H3m9 4v1m0-8V7'
              />
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
};

export default HeaderComponent;

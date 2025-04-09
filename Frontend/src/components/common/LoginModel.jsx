"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useActions } from "../../redux/hook";


const LoginModel = () => {
  const router = useRouter();
  const { showModel, showLoginModel } = useActions();
  const { isModelOpen } = useSelector((state) => state.common);
  if (isModelOpen)
    return (
      <>
        <div
          id='LoginModal'
          aria-hidden='true'
          className='overflow-y-auto overflow-x-hidden fixed z-50 justify-center items-center h-modal inset-0 text-default-text tracking-normal'
        >
          <div className='w-full h-full bg-[#000000] bg-opacity-[0.50] flex items-center justify-center'>
            <div className='relative px-[16px] w-full max-w-md h-auto'>
              <div className='relative bg-[#ffffff] rounded-[15px] max-h-screen overflow-y-auto h-full py-[16px] lg:py-[50px] px-[22px] lg:px-[34px]'>
                <section className='relative bg-center flex flex-col justify-center items-center'>
                  <div
                    className='p-8 rounded-lg'
                    style={{ backgroundColor: "rgba(167, 167, 167, 0.75)" }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      height='60px'
                      viewBox='0 -960 960 960'
                      width='60px'
                      fill='#5f6368'
                    >
                      <path d='M160-200q-66 0-113-47T0-360q0-57 36.5-101t93.5-55l-28-24H0v-60h180l100 60 160-60h126l-62-80H400v-80h142l84 108 134-68v120h-92l70 92q15-6 30.5-9t31.5-3q66 0 113 47t47 113q0 66-47 113t-113 47q-66 0-113-47t-47-113q0-27 9.5-52.5T676-460l-20-24-136 204H400l-80-70q-5 63-51 106.5T160-200Zm0-80q33 0 56.5-23.5T240-360q0-33-23.5-56.5T160-440q-33 0-56.5 23.5T80-360q0 33 23.5 56.5T160-280Zm294-240-144 54 144-54h130-130Zm346 240q33 0 56.5-23.5T880-360q0-33-23.5-56.5T800-440q-33 0-56.5 23.5T720-360q0 33 23.5 56.5T800-280Zm-322-80 106-160H454l-144 54 120 106h48Z' />
                    </svg>
                    <h2 className='text-3xl font-bold'>
                      Go anywhere with ease
                    </h2>
                    <p className='mt-4 text-lg text-center'>
                      Request a ride, hop in, and go.
                    </p>
                    <button
                      className='mt-6 bg-black text-white py-2 px-6 rounded w-full text-center'
                      onClick={() => {
                        showModel(false);
                        showLoginModel({
                          isOpen: true,
                          type: "caption",
                        });
                        // router.push("/signIn/caption");
                      }}
                    >
                      Drive as a Captain
                    </button>
                    <button
                      className='mt-6 bg-black text-white py-2 px-6 rounded w-full text-center'
                      onClick={() => {
                        showModel(false);
                        showLoginModel({
                          isOpen: true,
                          type: "user",
                        });
                        // router.push("/signIn/passenger");
                      }}
                    >
                      Book a Ride
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default LoginModel;

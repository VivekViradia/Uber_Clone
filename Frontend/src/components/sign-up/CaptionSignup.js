"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useActions } from '../../redux/hook';


const captionSignUpSchema = Yup.object({
    fullName: Yup.object({
        firstName: Yup.string()
            .required("First name is required")
            .min(2, "Minimum 2 characters"),
        lastName: Yup.string()
            .required("Last name is required")
            .min(2, "Minimum 2 characters"),
    }),
    email: Yup.string()
        .required("Email is required")
        .email("Invalid email format"),
    password: Yup.string()
        .required("Password is required")
        .min(6, "Minimum 6 characters"),
    vehicle: Yup.object({
        color: Yup.string().required("Vehicle color is required"),
        plateNumber: Yup.string().required("Plate number is required"),
        capacity: Yup.number()
            .typeError("Capacity must be a number")
            .required("Capacity is required")
            .min(1, "Minimum 1 seat")
            .max(6, "Maximum 6 seats"),
        vehicleType: Yup.string().required("Vehicle type is required"),
    }),
});

const CaptionSignup = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { UpdateUserDetails } = useActions();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(captionSignUpSchema),
        mode: "all",
    });

    const onSubmit = async (data) => {
        await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/caption/register`, data)
            .then((res) => {
                setCookie("captionDetails", res?.data?.caption);
                UpdateUserDetails(res?.data?.caption)
                alert(
                    `Caption you are register as ${res?.data?.caption?.fullName?.firstName} ${res?.data?.caption?.fullName?.lastName}`,
                );
                router.push("/");
            })
            .catch((err) => {
                console.log('err.response.data.message);', err);
                setErrorMessage(err.response.data.message);
                // alert(err.response.data.message);
            });
    };
    return (
        <div className='max-h-screen flex items-center justify-center bg-gray-100 p-6'>
            <div className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl'>
                <h2 className='text-3xl font-bold text-center mb-6'>
                    Captain Registration
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

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block mb-1 font-medium'>Vehicle Color</label>
                            <input
                                type='text'
                                {...register("vehicle.color")}
                                className='w-full p-2 border rounded-lg'
                            />
                            {errors.vehicle?.color && (
                                <p className='text-red-500 text-sm'>
                                    {errors.vehicle.color.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className='block mb-1 font-medium'>Plate Number</label>
                            <input
                                type='text'
                                {...register("vehicle.plateNumber")}
                                className='w-full p-2 border rounded-lg'
                            />
                            {errors.vehicle?.plateNumber && (
                                <p className='text-red-500 text-sm'>
                                    {errors.vehicle.plateNumber.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block mb-1 font-medium'>Vehicle Capacity</label>
                            <input
                                type='number'
                                {...register("vehicle.capacity")}
                                className='w-full p-2 border rounded-lg'
                            />
                            {errors.vehicle?.capacity && (
                                <p className='text-red-500 text-sm'>
                                    {errors.vehicle.capacity.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className='block mb-1 font-medium'>Vehicle Type</label>
                            <select
                                {...register("vehicle.vehicleType")}
                                className='w-full p-2 border rounded-lg'
                            >
                                <option value=''>Select</option>
                                <option value='bike'>Bike</option>
                                <option value='car'>Car</option>
                                <option value='auto'>Auto</option>
                            </select>
                            {errors.vehicle?.vehicleType && (
                                <p className='text-red-500 text-sm'>
                                    {errors.vehicle.vehicleType.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all'
                    >
                        Register as Captain
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CaptionSignup
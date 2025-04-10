"use client";
import Link from "next/link";
import { set, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Mail, Lock } from "lucide-react";
import { getUserAndCaptionLogin } from "@/services/userService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserLoginFormValues } from "@/types/user.type";
import { CaptainLoginFormValues } from "@/types/caption.type";

export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();
  const userForm = useForm<UserLoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const captainForm = useForm<CaptainLoginFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onUserSubmit = async (data: UserLoginFormValues) => {
    setErrorMessage(null); // Reset error message
    // Handle user login logic here
    await getUserAndCaptionLogin("user", data)
      .then((res) => {
        console.log("response", res);
        router.push("/");
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  const onCaptainSubmit = async (data: CaptainLoginFormValues) => {
    setErrorMessage(null); // Reset error message
    // Handle captain login logic here
    await getUserAndCaptionLogin("caption", data)
      .then((res) => {
        console.log("response", res);
        router.push("/");
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  return (
    <div className='w-full max-w-md'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold'>Welcome Back</h1>
        <p className='text-gray-400'>Sign in to your account to continue</p>
      </div>

      <Tabs defaultValue='user' className='w-full'>
        <TabsList className='grid w-full grid-cols-2 mb-8'>
          <TabsTrigger
            value='user'
            className='data-[state=active]:bg-amber-500 data-[state=active]:text-black'
          >
            Rider
          </TabsTrigger>
          <TabsTrigger
            value='captain'
            className='data-[state=active]:bg-amber-500 data-[state=active]:text-black'
          >
            Captain
          </TabsTrigger>
        </TabsList>

        <TabsContent value='user' className='space-y-4'>
          <form
            onSubmit={userForm.handleSubmit(onUserSubmit)}
            className='space-y-4'
          >
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
                  {...userForm.register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {userForm.formState.errors.email && (
                <p className='text-red-500 text-xs mt-1'>
                  {userForm.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <label htmlFor='password' className='text-sm font-medium'>
                  Password
                </label>
                <Link
                  href='#'
                  className='text-xs text-amber-500 hover:underline'
                >
                  Forgot password?
                </Link>
              </div>
              <div className='relative'>
                <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                <Input
                  id='password'
                  type='password'
                  placeholder='Enter your password'
                  className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
                  {...userForm.register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </div>
              {userForm.formState.errors.password && (
                <p className='text-red-500 text-xs mt-1'>
                  {userForm.formState.errors.password.message}
                </p>
              )}
            </div>
            {errorMessage && (
              <p className='text-red-500 text-xs mt-1'>{errorMessage}</p>
            )}

            <Button
              type='submit'
              className='w-full bg-amber-500 text-black hover:bg-amber-600'
              disabled={userForm.formState.isSubmitting}
            >
              {userForm.formState.isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
            <div className='text-center text-sm text-gray-400'>
              Don't have an account?{" "}
              <Link href='/signup' className='text-amber-500 hover:underline'>
                Sign up
              </Link>
            </div>
          </form>
        </TabsContent>

        <TabsContent value='captain' className='space-y-4'>
          <form
            onSubmit={captainForm.handleSubmit(onCaptainSubmit)}
            className='space-y-4'
          >
            <div className='space-y-2'>
              <label htmlFor='captain-email' className='text-sm font-medium'>
                Email
              </label>
              <div className='relative'>
                <Mail className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                <Input
                  id='captain-email'
                  type='email'
                  placeholder='Enter your email'
                  className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
                  {...captainForm.register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {captainForm.formState.errors.email && (
                <p className='text-red-500 text-xs mt-1'>
                  {captainForm.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className='space-y-2'>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='captain-password'
                  className='text-sm font-medium'
                >
                  Password
                </label>
                <Link
                  href='#'
                  className='text-xs text-amber-500 hover:underline'
                >
                  Forgot password?
                </Link>
              </div>
              <div className='relative'>
                <Lock className='absolute left-3 top-3 h-5 w-5 text-gray-400' />
                <Input
                  id='captain-password'
                  type='password'
                  placeholder='Enter your password'
                  className='pl-10 bg-gray-900 border-gray-700 focus:border-amber-500'
                  {...captainForm.register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
              </div>
              {captainForm.formState.errors.password && (
                <p className='text-red-500 text-xs mt-1'>
                  {captainForm.formState.errors.password.message}
                </p>
              )}
            </div>
            {errorMessage && (
              <p className='text-red-500 text-xs mt-1'>{errorMessage}</p>
            )}
            <Button
              type='submit'
              className='w-full bg-amber-500 text-black hover:bg-amber-600'
              disabled={captainForm.formState.isSubmitting}
            >
              {captainForm.formState.isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
            <div className='text-center text-sm text-gray-400'>
              Don't have an account?{" "}
              <Link
                href='/captain-signup'
                className='text-amber-500 hover:underline'
              >
                Sign up as Captain
              </Link>
            </div>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

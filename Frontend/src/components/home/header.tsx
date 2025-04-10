"use client";
import React, { useEffect, useState } from "react";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
// import { useActions } from "../../redux/hook";
// import { useSelector } from "react-redux";
import Link from "next/link";
import { useActions, useTypedSelector } from '@redux/hook';
import { Button } from "@components/ui/button"
import { Car, Menu } from "lucide-react"

const HeaderComponent = () => {
  const [userName, setUserName] = useState(null);
  const { showModel, UpdateCaptionDetails } = useActions();
  const { userDetails } = useTypedSelector((state) => state.user);
  const { isModelOpen } = useTypedSelector((state) => state.common);

  useEffect(() => {
    if (userDetails) {
      setUserName(
        `${userDetails?.fullName?.firstName} ${userDetails?.fullName?.lastName}`
      );
    }
  }, [userDetails]);

  const handleLogout = () => {
    deleteCookie("captionDetails");
    deleteCookie("captionId");
    setUserName(null);
    UpdateCaptionDetails({
      fullName: { firstName: "", lastName: "" },
      email: "",
      phoneNumber: "",
      address: "",
      userId: "",
      userType: "",
    });
  };

  const handleLogin = () => {
    showModel(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold tracking-tight text-amber-500">LUXRIDE</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-sm font-medium text-amber-500 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-amber-500 transition-colors">
            Services
          </Link>
          <Link href="#" className="text-sm font-medium text-amber-500 transition-colors">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-amber-500 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="hidden md:flex border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="hidden md:flex bg-amber-500 text-black hover:bg-amber-600">Register</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
};

export default HeaderComponent;

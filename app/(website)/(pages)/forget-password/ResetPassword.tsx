"use client";
import React from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import queryClient from "@/utlis/queryClient";
import { Button } from '@/components/ui/button';

interface LoginFormValues {
  email: string;
  code: number;
  password: string;
}
function ResetPassword() {
  return (
    <div>
        <form
        className="bg-white shadow-md rounded px-8 py-6"
        // onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            // {...register("email", { required: true })}
          />
          
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="verification_code"
          >
            Verification Code:
          </label>
          <input
            className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="verification_code"
            type="text"
            placeholder="Enter OTP"
            // {...register("verification_code", { required: true })}
          />
          {/* {errors.verification_code && (
            <p className="text-red-500">OTP is required.</p>
          )} */}
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
           New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Type new password"
            // {...register("password", { required: true })}
          />
        </div>
        <div className="flex items-center justify-end">
          
          <Button
            variant={"default"}
            // onClick={handleResend}
          >
            Reset Password
          </Button>
        </div>
        {/* {error && (
          <p className="text-red-500">{(error as any).response.data.message}</p>
        )} */}
      </form>
    </div>
  )
}

export default ResetPassword
"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type BookingFormData = {
  mobile: string;
  passenger_name: string;
  gender: "male" | "female";
};

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>();
  const [gender, setGender] = useState<"male" | "female">("male");
  
  const onSubmit = (data: BookingFormData) => {

    console.log("Form Submitted:", data);

  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-3 gap-6">
      {/* Passenger Details */}
      <div className="col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Passenger Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="passenger_name">Passenger Name</Label>
                  <Input
                    id="passenger_name"
                    {...register("passenger_name", { required: true })}
                  />
                  {errors.passenger_name && (
                    <p className="text-red-500">First name is required.</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile No.</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    {...register("mobile", { required: true })}
                  />
                  {errors.mobile && (
                    <p className="text-red-500">Mobile number is required.</p>
                  )}
                </div>
              </div>
              <div>
                <Label>Gender</Label>
                <div className="flex space-x-4 mt-2">
                  <Button type="button" variant={gender === "male" ? "default" : "outline"} onClick={() => setGender("male")}>Male</Button>
                  <Button type="button" variant={gender === "female" ? "default" : "outline"} onClick={() => setGender("female")}>Female</Button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-primary-color hover:bg-primary-color/90">
                Proceed to Payment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Ticket Info */}
      <aside className="col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Trip Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="font-semibold">Shohagh Paribahan</p>
              <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-primary-color">৳2200</p>
              <p>
                Seat: <span className="font-semibold">A2</span>
              </p>
              </div>
              <div className="grid grid-cols-4 gap-2 place-items-center">
              <p className="col-span-1 text-sm">
                Departure:{" "}
                <span className="font-semibold">Dhaka, 10:15 PM</span>
              </p>
              <p className="col-span-2 justify-center flex text-gray-500">
                --------------------
              </p>
              <p className="col-span-1 text-sm">
                Arrival:{" "}
                <span className="font-semibold">Cox's Bazar, 06:15 AM</span>
              </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}

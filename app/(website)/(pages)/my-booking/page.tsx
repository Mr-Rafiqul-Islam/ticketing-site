"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const MyBooking = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  return (
    <div className="container py-10">
      <h1 className="text-center text-primary-color text-4xl font-bold">
        My Booking
      </h1>
      <div className="flex justify-center gap-4 mt-5">
        <button
          className={cn(
            "px-4 py-2 rounded-full border border-primary-color text-sm text-primary-color font-bold",
            activeTab === "all" ? "bg-primary-color text-white" : ""
          )}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={cn(
            "px-4 py-2 rounded-full border border-primary-color text-sm text-primary-color font-bold",
            activeTab === "pending" ? "bg-primary-color text-white" : ""
          )}
          onClick={() => setActiveTab("pending")}
        >
          Pending
        </button>
      </div>
      <hr className="my-4 h-[2px] bg-primary-color" />

      <div className="flex flex-col md:flex-row gap-4">
        {/* side bar */}
        <div className="w-full md:w-1/4 rounded-lg overflow-hidden">
          <Card className="p-4">
            <CardContent>
              <h3 className="text-base font-bold">Filters</h3>
            </CardContent>
          </Card>
        </div>
        <div className="w-full md:w-3/4">
        <Card className="p-4 rounded-lg">
            <CardContent>
              <Image src="/city bus-bro.svg" alt="bus" className="mx-auto my-5 opacity-80" width={400} height={400}/>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;

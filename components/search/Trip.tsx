"use client";
import React from "react";
import BusCard from "./BusCard";
import { useSearchContext } from "@/utlis/provider/SearchProvider";

export default function Trip() {
  const { data } = useSearchContext();
  console.log(data, "Context DATA");
  const trips = data?.trips;
  console.log(trips, "Trips from context");
  return (
    <div className="grid grid-cols-1 gap-4">
        {
            trips?.map((trip: any, index: number) => (
                <BusCard key={index} />
            ))
        }
      
    </div>
  );
}

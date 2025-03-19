"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiSeatBold } from "react-icons/pi";
import { GiStarFormation } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import SeatLayout from "./SeatLayout";
import { Trip } from "@/types";
import { formatTime } from "@/lib/helper";

const seats = [
  "A1",
  "A2",
  "A3",
  "A4",
  "B1",
  "B2",
  "B3",
  "B4",
  "C1",
  "C2",
  "C3",
  "C4",
  "D1",
  "D2",
  "D3",
  "D4",
  "E1",
  "E2",
  "E3",
  "E4",
  "F1",
  "F2",
  "F3",
  "F4",
  "G1",
  "G2",
  "G3",
  "G4",
  "H1",
  "H2",
  "H3",
  "H4",
  "I1",
  "I2",
  "I3",
  "I4",
];
function SeatBooking({
  isOpen,
  onClose,
  trip,
}: {
  isOpen: boolean;
  onClose: () => void;
  trip: Trip;
}) {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookedSeats, setBookedSeats] = useState<string[]>(["A1", "B3"]); // add booked seats here
  const maxSeats = 4;

  const toggleSeat = (seat: string) => {
    if (selectedSeats.length < maxSeats) {
      setSelectedSeats((prev) =>
        prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
      );
    } else if (selectedSeats.includes(seat)) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seat));
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full max-h-screen overflow-y-scroll">
        <Tabs defaultValue="seat">
          <SheetHeader>
            <SheetTitle className="font-gesit uppercase text-xl mb-2">
              Select Seats
            </SheetTitle>
            <SheetDescription>
              Maximum 4 seats can be selected. {selectedSeats.length} ticket(s)
              selected.
            </SheetDescription>
          </SheetHeader>
          <TabsList className="w-full justify-around bg-primary-color">
            <TabsTrigger
              value="seat"
              className="font-gesit text-xs md:text-base text-white"
            >
              <PiSeatBold className="me-1" size="16" />
              Seat
            </TabsTrigger>
            <TabsTrigger
              value="amneties"
              className="font-gesit text-xs md:text-base text-white"
            >
              <GiStarFormation className="me-1" size="16" />
              Amneties
            </TabsTrigger>
            <TabsTrigger
              value="policies"
              className="font-gesit text-xs md:text-base text-white"
            >
              <IoShieldCheckmarkOutline className="me-1" size="16" />
              Policies
            </TabsTrigger>
          </TabsList>
          <TabsContent value="seat" className="h-full">
            <div className="h-full">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">{trip?.vehicle?.name}</h2>
                  <p className="text-sm text-gray-600">
                    {trip?.vehicle?.type?.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Coach No. #{trip?.vehicle?.vehicle_no}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Departure</p>
                    <p className="text-lg font-bold">
                      {trip?.route.from_location.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {trip?.start_time ? formatTime(trip.start_time) : "N/A"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Arrival</p>
                    <p className="text-lg font-bold">
                      {trip?.route.to_location.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {trip?.end_time ? formatTime(trip.end_time) : "N/A"}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Trip time may delay due to traffic
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  Maximum 4 seats can be selected.
                </p>
                <div className="flex justify-around my-4">
                  <ul className="flex items-center">
                    <li className="w-[15px] h-[15px] mr-[5px] rounded-[4px] available-example bg-[#d7d7d7] border border-[#d7d7d7]"></li>
                    <li className="text-[12px] font-normal leading-[15px] text-[#202020]">
                      Available
                    </li>
                  </ul>
                  <ul className="flex items-center">
                    <li className="w-[15px] h-[15px] mr-[5px] rounded-[4px] sold-example bg-red-500  opacity-50 border border-[#ef4444]"></li>
                    <li className="text-[12px] font-normal leading-[15px] text-[#202020]">
                      Sold
                    </li>
                  </ul>
                  <ul className="flex items-center">
                    <li className="w-[15px] h-[15px] mr-[5px] rounded-[4px] selected-example bg-primary-color border border-primary-color"></li>
                    <li className="text-[12px] font-normal leading-[15px] text-[#202020]">
                      Selected
                    </li>
                  </ul>
                </div>
                {/* Seat Layout part start  */}
                <SeatLayout
                  seats={trip?.vehicle.seats}
                  vehicle_category={trip?.vehicle.category}
                  bookedSeats={bookedSeats}
                  selectedSeats={selectedSeats}
                  toggleSeat={toggleSeat}
                  maxSeats={maxSeats}
                />
                {/* Seat Layout part end  */}
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">
                  Total: ৳{trip?.ticket_price}
                </p>
                <button className="bg-primary-color text-white p-3 w-full rounded mt-2">
                  Continue
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="amneties">
            Check Your Amnities here.
            <p>id:{trip?.vehicle?.amenities_id}</p>
          </TabsContent>
          <TabsContent value="policies">Policies are given here.</TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

export default SeatBooking;

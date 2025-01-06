'use client';
import React, { useState } from "react";
import busImg from "@/public/hanif.png";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiSeatBold } from "react-icons/pi";
import { GiStarFormation } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
const BusCard = ({ bus }: { bus?: any }) => {

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookedSeats, setBookedSeats] = useState<string[]>(["A1", "B3"]); // add booked seats here
  const seats = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2","C3", "C4", "D1", "D2", "D3", "D4", "E1", "E2", "E3", "E4", "F1", "F2", "F3", "F4", "G1", "G2", "G3", "G4", "H1", "H2", "H3", "H4","I1","I2","I3","I4"];		
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
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-3 lg:gap-4">
      <div className="flex gap-2">
        <Image
          src={busImg}
          className="w-20 h-8 object-fit"
          width={100}
          height={10}
          alt="operator logo"
        />
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-xs md:text-base">Hanif Enterprise</h3>
          <p className="text-gray-400 text-xs md:text-base">
            Hino, AK1J Super Plus Non AC
          </p>
          <p className="text-gray-700 text-xs md:text-base">
            <strong>Route:</strong>Dhaka - Cox's Bazar
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-4 items-center">
        <div className="departure-time">
          <h5 className="text-xs md:text-base">06:30 AM</h5>
          <p className="text-xs md:text-base">Wed, 8 Jan</p>
          <p className="text-xs md:text-base">Dhaka</p>
        </div>
        <p className="text-xs md:text-base">Duration: 11h 0m</p>
        <div className="arrival-time">
          <h5 className="text-xs md:text-base">06:30 AM</h5>
          <p className="text-xs md:text-base">Wed, 8 Jan</p>
          <p className="text-xs md:text-base">Dhaka</p>
        </div>
      </div>
      <div className="flex justify-between lg:justify-end lg:gap-4 items-center p-2 bg-[#F1F1F1] lg:bg-transparent">
        <h3 className="lg:text-2xl  font-bold text-primary-color">
          ৳<span>1000</span>
        </h3>
        <div className="flex flex-col items-center gap-1">
          <Sheet>
            <SheetTrigger>
              <a className="inline-block bg-primary-color hover:bg-primary-color/80 transition-all duration-300 text-white px-4 py-2 rounded-md">
                Book Ticket
              </a>
            </SheetTrigger>
            <SheetContent className="w-full">
              <Tabs defaultValue="seat">
                <SheetHeader>
                  <SheetTitle className="font-gesit uppercase text-xl mb-2">
                    Select Seats
                  </SheetTitle>
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
                        <h2 className="text-xl font-bold">Hanif Enterprise</h2>
                        <p className="text-sm text-gray-600">
                          Hino, AK1J Super Plus Non AC
                        </p>
                        <p className="text-sm text-gray-600">Coach No. #800</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Departure</p>
                          <p className="text-lg font-bold">Dhaka</p>
                          <p className="text-sm text-gray-600">06:30 AM</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Arrival</p>
                          <p className="text-lg font-bold">Cox's Bazar</p>
                          <p className="text-sm text-gray-600">02:01 PM</p>
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
                      <div className="grid grid-cols-4 gap-2 mt-2">
                      {seats.map((seat, i) => (
                        <button
                          key={i}
                          onClick={() => toggleSeat(seat)}
                          className={`p-2 rounded ${
                            bookedSeats.includes(seat) ? 'bg-red-500 text-white opacity-50 cursor-not-allowed' :
                            selectedSeats.includes(seat) && selectedSeats.length <= maxSeats
                              ? "bg-primary-color text-white"
                              : "bg-gray-300 text-gray-600"
                          } ${selectedSeats.length >= maxSeats && !selectedSeats.includes(seat) ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {seat}
                        </button>
                      ))}
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg font-bold">Total: ৳2000</p>
                      <button className="bg-primary-color text-white p-3 w-full rounded mt-2">
                        Continue
                      </button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="amneties">
                  Change your password here.
                </TabsContent>
                <TabsContent value="policies">
                  Policies are given here.
                </TabsContent>
              </Tabs>
            </SheetContent>
          </Sheet>
          <p className="text-gray-800 text-sm">
            <strong>24</strong> Seat(s) Available
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusCard;

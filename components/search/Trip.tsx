"use client";
import React, { useMemo } from "react";
import BusCard from "./BusCard";
import { useSearchTrip } from "@/utlis/hooks/useSearchTrip";
import { Trip as BusTrip } from "@/types";
import { Skeleton } from "../ui/skeleton";

interface TripProps {
  from: string;
  to: string;
  date: string;
  filters: Record<string, boolean>;
  sortBy: "lowest" | "highest"; 
}

export default function Trip({ from, to, date, filters, sortBy }: TripProps) {
  const { data, isLoading, error } = useSearchTrip({
    from_location_id: from,
    to_location_id: to,
    date,
  });

  if (error) {
    console.log("Error fetching trips:", error.message);
  }

  // Memoize filtering and sorting logic for performance
  const trips = useMemo(() => {
    if (!data?.trips) return [];

    let filtered = data.trips.filter((trip: BusTrip) => {
      // Filter Bus Type
      const type = trip.vehicle.type.name.toLowerCase();
      const isAc = filters.Ac && type === "ac";
      const isNonAc = filters["Non-Ac"] && type === "non-ac";
      const noTypeFilter = !filters.Ac && !filters["Non-Ac"];
      const typeMatch = isAc || isNonAc || noTypeFilter;

      // Filter Bus Company
      const company = trip.vehicle.name;
      const selectedCompanies = ["Hanif", "Ena", "Green Line", "Royal Coach", "Golden Line"].filter(
        (company) => filters[company]
      );
      const companyMatch = selectedCompanies.length === 0 || selectedCompanies.includes(company);

      return typeMatch && companyMatch;
    });

    // Sort trips by ticket price
    filtered.sort((a: BusTrip, b: BusTrip) => {
      const priceA = Number(a.ticket_price);
      const priceB = Number(b.ticket_price);
      return sortBy === "lowest" ? priceA - priceB : priceB - priceA;
    });

    return filtered;
  }, [data, filters, sortBy]);

  return (
    <div className="grid grid-cols-1 gap-4">
      {isLoading ? (
        <>
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
          <Skeleton className="h-28 w-full" />
        </>
      ) : trips.length === 0 ? (
        <p className="text-center text-3xl mt-5">{"No Trips Available"}</p>
      ) : (
        trips.map((trip: BusTrip, index: number) => (
          <BusCard key={trip.id || index} trip={trip} />
        ))
      )}
    </div>
  );
}

import React from "react";

type Seats = {
  id: number;
  seat_no: string;
  is_booked: number;
};
interface SeatLayoutProps {
  seats: Seats[];
  vehicle_category: string;
  bookedSeats: string[];
  selectedSeats: string[];
  toggleSeat: (seat: string) => void;
  maxSeats: number;
}

const SeatLayout: React.FC<SeatLayoutProps> = ({
  seats,
  vehicle_category,
  bookedSeats,
  selectedSeats,
  toggleSeat,
  maxSeats,
}) => {
  return (
    <>
      {vehicle_category == "0" ? (
        <div className="px-4">
          <div className="grid grid-cols-2 gap-10 mt-2">
            <div className="grid grid-cols-2 gap-2">
              {seats
                .filter(
                  (seat) =>
                    seat.seat_no.includes("1") || seat.seat_no.includes("2")
                )
                .map((seat, i) => (
                  <button
                    key={seat.id}
                    disabled={bookedSeats.includes(seat.seat_no)}
                    onClick={() => toggleSeat(seat.seat_no)}
                    className={`p-2 rounded ${
                      bookedSeats.includes(seat.seat_no)
                        ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                        : selectedSeats.includes(seat.seat_no) &&
                          selectedSeats.length <= maxSeats
                        ? "bg-primary-color text-white"
                        : "bg-gray-300 text-gray-600"
                    } ${
                      selectedSeats.length >= maxSeats &&
                      !selectedSeats.includes(seat.seat_no)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {seat.seat_no}
                  </button>
                ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {seats
                .filter(
                  (seat) =>
                    seat.seat_no.includes("3") || seat.seat_no.includes("4")
                )
                .map((seat, i) => (
                  <button
                    key={seat.id}
                    disabled={bookedSeats.includes(seat.seat_no)}
                    onClick={() => toggleSeat(seat.seat_no)}
                    className={`p-2 rounded ${
                      bookedSeats.includes(seat.seat_no)
                        ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                        : selectedSeats.includes(seat.seat_no) &&
                          selectedSeats.length <= maxSeats
                        ? "bg-primary-color text-white"
                        : "bg-gray-300 text-gray-600"
                    } ${
                      selectedSeats.length >= maxSeats &&
                      !selectedSeats.includes(seat.seat_no)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {seat.seat_no}
                  </button>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4">
          <div className="grid grid-cols-2 gap-10 mt-2">
            {/* Left Column - Seats ending with 1 */}
            <div className="grid grid-cols-2 gap-2">
              <div className="grid gap-2">
                {seats
                  .filter((seat) => seat.seat_no.includes("1"))
                  .map((seat) => (
                    <button
                      key={seat.id}
                      disabled={bookedSeats.includes(seat.seat_no)}
                      onClick={() => toggleSeat(seat.seat_no)}
                      className={`w-full p-2 rounded ${
                        bookedSeats.includes(seat.seat_no)
                          ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                          : selectedSeats.includes(seat.seat_no) &&
                            selectedSeats.length <= maxSeats
                          ? "bg-primary-color text-white"
                          : "bg-gray-300 text-gray-600"
                      } ${
                        selectedSeats.length >= maxSeats &&
                        !selectedSeats.includes(seat.seat_no)
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {seat.seat_no}
                    </button>
                  ))}
              </div>
              <div className="px-4"></div>
            </div>
            {/* Right Column - Seats ending with 2 or 3 */}
            <div className="grid grid-cols-2 gap-2">
              {seats
                .filter(
                  (seat) =>
                    seat.seat_no.includes("2") || seat.seat_no.includes("3")
                )
                .map((seat) => (
                  <button
                    key={seat.id}
                    disabled={bookedSeats.includes(seat.seat_no)}
                    onClick={() => toggleSeat(seat.seat_no)}
                    className={`w-full p-2 rounded ${
                      bookedSeats.includes(seat.seat_no)
                        ? "bg-red-500 text-white opacity-50 cursor-not-allowed"
                        : selectedSeats.includes(seat.seat_no) &&
                          selectedSeats.length <= maxSeats
                        ? "bg-primary-color text-white"
                        : "bg-gray-300 text-gray-600"
                    } ${
                      selectedSeats.length >= maxSeats &&
                      !selectedSeats.includes(seat.seat_no)
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {seat.seat_no}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SeatLayout;

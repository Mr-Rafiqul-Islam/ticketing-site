import { Seats } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface TripState {
  trip_id: number | null;
  seat_data: Seats[];
  travel_date: string | null;
}

const initialState: TripState = {
  trip_id: null,
  seat_data: [],
  travel_date: null,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripData: (state, action: PayloadAction<Partial<TripState>>) => {
      return { ...state, ...action.payload };
    },
    resetTrip: () => initialState,
  },
});

export const { setTripData, resetTrip } = tripSlice.actions;
export default tripSlice.reducer;

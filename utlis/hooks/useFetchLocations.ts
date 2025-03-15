import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { getToken } from "./useAuth";

// Fetch location bus data
export const useFetchLocations = () => {
  return useQuery({
    queryKey: ["location-bus"],
    queryFn: async () => {
      const token = getToken    ();
      const response = await api.get("/location-bus",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};
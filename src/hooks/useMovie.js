import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useMovie(){
     const urlBase = import.meta.env.VITE_URL;        
    
     const { data: movies=[],isLoading, isError, error } = useQuery({
        queryKey: ["movies"],
        queryFn: async () => {
          const res = await axios.get(urlBase+"films");
          return res.data;
        },
        staleTime: 1000 * 60 * 5, // data dianggap fresh selama 5 menit
      });
      
    return({
        movies,
        isLoading,
        error,
        isError
    })
}
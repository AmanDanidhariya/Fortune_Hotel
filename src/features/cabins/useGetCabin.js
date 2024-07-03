import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apicabins";

export function useGetCabin(){
    const {
        isLoading,
        data: cabins,
        error,
        isError,
      } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
      });
return {isLoading, error, isError, cabins}
}
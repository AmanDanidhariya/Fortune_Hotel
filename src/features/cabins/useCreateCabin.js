import { QueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apicabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = new QueryClient();
  const { mutate: createCabin, isLoading: isCreated } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {createCabin, isCreated}
}

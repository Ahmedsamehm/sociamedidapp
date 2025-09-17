import { useQuery } from "@tanstack/react-query";
import { fetchProfileData } from "../_services/fetchUserPosts";

const useProfileData = () => {
  const {
    data: userProfile,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => {
      return fetchProfileData();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
  return { userProfile, isPending, isError, error };
};

export default useProfileData;

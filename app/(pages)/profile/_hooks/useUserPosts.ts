import { useQuery } from "@tanstack/react-query";
import { fetchUserPosts } from "../_services/fetchUserPosts";

const useUserPosts = () => {
  const {
    data: userPosts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["userPosts"],
    queryFn: fetchUserPosts,

    refetchOnWindowFocus: false,
  });
  return { userPosts, isPending, isError, error };
};

export default useUserPosts;

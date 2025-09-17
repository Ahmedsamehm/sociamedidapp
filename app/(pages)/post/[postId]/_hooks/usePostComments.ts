import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

import postCommentsServices from "../_services/postCommentsServices";

const usePostComments = () => {
  const { postId } = useParams();
  const {
    data: postComments,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => {
      return postCommentsServices(postId);
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
  return { postComments: postComments || [], isPending, isLoading };
};

export default usePostComments;

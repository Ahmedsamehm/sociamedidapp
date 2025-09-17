"use client";
import { useQuery } from "@tanstack/react-query";

import singlePostServices from "../_services/singlePost";
import { useParams } from "next/navigation";

const useSinglePost = () => {
  const { postId } = useParams();

  const {
    data: singlePost,
    isPending,
    isLoading,
  } = useQuery({
    queryKey: ["singlePost", postId],
    queryFn: () => {
      return singlePostServices(postId);
    },
    staleTime: 60000,
    cacheTime: 60000,
    refetchOnWindowFocus: false,
  });
  return { singlePost: singlePost?.post || {}, isPending, isLoading };
};

export default useSinglePost;

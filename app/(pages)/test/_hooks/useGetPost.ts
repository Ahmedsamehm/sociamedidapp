import { useQuery } from "@tanstack/react-query";
import React from "react";
import { GetPosts } from "../_services/fetchUserPosts";

const useGetPost = () => {
  const { data: post, isPending } = useQuery({
    queryKey: ["post"],
    queryFn: () => GetPosts(),
  });
  return {
    post,
    isPending,
  };
};

export default useGetPost;

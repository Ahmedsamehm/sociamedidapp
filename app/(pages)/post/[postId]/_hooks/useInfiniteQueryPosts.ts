import fetchAllPosts from "@/app/(pages)/(home)/_services/fetchAllPosts";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfiniteQueryPosts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useInfiniteQuery({
    queryKey: ["feed", 10],
    queryFn: ({ pageParam }) => fetchAllPosts({ pageParam, limit: 10 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, numberOfPages } = lastPage.paginationInfo;
      return currentPage < numberOfPages ? currentPage + 1 : undefined;
    },

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
  };
};

export default useInfiniteQueryPosts;

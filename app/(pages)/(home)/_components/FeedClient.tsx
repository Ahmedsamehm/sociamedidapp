"use client";
import React from "react";

import { PostCard } from "@/app/components/PostCard";
import { Posts } from "@/app/types/types";
import SkeletonComponent from "@/app/components/SkeletonComponent";
import useInfiniteQueryPosts from "../../post/[postId]/_hooks/useInfiniteQueryPosts";

import VirtualScroller from "@/app/components/VirtualScroller";

export type PostProps = { post: Posts };

const FeedClient = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } = useInfiniteQueryPosts();

  const allPosts = data?.pages?.flatMap((page) => page.posts) ?? [];

  if (isPending) {
    return (
      <div className="space-y-3">
        {Array.from({ length: 2 }).map((_, i) => (
          <SkeletonComponent key={i} />
        ))}
      </div>
    );
  }

  return (
    <VirtualScroller
      data={allPosts}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      gap={20}
      overscan={2}
      renderItem={(post: Posts) => <PostCard post={post} key={post?.id} />}
    />
  );
};

export default FeedClient;

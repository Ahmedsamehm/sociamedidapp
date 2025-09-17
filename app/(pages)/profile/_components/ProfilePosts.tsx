"use client";

import { PostCard } from "@/app/components/PostCard";
import React from "react";
import useUserPosts from "../_hooks/useUserPosts";
import { Posts } from "@/app/types/types";
import SkeletonComponent from "@/app/components/SkeletonComponent";
import useProfileData from "../_hooks/useProfileData";
import useDeletePost from "../../(home)/_hooks/useDeletePost";
import VirtualScroller from "@/app/components/VirtualScroller";

const ProfilePosts = () => {
  const { userPosts, isPending, isError, error } = useUserPosts();
  const { userProfile, isPending: userProfilePending, isError: userProfileError } = useProfileData();
  const { deletePost, isPending: deletePostPending } = useDeletePost();

  if (isPending || userProfilePending) {
    return <SkeletonComponent />;
  }
  const { posts } = userPosts;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">Posts</h2>
        <p className="text-muted-foreground capitalize">Recent posts from {userProfile?.user?.name} </p>
      </div>
      {/* <VirtualScroller /> */}
      <div className="space-y-4">
        {posts?.map((post: Posts) => (
          <PostCard key={post.id} post={post} deletePost={deletePost} isPending={deletePostPending} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePosts;

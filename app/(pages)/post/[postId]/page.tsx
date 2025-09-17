"use client";
import Link from "next/link";
import React from "react";
import LeftSide from "./_components/leftSide ";
import RightSide from "./_components/rightSide";
import useSinglePost from "./_hooks/useSinglePost";
import SkeletonComponent from "@/app/components/SkeletonComponent";

const PostId = () => {
  "use memo";
  const { singlePost } = useSinglePost();

  const { image } = singlePost;

  return (
    <div className="container  mx-auto px-4 py-6">
      {/* Back button */}
      <div className="mb-4">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          ← Back to Feed
        </Link>
      </div>

      {/* Main grid layout */}
      {image ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[80vh]">
          <LeftSide />
          <RightSide />
        </div>
      ) : (
        <RightSide />
      )}
    </div>
  );
};

export default PostId;

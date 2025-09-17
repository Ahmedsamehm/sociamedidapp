"use client";
import Image from "next/image";
import React from "react";
import useSinglePost from "../_hooks/useSinglePost";
import SkeletonComponent from "@/app/components/SkeletonComponent";
import { AspectRatio } from "@/app/components/shared/aspect-ratio";

const LeftSide = () => {
  "use memo";
  const { isPending, singlePost } = useSinglePost();

  return (
    <>
      {isPending ? (
        <SkeletonComponent hight="60vh" />
      ) : (
        <AspectRatio ratio={6 / 6} className="rounded-lg overflow-hidden size-full">
          <Image src={singlePost.image} alt={singlePost.title || "Post image"} className="size-full object-cover" objectFit="cover" objectPosition="center" width={1000} height={900} />
        </AspectRatio>
      )}
    </>
  );
};

export default LeftSide;

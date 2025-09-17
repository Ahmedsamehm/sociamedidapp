"use client";

import AvatarComponent from "@/app/components/AvatarComponent";
import { CardHeader } from "@/app/components/shared/card";
import React from "react";

import SkeletonComponent from "@/app/components/SkeletonComponent";

import useSinglePost from "../../_hooks/useSinglePost";

const HeaderPost = () => {
  "use memo";
  const { isPending, singlePost } = useSinglePost();
  if (isPending) {
    return <SkeletonComponent hight="5vh" />;
  }
  const { user, body, createdAt } = singlePost;
  const { name, photo } = user;

  return (
    <CardHeader className="pb-3 border-b">
      <div className="flex items-center space-x-3">
        <AvatarComponent src={photo || "/placeholder.svg"} alt={"Post image"} fallBack={name.charAt(0)} />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-sm"> {name} </h3>
            <span className="text-muted-foreground text-sm">@{name}</span>
          </div>
          <p className="text-muted-foreground text-xs capitalize">posted at {createdAt.slice(0, 10)}</p>
        </div>
      </div>
      <p className="text-sm mt-3">{body}</p>
    </CardHeader>
  );
};

export default HeaderPost;

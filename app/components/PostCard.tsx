"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "./shared/card";
import AvatarComponent from "./AvatarComponent";

import Image from "next/image";
import { Separator } from "./shared/separator";
import { Posts } from "../types/types";

import ReusableDropDown from "./shared/ReusableDropDown";
import { useEditContext } from "@/app/context/EditContext";

import { InteractionButtons } from "./shared/InteractionButtons";
import useProfileData from "../(pages)/profile/_hooks/useProfileData";

import Comments from "../(pages)/post/[postId]/_components/rightComponents/commentComponents/Comments";
import { AspectRatio } from "./shared/aspect-ratio";

export type PostProps = {
  post: Posts;
  deletePost?: (id: string) => void;
  updatePost?: (id: string, content: string) => void;
  isPending?: boolean;
  isUpdatePending?: boolean;
};
export function PostCard({ post, deletePost }: PostProps) {
  "use memo";
  const { editState } = useEditContext();
  const [isLiked, setIsLiked] = useState(false);

  const { userProfile } = useProfileData();

  const randomLikes = Math.floor(Math.random() * 1000);
  const [likeCount, setLikeCount] = useState(randomLikes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <Card className="w-full shadow-md border-2 border-gray-300 rounded-lg  dark:border-border dark:border ">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <AvatarComponent src={post.user.photo || "/placeholder.svg"} alt={post.user.name} fallBack={post.user.name.charAt(0)} />
          <div className="flex-1">
            <div className="flex justify-between items-center w-full space-x-2">
              <div className="flex flex-col">
                <div className="flex  gap-2">
                  <h3 className="font-semibold text-sm">{post.user.name}</h3>
                  <span className="text-muted-foreground text-sm block">@{post.user.name}</span>
                </div>
                <p className="text-muted-foreground text-xs">{post.createdAt.slice(0, 10)}</p>
              </div>

              <ReusableDropDown id={post.id} onDelete={deletePost} profileId={userProfile?.user?._id} idCreator={post.user._id} />
            </div>
          </div>
        </div>
        <Separator className="my-3" />
      </CardHeader>
      <CardContent>
        {!(editState.id === post.id && editState.isEdit) && <p className="text-foreground leading-relaxed ">{post.body}</p>}

        {post?.image && (
          <AspectRatio ratio={10 / 6} className="rounded-lg overflow-hidden ">
            <Image src={post?.image} alt="Post content" width={960} height={540} className={`size-full mx-auto object-cover  `} loading="lazy" />
          </AspectRatio>
        )}

        <Separator className="my-5" />
        <InteractionButtons
          likesCount={likeCount}
          commentsCount={post?.comments.length || 0}
          isLiked={isLiked}
          onLike={handleLike}
          commentLink={`/post/${post._id}`}
          shareLink={`${baseUrl}/post/${post._id}`}
        />
        {/* comment section */}
        <Comments post={post} />
        {/* comment section */}
      </CardContent>
    </Card>
  );
}

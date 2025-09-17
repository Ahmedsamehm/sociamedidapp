"use client";
import { useEffect, useState } from "react";
import { Heart, LoaderIcon, MessageCircle, Share } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
import usePostComments from "@/app/(pages)/post/[postId]/_hooks/usePostComments";

export interface InteractionButtonsProps {
  likesCount?: number;
  commentsCount?: number;
  isLiked?: boolean;
  onLike?: (isLiked: boolean) => void;
  showShare?: boolean;
  showComment?: boolean;
  commentLink?: string;
  className?: string;
}

export function InteractionButtons({ onLike, showShare = true, showComment = true, commentLink, className, commentsCount }: InteractionButtonsProps) {
  const { postComments, isPending } = usePostComments();
  const { total } = postComments;

  const [liked, setLiked] = useState(false);

  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    setLikeCount(Math.floor(Math.random() * 1000));
  }, []);

  const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    setLikeCount(newLiked ? likeCount + 1 : likeCount - 1);
    onLike?.(newLiked);
  };

  return (
    <div className={cn("flex w-full justify-between p-2 ", className)}>
      <Button variant="ghost" size="sm" onClick={handleLike} className={cn("flex items-center space-x-2 text-muted-foreground hover:text-foreground", liked && "text-red-500 hover:text-red-600")}>
        <Heart className={cn("size-4", liked && "fill-current")} />
        <span className="text-sm">{likeCount ?? 0}</span>
      </Button>

      {showComment &&
        (commentLink ? (
          <Link href={commentLink}>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
              <MessageCircle className="size-4" />
              <span className="text-sm">{commentsCount || 0}</span>
            </Button>
          </Link>
        ) : (
          <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
            <MessageCircle className="size-4" />
            {isPending ? <LoaderIcon className="size-4 animate-spin" /> : <span className="text-sm">{total || 0}</span>}
          </Button>
        ))}

      {showShare && (
        <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground">
          <Share className="size-4" />
          <span className="text-sm">Share</span>
        </Button>
      )}
    </div>
  );
}

import React, { useRef } from "react";

import SkeletonComponent from "@/app/components/SkeletonComponent";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/shared/avatar";

import usePostComments from "../../../_hooks/usePostComments";
import useDeleteComment from "../../../_hooks/useDeleteComment";

import ReusableDropDown from "@/app/components/shared/ReusableDropDown";

import useProfileData from "@/app/(pages)/profile/_hooks/useProfileData";
import { useVirtualizer } from "@tanstack/react-virtual";
export type PropsEdit = {
  id: string;
  setIsEdit: React.Dispatch<React.SetStateAction<{ id: string; isEdit: boolean }>>;
  isEdit: { id: string; isEdit: boolean };
};

const CommentsSection = () => {
  const ScrollRef = useRef<HTMLDivElement | null>(null);
  const { postComments, isPending } = usePostComments();
  const { deleteComment, isPending: isDeletePending } = useDeleteComment();
  const { userProfile } = useProfileData();

  const virtualizer = useVirtualizer({
    count: postComments.comments?.length,
    getScrollElement: () => ScrollRef.current ?? document.body,
    estimateSize: () => 60,
    gap: 20,
    overscan: 2,
  });

  const virtualizerItems = virtualizer.getVirtualItems();
  if (isPending) {
    return <SkeletonComponent hight="30vh" />;
  }

  return (
    <div ref={ScrollRef} className="h-[50vh] overflow-auto">
      <div className="relative w-full" style={{ height: virtualizer.getTotalSize(), minHeight: "50vh" }}>
        {virtualizerItems.map((vItem) => {
          const comment = postComments?.comments?.[vItem.index];
          if (!comment) return null;
          return (
            <div
              key={vItem.key}
              ref={virtualizer.measureElement}
              className="absolute top-0 left-0 w-full px-6 py-2"
              style={{
                transform: `translateY(${vItem.start}px)`,
                height: "fit-content",
              }}
              data-index={vItem.index}
            >
              <div className="flex space-x-3">
                <Avatar className="h-8 w-8 flex-shrink-0">
                  <AvatarImage src={comment.commentCreator.photo || "/Placeholder.png"} alt={comment.commentCreator.name} />
                  <AvatarFallback>{comment.commentCreator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center space-x-2">
                    <div className="items-center space-x-2">
                      <span className="font-semibold text-sm">{comment.commentCreator.name}</span>
                      <span className="text-muted-foreground text-xs">@{comment.commentCreator.name}</span>
                      <span className="text-muted-foreground text-xs">{comment.createdAt.slice(0, 10)}</span>
                    </div>
                    <ReusableDropDown id={comment._id} idCreator={comment.commentCreator._id} profileId={userProfile?.user?._id} onDelete={deleteComment} isPendingDelete={isDeletePending} />
                  </div>
                  <p className="text-sm mt-1 break-words">{comment.content}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsSection;

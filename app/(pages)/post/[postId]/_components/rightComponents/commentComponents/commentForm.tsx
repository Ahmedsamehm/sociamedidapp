"use client";
import SkeletonComponent from "@/app/components/SkeletonComponent";
import AvatarComponent from "@/app/components/AvatarComponent";
import { Button } from "@/app/components/shared/button";
import { Textarea } from "@/app/components/shared/textarea";
import { LoaderCircle, Pencil, Send } from "lucide-react";
import React, { useEffect } from "react";
import useCreateComment from "../../../_hooks/useCreateComment";
import { useForm } from "react-hook-form";
import useProfileData from "@/app/(pages)/profile/_hooks/useProfileData";
import { useParams } from "next/navigation";
import useEditComment from "../../../_hooks/useEditComment";
import usePostComments from "../../../_hooks/usePostComments";

import { useEditContext } from "@/app/context/EditContext";

const CommentForm = () => {
  const { editState, setEditState } = useEditContext();

  const edit = editState.isEdit;
  const { userProfile, isPending } = useProfileData();
  const { editComment, isPending: isPendingEdit } = useEditComment();

  const { createComment, isPending: isPendingComment } = useCreateComment();
  const { postComments, isPending: isPendingComments } = usePostComments();
  const { postId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const findComment = postComments?.comments?.find((comment: any) => comment?.id === editState?.id);
  const getContent = findComment?.content;

  useEffect(() => {
    if (edit && getContent) {
      reset({ content: getContent });
    } else {
      reset({ content: "" });
    }
  }, [edit, reset, getContent]);
  const onSubmit = (data: any) => {
    if (edit) {
      const payLoad = {
        ...data,
        commentId: findComment?.id,
      };
      editComment(payLoad);
      setEditState({ id: "", isEdit: false });
      reset({ content: "" });
    } else {
      const payLoad = { ...data, post: postId };
      createComment(payLoad);
      reset({ content: "" });
    }
  };
  if (isPending) return <SkeletonComponent hight="5vh" />;
  return (
    <div className="p-6 border-t">
      <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-3 items-center">
        <AvatarComponent src={userProfile?.user?.photo || "/placeholder.svg"} alt="You" fallBack={userProfile?.user?.name.charAt(0)} />
        <div className="flex-1 flex space-x-2 items-center">
          <Textarea
            onKeyDown={(e) => e.key === "Enter" && onSubmit(watch())}
            disabled={isPendingComment || isPendingEdit}
            rows={1}
            placeholder="Write a comment..."
            {...register("content", { required: true })}
            className="flex-1 min-h-[40px] max-h-[120px] resize-none"
          />
          <Button type="submit" disabled={isPendingComment} size="sm">
            {isPendingComment || isPendingEdit ? <LoaderCircle className="animate-spin size-4" /> : edit ? <Pencil /> : <Send className="size-4" />}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;

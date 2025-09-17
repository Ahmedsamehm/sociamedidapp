import React from "react";

import AvatarComponent from "@/app/components/AvatarComponent";
import Link from "next/link";
import { Comment } from "@/app/types/types";

const Comments = ({ post }: { post: any }) => {
  "use memo";

  return (
    <div className="mt-4 space-y-3 w-full ">
      {post?.comments?.length === 0 && <p className="text-center">No comments yet</p>}

      {post?.comments?.slice(0, 3)?.map((comment: Comment) => (
        <div className="flex items-center space-x-3" key={comment._id}>
          <AvatarComponent src={post?.comment?.commentCreator?.photo} alt={comment?.commentCreator?.name} fallBack={comment?.commentCreator?.name?.charAt(0)} />
          <div className="flex-1 ">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-sm">{comment?.commentCreator?.name}</h3>
              <span className="text-muted-foreground hidden md:block">@{comment?.commentCreator?.name}</span>
            </div>
            <p className="text-foreground mb-3 leading-relaxed">{comment.content}</p>
          </div>

          <p className="text-muted-foreground text-xs">{comment.createdAt.slice(0, 10)}</p>
        </div>
      ))}

      <div className="text-center">
        <Link href={`/post/${post._id}`} className="text-muted-foreground   text-sm  hover:text-foreground transition-all">
          View all comments
        </Link>
      </div>
    </div>
  );
};

export default Comments;

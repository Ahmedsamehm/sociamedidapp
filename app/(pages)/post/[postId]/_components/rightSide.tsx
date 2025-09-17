import { Card, CardContent } from "@/app/components/shared/card";

import React from "react";
import HeaderPost from "./rightComponents/headerPost";

import CommentsSection from "./rightComponents/commentComponents/commentsSection";

import CommentForm from "./rightComponents/commentComponents/commentForm";
import { InteractionButtons } from "@/app/components/shared/InteractionButtons";
import useSinglePost from "../_hooks/useSinglePost";
import { baseDomainSite } from "@/lib/config";

const RightSide = () => {
  "use memo";
  const { singlePost } = useSinglePost();

  return (
    <div className="flex flex-col">
      <Card className="flex-1 flex flex-col">
        {/* Post header */}
        <HeaderPost />
        {/* Interaction buttons */}
        <InteractionButtons shareLink={`${baseDomainSite}/post/${singlePost._id}`} />
        {/* Comments section - scrollable */}
        <CardContent className="flex-1 p-0">
          <CommentsSection />
        </CardContent>

        {/* Comment input */}
        <CommentForm />
      </Card>
    </div>
  );
};

export default RightSide;

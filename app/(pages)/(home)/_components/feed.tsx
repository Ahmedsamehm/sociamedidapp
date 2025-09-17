import React from "react";

import Header from "@/app/components/Header";
import FeedClient from "./FeedClient";

const Feed = () => {
  return (
    <div className="flex flex-col gap-4 w-full  ">
      <Header title="Your Feed" description="Stay connected with your friends and community" />
      <FeedClient />
    </div>
  );
};

export default Feed;

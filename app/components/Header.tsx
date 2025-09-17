
import React from "react";

import { Separator } from "./shared/separator";

import CreatePost from "../(pages)/(home)/_components/createPost";

const Header = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
      <p className="text-muted-foreground">{description}</p>

      <CreatePost />
      <Separator className="mt-4" />
    </div>

  );
};

export default Header;

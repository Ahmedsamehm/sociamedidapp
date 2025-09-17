"use client";

import AvatarComponent from "@/app/components/AvatarComponent";

import { Card, CardContent } from "@/app/components/shared/card";
import { Calendar } from "lucide-react";

import React from "react";
import useProfileData from "../_hooks/useProfileData";
import SkeletonComponent from "@/app/components/SkeletonComponent";

const ProfileHeader = () => {
  const { userProfile, isPending: userProfilePending, isError: userProfileError } = useProfileData();

  if (userProfilePending) return <SkeletonComponent />;
  const { user } = userProfile;

  return (
    <Card className="mb-6 p-2 ">
      <div className="relative">
        <div className="h-48 bg-gradient-to-r bg-background rounded-t-lg"></div>
        <div className="absolute -bottom-16 ">
          <AvatarComponent 
            src={user?.photo || "/placeholder.svg"} 
            alt={user.name} 
            fallBack={user?.name.charAt(0)} 
            className="size-32 border-4 border-background"
          />
        </div>
      </div>

      <CardContent className="">
        <div className="flex  items-center mb-4 pt-20">
          <div>
            <h1 className="text-2xl font-bold text-foreground capitalize">{user.name}</h1>
            <p className="text-muted-foreground">@{user.name}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Joined {user.createdAt.split("T")[0]}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;

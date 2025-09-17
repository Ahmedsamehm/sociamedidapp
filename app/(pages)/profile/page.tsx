import React, { use } from "react";

import ProfileHeader from "./_components/ProfileHeader";

import ProfilePosts from "./_components/ProfilePosts";
import LayoutWrapper from "@/app/components/layoutWrapper";
import ContentWrapper from "@/app/components/ContentWrapper";
import { fetchUserPosts } from "./_services/fetchUserPosts";

const Profile = async () => {
  // const data = await fetchUserPosts()

  return (
    <LayoutWrapper>
      <ContentWrapper>
        <ProfileHeader />
        <ProfilePosts />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Profile;

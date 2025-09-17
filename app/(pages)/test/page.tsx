import ContentWrapper from "@/app/components/ContentWrapper";
import LayoutWrapper from "@/app/components/layoutWrapper";
import React from "react";
import TestClient from "./_components/testClient";

const test = () => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <TestClient />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default test;

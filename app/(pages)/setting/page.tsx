import ContentWrapper from "@/app/components/ContentWrapper";
import LayoutWrapper from "@/app/components/layoutWrapper";
import React from "react";
import SettingHeader from "./_components/settingHeader";
import SettingsForm from "./_components/settingsForm";

const Setting = () => {
  return (
    <LayoutWrapper>
      <ContentWrapper>
        <SettingHeader />
        <SettingsForm />
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Setting;

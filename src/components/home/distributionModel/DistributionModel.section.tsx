"use client";

import "./style.scss";
import DistributionMockup from "./mockup/DistributionMockup";
import DistributionPackage from "./package/DistributionPackage";

import {
  FadeInTitleSmall,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";

const DistributionModelData = {
  title: "Our Solution",
  subtitle: "Public Distribution Model",
};

const DistributionModelSection = () => {
  return (
    <>
      <div id="DistributionModelSection">
        <div className="title_container">
          <FadeInTitleSmall text={DistributionModelData.title} />
          <TitleSplitText text={DistributionModelData.subtitle} />
        </div>
        <DistributionMockup />
        <DistributionPackage />
      </div>
    </>
  );
};

export default DistributionModelSection;

import {
  FadeInParagraphFromRight,
  FadeInTitleSmall,
} from "@/components/common/title/AnimatedTitles";
import { supportersData } from "./data.db";
import "./style.scss";
import { AnimatedButtonLink } from "@/components/common/button/AnimatedButton";
import Image from "next/image";
import ImageSize from "@/utils";
import BrandBottomSvg from "@/components/svg/supporters/BrandBottomSvg";

const Supporters = () => {
  return (
    <div id="Supporters">
      <div className="brand_container">
        <div className="image_container">
          <Image
            src={supportersData.brand}
            fill
            sizes={ImageSize.card}
            alt="hero_right"
          />
        </div>
        <h2>{supportersData.brandTitle}</h2>
        <BrandBottomSvg />
      </div>
      <div className="info_container">
        <FadeInTitleSmall text={supportersData.title} />
        <FadeInParagraphFromRight text={supportersData.description} />
        <AnimatedButtonLink href="/" text="Get Involved" />
      </div>
    </div>
  );
};

export default Supporters;

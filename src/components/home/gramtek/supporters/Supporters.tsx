"use client";

import {
  FadeInParagraphFromRight,
  FadeInTitleSmall,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import { supportersData } from "./data.db";
import "./style.scss";
import { AnimatedButtonLink } from "@/components/common/button/AnimatedButton";
import ImageSize from "@/utils";
import BrandBottomSvg from "@/components/svg/supporters/BrandBottomSvg";
import { motion } from "motion/react";
import { viewportMargin, viewportOnce } from "@/utils/anim";
import OptImage from "@/components/common/image/OptImage";

const Supporters = () => {
  return (
    <div id="Supporters">
      <div className="brand_container">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          viewport={{ once: viewportOnce, margin: viewportMargin }}
          className="image_container"
        >
          <OptImage
            width={500}
            height={500}
            src={supportersData.brand}
            sizes={ImageSize.card}
            alt="Mahatva Foundation Logo"
          />
        </motion.div>
        <TitleSplitText text={supportersData.brandTitle} />
        <BrandBottomSvg />
      </div>
      <div className="info_container">
        <FadeInTitleSmall text={supportersData.title} />
        <FadeInParagraphFromRight text={supportersData.description} />
        <AnimatedButtonLink
          href={supportersData.button.href}
          text={supportersData.button.text}
        />
      </div>
    </div>
  );
};

export default Supporters;

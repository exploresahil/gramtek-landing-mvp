"use client";

import {
  FadeInParagraph,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import { supportOurMissionData } from "./data.db";
import "./style.scss";
import Image from "next/image";
import { viewportMargin, viewportOnce } from "@/utils/anim";
import ImageSize from "@/utils";
import { motion } from "motion/react";

const SupportOurMission = () => {
  return (
    <section id="SupportOurMission">
      <TitleSplitText text={supportOurMissionData.title} />
      <FadeInParagraph text={supportOurMissionData.description} />
      <div className="images">
        {supportOurMissionData.images.map((img, i) => (
          <motion.div
            key={i}
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
            <Image src={img.src} fill sizes={ImageSize.card} alt={img.alt} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SupportOurMission;

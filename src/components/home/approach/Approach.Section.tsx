"use client";

import ApproachDesign from "@/components/svg/approach/ApproachDesign";
import "./style.scss";
import { approachData, ApproachSectionData } from "./data.db";
import { motion } from "framer-motion";

import {
  FadeInTitleSmall,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import {
  viewportOnce,
  approachListVariants,
  approachItemVariants,
  approachIconVariants,
  approachTextVariants,
  viewportMargin,
} from "@/utils/anim";
import { AnimatedButtonLink } from "@/components/common/button/AnimatedButton";
import { useEffect, useState } from "react";
import ApproachDesignSafari from "@/components/svg/approach/ApproachDesignSafari";

interface ApproachSectionProps {
  data?: ApproachSectionData;
}

const ApproachSection: React.FC<ApproachSectionProps> = ({
  data = approachData,
}) => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(ua);
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isBraveIOS = ua.includes("Brave") && isIOS;
    setIsSafari(isSafariBrowser || isIOS || isBraveIOS);
  }, []);

  return (
    <section id="ApproachSection">
      <div className="approach_degign">
        {isSafari ? <ApproachDesignSafari /> : <ApproachDesign />}
      </div>
      <div className="approach_container">
        <FadeInTitleSmall text={data.title} />
        <TitleSplitText text={data.subtitle} />
        <motion.ul
          className="approach_container_points"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: viewportOnce, margin: viewportMargin }}
          variants={approachListVariants}
        >
          {data.points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.li
                key={`${point.text}-${index}`}
                className="approach_container_points_item"
                variants={approachItemVariants}
              >
                <motion.div variants={approachIconVariants}>
                  <Icon />
                </motion.div>
                <motion.p variants={approachTextVariants}>
                  {point.text}
                </motion.p>
              </motion.li>
            );
          })}
        </motion.ul>
        <AnimatedButtonLink href={data.cta.href} text={data.cta.text} />
      </div>
    </section>
  );
};

export default ApproachSection;

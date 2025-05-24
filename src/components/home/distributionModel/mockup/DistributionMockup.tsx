"use client";

import { motion } from "motion/react";
import ImageSize from "@/utils";
import "./style.scss";
import {
  descriptionAnimeFromRight,
  motionLeftData,
  motionMidData,
  motionRightData,
  viewportMargin,
  viewportOnce,
} from "@/utils/anim";
import { TitleSplitText } from "@/components/common/title/AnimatedTitles";
import { AnimatedButtonLink } from "@/components/common/button/AnimatedButton";
import { MOCKUP, MockupData } from "./data.db";
import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import OptImage from "@/components/common/image/OptImage";

interface MockupImageProps {
  src: string;
  className: string;
  motionProps: {
    initial: Record<string, number>;
    animate: Record<string, number>;
  };
}

const MockupImage = ({ src, className, motionProps }: MockupImageProps) => (
  <motion.div
    className={`image ${className}_container`}
    initial={motionProps.initial}
    whileInView={{
      ...motionProps.animate,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.2,
        delay: motionProps.animate.delay,
      },
    }}
    viewport={{ once: viewportOnce, margin: viewportMargin }}
  >
    <OptImage
      src={src}
      width={500}
      height={500}
      className={className}
      alt="Distribution Model Mockup"
      sizes={ImageSize.card}
    />
  </motion.div>
);

const DistributionMockup = () => {
  const scrollTo = useLenisScrollTo();

  return (
    <section id="DistributionMockup">
      <div className="distribution_mockup_main">
        <div className="right">
          <MockupImage
            src={MOCKUP.left}
            className="img_left"
            motionProps={{
              initial: motionLeftData.initial,
              animate: motionLeftData.animate,
            }}
          />
          <MockupImage
            src={MOCKUP.mid}
            className="img_mid"
            motionProps={{
              initial: motionMidData.initial,
              animate: motionMidData.animate,
            }}
          />
          <MockupImage
            src={MOCKUP.right}
            className="img_right"
            motionProps={{
              initial: motionRightData.initial,
              animate: motionRightData.animate,
            }}
          />
        </div>

        <div className="content_container">
          <TitleSplitText text={MockupData.subtitle} />
          <motion.p
            variants={descriptionAnimeFromRight}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: viewportOnce, margin: viewportMargin }}
          >
            {MockupData.descriptionOne}
            <br />
            <br />
            {MockupData.descriptionTwo}
          </motion.p>
          <AnimatedButtonLink
            href={MockupData.btn.link}
            text={MockupData.btn.text}
            onClick={() => {
              scrollTo(MockupData.btn.link.replace("#", ""), {
                duration: 1.3,
                easing: "easeInOut",
                offset: -50,
              });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DistributionMockup;

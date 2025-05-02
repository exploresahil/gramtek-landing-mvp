"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";
import ImageSize from "@/utils";
import "./style.scss";
import Link from "next/link";

interface MockupImageProps {
  src: string;
  className: string;
  motionProps: {
    initial: Record<string, number>;
    animate: Record<string, number>;
  };
}

const MOCKUP = {
  mid: "/assets/distribution/gramtek_mockup_mid.png",
  left: "/assets/distribution/gramtek_mockup_left.png",
  right: "/assets/distribution/gramtek_mockup_right.png",
};

const MockupData = {
  subtitle: "Simple, Effective & Scalable",
  descriptionOne:
    "Gramtek's innovative distribution model ensures that women and girls in remote and underserved areas have access to high-quality sanitary pads at affordable prices.",
  descriptionTwo:
    "By partnering with local community organizations and leveraging digital technologies, we established a deep connection with the villagers.",
  btn: {
    link: "/login",
    text: "Explore Product Features",
  },
};

const IMAGE_PROPS = {
  width: 1000,
  height: 1000,
  sizes: ImageSize.banner,
  alt: "Distribution Model Mockup",
};

const once = true;

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
    viewport={{ once }}
  >
    <Image src={src} className={className} {...IMAGE_PROPS} />
  </motion.div>
);

const motionLeftData = {
  initial: { rotate: 0, x: 100, scale: 0.9, opacity: 0 },
  animate: {
    rotate: -10,
    x: 10,
    y: 5,
    scale: 1,
    opacity: 1,
    delay: 0.4,
  },
};

const motionMidData = {
  initial: { scale: 1, opacity: 0 },
  animate: { scale: 1.2, opacity: 1, delay: 0.3 },
};

const motionRightData = {
  initial: { rotate: 0, x: -100, scale: 0.9, opacity: 0 },
  animate: {
    rotate: 10,
    x: -10,
    y: 5,
    scale: 1,
    opacity: 1,
    delay: 0.4,
  },
};

const subtitleSplit = MockupData.subtitle.split(" ");

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const DistributionMockup = () => (
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
        <h2>
          <motion.div
            className="mainTitleSplit"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
          >
            {subtitleSplit.map((word, i) => (
              <motion.span key={i} variants={itemVariants}>
                {word}
              </motion.span>
            ))}
          </motion.div>
        </h2>
        <motion.p
          initial={{
            opacity: 0,
            x: 10,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              ease: "easeInOut",
            },
          }}
          viewport={{ once }}
        >
          {MockupData.descriptionOne}
          <br />
          <br />
          {MockupData.descriptionTwo}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.4,
              ease: "easeInOut",
            },
          }}
          viewport={{ once }}
        >
          <Link href={MockupData.btn.link}>{MockupData.btn.text}</Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DistributionMockup;

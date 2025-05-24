"use client";

import Link from "next/link";
import "./style.scss";
import ImageSize from "@/utils";
import { motion } from "motion/react";
import { heroData } from "./data.db";
import OptImage from "@/components/common/image/OptImage";
import useResponsive from "@/hooks/useResponsive";

const subtitleSplit = heroData.subtitle.split(" ");

//console.log("subtitleASplit-> ", subtitleSplit);

const subtitleAContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeInOut" } },
};

const Hero = () => {
  const { isMounted, isMobile, isTablet, isLaptop, isDesktop, isXLarge } =
    useResponsive();

  if (!isMounted) return null;

  return (
    <section id="Hero">
      <div className="hero_container">
        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { ease: "easeInOut", duration: 0.5 },
          }}
        >
          {heroData.title}
        </motion.h2>
        <h1>
          <motion.div
            className="subtitleSplit"
            variants={subtitleAContainer}
            initial="hidden"
            animate="visible"
          >
            {subtitleSplit.map((word, i) => (
              <motion.span key={i} variants={wordVariant}>
                {word}
              </motion.span>
            ))}
          </motion.div>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { ease: "easeInOut", delay: 0.4, duration: 0.5 },
          }}
        >
          {heroData.description}
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            marginRight: "0.25rem",
            boxShadow: "0 0 #28214a",
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            marginRight: "0.5rem",
            boxShadow: "0.5rem 0.5 #28214a",
            scale: 1,
            transition: { ease: "easeInOut", delay: 0.8, duration: 0.5 },
          }}
        >
          <Link scroll={false} href={heroData.btn.link}>
            {heroData.btn.text}
          </Link>
        </motion.div>
      </div>
      <div className="bg_container">
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
            y: 100,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { ease: "easeInOut", delay: 0.5, duration: 0.5 },
          }}
          className="left_img"
        >
          <OptImage
            src="hero-asset-01.png"
            width={
              isMobile
                ? 360
                : isTablet
                ? 500
                : isDesktop
                ? 700
                : isXLarge
                ? 1200
                : 500
            }
            height={isMobile ? 94 : isTablet ? 119.4 : isDesktop ? 119.4 : 474}
            loading="eager"
            sizes={ImageSize.banner}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100,
            y: 100,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: { ease: "easeInOut", delay: 0.5, duration: 0.5 },
          }}
          className="right_img"
        >
          <OptImage
            src="hero-asset-02.png"
            width={
              isMobile
                ? 180
                : isTablet
                ? 260
                : isLaptop
                ? 300
                : isXLarge
                ? 800
                : 500
            }
            height={isMobile ? 182 : isTablet ? 182 : isLaptop ? 182 : 474}
            loading="eager"
            sizes={ImageSize.banner}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

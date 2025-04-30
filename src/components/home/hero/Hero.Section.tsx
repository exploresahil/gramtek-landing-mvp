"use client";

import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import ImageSize from "@/utils";
import { motion } from "motion/react";
import { delay } from "motion";

//*---------↓ Hero Content ↓---------*//

const heroData = {
  title: "Gramtek - A Public Distribution Solution",
  subtitle: "Distributing Sanitary Pads for Rural India",
  description:
    "Gramtek is a non-profit organization dedicated to improving sanitary hygiene in underserved rural communities across India.",
  btn: {
    link: "/login",
    text: "Get Involved",
  },
};

const subtitleSplit = heroData.subtitle.split(" ");

console.log("subtitleASplit-> ", subtitleSplit);

const subtitleAContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
      duration: 0.3,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeInOut" } },
};

const Hero = () => {
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
          <Link href={heroData.btn.link}>{heroData.btn.text}</Link>
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
          <Image
            src="/assets/hero/hero-asset-01.png"
            fill
            sizes={ImageSize.banner}
            alt="hero_right"
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
          <Image
            src="/assets/hero/hero-asset-02.png"
            fill
            sizes={ImageSize.banner}
            alt="hero_right"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

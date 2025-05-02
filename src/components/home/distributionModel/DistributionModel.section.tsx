"use client";

import "./style.scss";
import DistributionMockup from "./mockup/DistributionMockup";
import DistributionPackage from "./package/DistributionPackage";
import { motion, Variants } from "motion/react";

const TITLE = {
  title: "Our Solution",
  subtitle: "Public Distribution Model",
};

const subtitleSplit = TITLE.subtitle.split(" ");

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

const once = true;

const DistributionModelSection = () => {
  return (
    <>
      <div id="DistributionModelSection">
        <div className="title_container">
          <motion.h1
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            }}
            viewport={{ once }}
          >
            {TITLE.title}
          </motion.h1>
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
        </div>
        <DistributionMockup />
        <DistributionPackage />
      </div>
    </>
  );
};

export default DistributionModelSection;

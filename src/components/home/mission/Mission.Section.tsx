"use client";

import {
  FadeInParagraph,
  FadeInTitle,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import "./style.scss";

import { viewportMargin, viewportOnce } from "@/utils/anim";
import { motion, Variants } from "motion/react";
import AnimatingNumbers from "@/components/common/numbers/AnimatingNumbers";
import { missionData } from "./data.db";
import React from "react";

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
      duration: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 },
};

const Mission = () => {
  return (
    <section id="Mission">
      <FadeInTitle text={missionData.title} />
      <TitleSplitText text={missionData.mainTitle} />
      <FadeInParagraph text={missionData.subtitle} />
      <motion.div
        className="cards_container"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: viewportOnce, margin: viewportMargin }}
      >
        {missionData.cardsData.map((card, index) => (
          <motion.div
            className="card"
            key={`card-${card.title}-${index}`}
            variants={cardVariants}
          >
            {React.createElement(card.icon)}
            <h4>{card.title}</h4>
            <p>
              <span>
                <AnimatingNumbers to={card.numbers} duration={0.3} />
                {card.numbersSuffix && <span>{card.numbersSuffix}</span>}
              </span>
              <span className="card_subtitle">{card.subtitle}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Mission;

"use client";

import {
  descriptionAnime,
  descriptionAnimeFromRight,
  itemVariants,
  splitTextAime,
  titleAnime,
  viewportMargin,
  viewportOnce,
} from "@/utils/anim";
import { motion } from "motion/react";
import "./style.scss";

export const TitleSplitText = ({ text }: { text: string }) => {
  const splitText = text.split(" ");
  return (
    <h2 id="TitleSplitText">
      <motion.div
        className="mainTitleSplit"
        variants={splitTextAime}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: viewportOnce, margin: viewportMargin }}
      >
        {splitText.map((word, i) => (
          <motion.span key={i} variants={itemVariants}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    </h2>
  );
};

export const FadeInTitle = ({ text = "Hello World" }: { text: string }) => {
  return (
    <motion.h1
      id="FadeInTitle"
      variants={titleAnime}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: viewportOnce,
        margin: viewportMargin,
      }}
    >
      {text}
    </motion.h1>
  );
};

export const FadeInTitleSmall = ({
  text = "Hello World",
}: {
  text: string;
}) => {
  return (
    <motion.h1
      id="FadeInTitleSmall"
      variants={titleAnime}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: viewportOnce,
        margin: viewportMargin,
      }}
    >
      {text}
    </motion.h1>
  );
};

export const FadeInParagraph = ({ text = "Hello World" }) => {
  return (
    <motion.p
      id="FadeInParagraph"
      variants={descriptionAnime}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: viewportOnce,
        margin: viewportMargin,
      }}
    >
      {text}
    </motion.p>
  );
};

export const FadeInParagraphFromRight = ({ text = "Hello World" }) => {
  return (
    <motion.p
      id="FadeInParagraphFromRight"
      variants={descriptionAnimeFromRight}
      initial="hidden"
      whileInView="animate"
      viewport={{
        once: viewportOnce,
        margin: viewportMargin,
      }}
    >
      {text}
    </motion.p>
  );
};

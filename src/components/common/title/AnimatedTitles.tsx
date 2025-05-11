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
    <h2 className="TitleSplitText">
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
      className="FadeInTitle"
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
      className="FadeInTitleSmall"
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
      className="FadeInParagraph"
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
      className="FadeInParagraphFromRight"
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

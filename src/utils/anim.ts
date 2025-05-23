import { Variants } from "motion/react";

export const viewportOnce = true;
export const viewportMargin = "0px";

export const titleAnime = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const descriptionAnime = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const descriptionAnimeFromRight = {
  hidden: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const splitTextAime = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const approachListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",

    },
  },
};

export const approachItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut",

    },
  },
};

export const approachIconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

export const approachTextVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

export const AnimatedButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
    },
  },
};

export const sliderTrackVariants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      delay: 0.3,
    },
  },
};

export const slideVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.2, } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.3, ease: "easeIn" } },
};

export const motionLeftData = {
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

export const motionMidData = {
  initial: { scale: 1, opacity: 0 },
  animate: { scale: 1.2, opacity: 1, delay: 0.3 },
};

export const motionRightData = {
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
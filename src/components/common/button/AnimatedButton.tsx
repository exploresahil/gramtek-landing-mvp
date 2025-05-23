"use client";

import Link from "next/link";
import "./style.scss";
import { motion } from "motion/react";
import {
  AnimatedButtonVariants,
  viewportMargin,
  viewportOnce,
} from "@/utils/anim";

export const AnimatedButtonLink = ({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      id="AnimatedButton"
      variants={AnimatedButtonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: viewportMargin }}
    >
      <Link href={href} onClick={onClick}>
        {text}
      </Link>
    </motion.div>
  );
};

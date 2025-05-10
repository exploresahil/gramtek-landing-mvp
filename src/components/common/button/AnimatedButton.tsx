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
}: {
  href: string;
  text: string;
}) => {
  return (
    <motion.div
      id="AnimatedButton"
      variants={AnimatedButtonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: viewportMargin }}
    >
      <Link href={href}>{text}</Link>
    </motion.div>
  );
};

"use client";

import "./style.scss";
import {
  CurrentDistributionIocon,
  EconomicImpactIcon,
  OurReachIcon,
  TotalBeneficiariesIcon,
} from "@/components/svg/MissionIcons";
import { motion, Variants } from "motion/react";

//*---------↓ Mission Content ↓---------*//

const missionData = {
  title: "Our Mission",
  mainTitle: "Empowering Communities",
  subtitle:
    "At Gramtek, we are committed to providing sustainable solutions that address the critical issue of menstrual health and hygiene in rural India",

  cardsData: [
    {
      icon: <OurReachIcon />,
      title: "Our Reach",
      numbers: "210*",
      subtitle: "Villages",
    },
    {
      icon: <CurrentDistributionIocon />,
      title: "Current Distribution",
      numbers: "210*",
      subtitle: "Pads/month",
    },
    {
      icon: <EconomicImpactIcon />,
      title: "Economic Impact",
      numbers: "200",
      subtitle: "Women Employed",
    },
    {
      icon: <TotalBeneficiariesIcon />,
      title: "Total Beneficiaries",
      numbers: "1 lac*",
      subtitle: "Women",
    },
  ],
};

const mainTitleSplit = missionData.mainTitle.split(" ");

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

const once = true;

const Mission = () => {
  return (
    <section id="Mission">
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
        {missionData.title}
      </motion.h1>
      <h2>
        <motion.div
          className="mainTitleSplit"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once }}
        >
          {mainTitleSplit.map((word, i) => (
            <motion.span key={i} variants={itemVariants}>
              {word}
            </motion.span>
          ))}
        </motion.div>
      </h2>
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        }}
        viewport={{ once }}
      >
        {missionData.subtitle}
      </motion.p>
      <motion.div
        className="cards_container"
        variants={cardContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        {missionData.cardsData.map((card, index) => (
          <motion.div
            className="card"
            key={`card-${card.title}-${index}`}
            variants={cardVariants}
          >
            {card.icon}
            <h4>{card.title}</h4>
            <p>
              {card.numbers}
              <span>{card.subtitle}</span>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Mission;

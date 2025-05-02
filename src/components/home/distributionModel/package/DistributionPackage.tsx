import ImageSize from "@/utils";
import Image from "next/image";
import "./style.scss";
import { motion, Variants } from "motion/react";

const DistributionModelSectionData = {
  img: "/assets/distribution/package_right_edited.png",
  title: "Quality & Community Feedback",
  subtitle: "Her Comfort, Our Commitment",
  descriptionOne:
    "At Gramtek, we believe access to safe, high-quality sanitary pads is just as important as ensuring their availability. We make sure pads pass BIS Standards as per IS 5405:2019 .",
  descriptionTwo:
    "To ensure our pads meet the needs of women in remote villages, we",
  btn: {
    link: "/login",
    text: "Learn More",
  },
};
const subtitleSplit = DistributionModelSectionData.subtitle.split(" ");

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

const DistributionPackage = () => {
  return (
    <section id="DistributionPackage">
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            delay: 0.3,
            ease: "easeInOut",
            duration: 0.5,
          },
        }}
        viewport={{ once }}
        className="img_container"
      >
        <Image
          src={DistributionModelSectionData.img}
          alt="Distribution Model"
          fill
          sizes={ImageSize.banner}
        />
      </motion.div>
      <div className="content_container">
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
          {DistributionModelSectionData.title}
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
        <motion.p
          initial={{
            opacity: 0,
            x: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.3,
              ease: "easeInOut",
            },
          }}
          viewport={{ once }}
        >
          {DistributionModelSectionData.descriptionOne}
          <br />
          <br />
          {DistributionModelSectionData.descriptionTwo}
        </motion.p>
        <motion.ul
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              ease: "easeInOut",
            },
          }}
          viewport={{ once }}
        >
          <li>
            Collect direct feedback from users through surveys and village
            meetings
          </li>
          <li>
            Train local agents to report issues and suggestions in real-time.
          </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default DistributionPackage;

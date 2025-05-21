import ImageSize from "@/utils";
import "./style.scss";
import { motion } from "motion/react";
import { viewportMargin, viewportOnce } from "@/utils/anim";
import {
  FadeInTitleSmall,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import { DistributionModelSectionData } from "./data.db";

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
        viewport={{ once: viewportOnce, margin: viewportMargin }}
        className="img_container"
      >
        <img
          src={DistributionModelSectionData.img}
          alt="Distribution Model"
          sizes={ImageSize.banner}
        />
      </motion.div>
      <div className="content_container">
        <FadeInTitleSmall text={DistributionModelSectionData.title} />
        <TitleSplitText text={DistributionModelSectionData.subtitle} />
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
          viewport={{ once: viewportOnce, margin: viewportMargin }}
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
          viewport={{ once: viewportOnce, margin: viewportMargin }}
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

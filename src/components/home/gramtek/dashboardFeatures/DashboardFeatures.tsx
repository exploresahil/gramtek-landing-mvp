"use client";

import {
  FadeInParagraph,
  FadeInParagraphFromRight,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import "./style.scss";
import { dashboardFeaturesData } from "./data.db";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DefaultSlider from "@/components/sliders/defaultSlider/DefaultSlider";
import useResponsive from "@/hooks/useResponsive";
import { slideVariants, viewportMargin, viewportOnce } from "@/utils/anim";
import GetPrisingForm from "./form/GetPrisingForm";

const DashboardFeatures = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { isMobile, isTablet, isLaptop, isDesktop, isXLarge } = useResponsive();

  if (!mounted) {
    return null;
  }

  return (
    <div id="DashboardFeatures">
      <TitleSplitText text={dashboardFeaturesData.title} />
      <div className="options">
        <div className="options_menu">
          {dashboardFeaturesData.options.map((item, index) => (
            <motion.button
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.2,
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: viewportOnce, margin: viewportMargin }}
              className={`option ${activeOption === index ? "active" : ""}`}
              onClick={() => setActiveOption(index)}
            >
              <AnimatePresence mode="wait">
                {activeOption === index && (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                  ></motion.span>
                )}
              </AnimatePresence>{" "}
              {item.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={slideVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: viewportOnce, margin: viewportMargin }}
          exit="exit"
          className="options_cards"
        >
          <DefaultSlider
            gap={
              isXLarge
                ? 40
                : isDesktop
                ? 30
                : isLaptop
                ? 36
                : isTablet
                ? 20
                : isMobile
                ? 10
                : 10
            }
            activeOption={activeOption}
            visibleCount={
              isDesktop ? 4 : isLaptop ? 3 : isTablet ? 3 : isMobile ? 1 : 1
            }
          >
            {dashboardFeaturesData.options[activeOption].cards.map(
              (item, index) => {
                return (
                  <div key={`${item.title}-${index}`} className="card">
                    <div className="card_title">{item.title}</div>
                    <div className="card_desc">
                      <p>{item.descriptionOne}</p>
                      <p>{item.descriptionTwo}</p>
                    </div>
                  </div>
                );
              }
            )}
          </DefaultSlider>
        </motion.div>
      </div>
      <div className="options_testimonials">
        <FadeInParagraph
          className="testimonial_title"
          text={`"${dashboardFeaturesData.testimonials[0].description}"`}
        />
        <FadeInParagraph
          className="testimonial_name"
          text={dashboardFeaturesData.testimonials[0].name}
        />
      </div>
      <div className="dashed_line" />
      <div className="get_pricing">
        <TitleSplitText text={dashboardFeaturesData.pricing.title} />
        <FadeInParagraphFromRight
          className="pricing_desc"
          text={dashboardFeaturesData.pricing.description}
        />
      </div>
      <GetPrisingForm />
    </div>
  );
};

export default DashboardFeatures;

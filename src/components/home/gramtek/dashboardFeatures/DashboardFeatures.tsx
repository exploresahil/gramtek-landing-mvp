"use client";

import { TitleSplitText } from "@/components/common/title/AnimatedTitles";
import "./style.scss";
import { dashboardFeaturesData } from "./data.db";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DefaultSlider from "@/components/sliders/defaultSlider/DefaultSlider";
import useResponsive from "@/hooks/useResponsive";

const DashboardFeatures = () => {
  const [activeOption, setActiveOption] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { isMobile, isTablet, isLaptop, isDesktop, isXLarge } = useResponsive();

  //   console.log("isMobile->", isMobile);
  //   console.log("isTablet->", isTablet);
  //   console.log("isLaptop->", isLaptop);
  //   console.log("isDesktop->", isDesktop);
  //   console.log("isXLarge->", isXLarge);

  //console.log("activeOption->", activeOption);

  if (!mounted) {
    return null;
  }

  return (
    <div id="DashboardFeatures">
      <TitleSplitText text={dashboardFeaturesData.title} />
      <div className="options">
        <div className="options_menu">
          {dashboardFeaturesData.options.map((item, index) => {
            return (
              <button
                key={`${item.title}-${index}`}
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
              </button>
            );
          })}
        </div>

        <div className="options_cards">
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
        </div>
        <p className="options_testimonials">
          "{dashboardFeaturesData.testimonials[0].description}"
          <span>{dashboardFeaturesData.testimonials[0].name}</span>
        </p>
      </div>
    </div>
  );
};

export default DashboardFeatures;

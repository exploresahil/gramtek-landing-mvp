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
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  phone: string;
};

const DashboardFeatures = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Handle form submission here
    try {
      console.log(data);
      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.log(error);
    }
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="pricing_form">
        <div className="form_group">
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        {!isMobile && <div className="line" />}
        <div className="form_group">
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
        </div>
        {!isMobile && <div className="line" />}
        <div className="form_group">
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
        </div>
        {!isMobile && <div className="line" />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DashboardFeatures;

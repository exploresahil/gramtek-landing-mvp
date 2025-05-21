"use client";

import "./style.scss";
import {
  FadeInParagraphFromRight,
  FadeInTitle,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import { contactUsData } from "./data.db";
import ContactUsForm from "./form/ContactUsForm";
import Link from "next/link";
import useResponsive from "@/hooks/useResponsive";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { viewportMargin, viewportOnce } from "@/utils/anim";

const ContactHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { isMobile } = useResponsive();

  if (!mounted) return null;

  if (isMobile)
    return (
      <section id="ContactHero">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          }}
          className="contact_hero_container"
        >
          <TitleSplitText text={contactUsData.title} />
          <FadeInParagraphFromRight
            className="pricing_desc"
            text={contactUsData.description}
          />
          <ContactUsForm />

          <div className="contact_info_container">
            <FadeInTitle text={contactUsData.info.contactInfo.title} />
            {contactUsData.info.contactInfo.info.map((item, index) => (
              <motion.p
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.2 + 0.3,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: viewportOnce }}
                key={index}
              >
                {item.prefix ? (
                  <span className="info_prefix">
                    <strong>{item.title}:</strong>{" "}
                    <Link href={`${item.prefix}${item.value}`}>
                      {item.value}
                    </Link>
                  </span>
                ) : (
                  <span className="info">
                    <strong>{item.title}:</strong> {item.value}
                  </span>
                )}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </section>
    );

  return (
    <section id="ContactHero">
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        className="contact_hero_container"
      >
        <ContactUsForm />
        <div className="right">
          <div className="top">
            <TitleSplitText text={contactUsData.title} />
            <FadeInParagraphFromRight
              className="pricing_desc"
              text={contactUsData.description}
            />
          </div>
          <div className="contact_info_container">
            <FadeInTitle text={contactUsData.info.contactInfo.title} />
            {contactUsData.info.contactInfo.info.map((item, index) => (
              <motion.p
                initial={{
                  opacity: 0,
                  x: 10,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.2 + 0.3,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: viewportOnce, margin: viewportMargin }}
                key={index}
              >
                {item.prefix ? (
                  <span className="info_prefix">
                    <strong>{item.title}:</strong>{" "}
                    <Link href={`${item.prefix}${item.value}`}>
                      {item.value}
                    </Link>
                  </span>
                ) : (
                  <span className="info">
                    <strong>{item.title}:</strong> {item.value}
                  </span>
                )}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;

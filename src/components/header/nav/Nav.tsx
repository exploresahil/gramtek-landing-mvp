"use client";

import Link from "next/link";
import "./style.scss";
import useResponsive from "@/hooks/useResponsive";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MenuIcon from "@/components/svg/MenuIcon";
import MenuCloseIcon from "@/components/svg/MenuCloseIcon";
import { useLenis } from "lenis/react";

type NavItem = {
  title: string;
  href: string;
};

interface NavProps {
  navItems: NavItem[];
  buttonText: string;
}

const Nav: React.FC<NavProps> = ({ navItems, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();
  const [mounted, setMounted] = useState(false);

  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [isMoreNav, setIsMoreNav] = useState(false);
  const [isMoreAndTab, setIsMoreAndTab] = useState(false);

  useEffect(() => {
    if (mounted) {
      setIsMoreNav(isMobile && navItems.length > 1);
      setIsMoreAndTab(isTablet && navItems.length > 3);
    }
  }, [isMobile, isTablet, navItems.length, mounted]);

  // Don't render anything until mounted
  if (!mounted) return null;

  /**
   * Mobile/Tablet Navigation Menu
   * Renders when there are too many items for the current screen size
   */

  if (isMoreNav || isMoreAndTab) {
    return (
      <div id="MoreNav">
        <Link scroll={false} href="/login" className="more_login">
          {buttonText}
        </Link>
        <button
          onClick={() => {
            setIsOpen(true);
            lenis?.stop();

            if (typeof window != "undefined" && window.document) {
              document.body.style.overflow = "hidden";
            }
          }}
        >
          <MenuIcon />
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{
                x: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                x: "100%",
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                },
              }}
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  lenis?.start();
                  document.body.style.overflow = "unset";
                }}
              >
                <MenuCloseIcon />
              </button>
              <div className="more_left">
                {navItems.map((item, index) => (
                  <motion.div
                    key={`nav-item-${item.title}-${index}`}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.4 + index * 0.1,
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                    }}
                  >
                    <Link
                      scroll={false}
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false);

                        lenis?.start();
                        document.body.style.overflow = "unset";
                      }}
                      className="nav-item"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    );
  }

  /**
   * Desktop Navigation Menu
   * Default view for larger screens or fewer navigation items
   */
  return (
    <nav id="Nav">
      <div className="left">
        {navItems.map((item, index) => (
          <Link
            scroll={false}
            href={item.href}
            key={`nav-item-${item.title}-${index}`}
            className="nav-item"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Link scroll={false} href="/login" className="login">
        {buttonText}
      </Link>
    </nav>
  );
};

export default Nav;

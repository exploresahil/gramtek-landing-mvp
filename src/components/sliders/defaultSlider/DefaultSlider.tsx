"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import "./style.scss";
import {
  sliderTrackVariants,
  slideVariants,
  viewportMargin,
  viewportOnce,
} from "@/utils/anim";

interface SliderProps {
  children: React.ReactNode[];
  visibleCount?: number;
  gap?: number;
  draggable?: boolean;
  dragOffset?: number;
  activeIndex?: number;
  navBtnSize?: number;
  activeOption?: number;
}

const DefaultSlider: React.FC<SliderProps> = ({
  children,
  visibleCount = 1,
  gap = 0,
  draggable = false,
  dragOffset,
  activeIndex,
  navBtnSize = 20,
  activeOption,
}) => {
  const initialIndex = activeIndex !== undefined ? activeIndex : 0;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (activeOption !== undefined) {
      setCurrentIndex(0);
    }
  }, [activeOption]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const slides = children;

  //console.log("currentIndexSlider->", currentIndex);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (activeIndex !== undefined && activeIndex !== currentIndex) {
      setCurrentIndex(activeIndex);
    }
  }, [activeIndex]);

  // Calculate slide width ensuring it's never negative
  const totalGapWidth = Math.max(0, (visibleCount - 1) * gap);
  const slideWidth = Math.max(
    0,
    (containerWidth - totalGapWidth) / visibleCount
  );
  const step = slideWidth + gap;
  const threshold = dragOffset !== undefined ? dragOffset : step / 2;

  // Determine if navigation buttons should be visible
  const showNavButtons = children.length > visibleCount;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= children.length) {
      setCurrentIndex(children.length - 1);
    }
  }, [currentIndex, children.length]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    }
  };

  return (
    <div className="sliderMain">
      <div className="sliderWrapper">
        <motion.div
          ref={containerRef}
          className="sliderTrack"
          drag={draggable ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={draggable ? 0.2 : 0}
          onDragEnd={draggable ? handleDragEnd : undefined}
          animate={{ x: -currentIndex * step }}
          transition={{ type: "tween", duration: 0.5 }}
          initial={false}
        >
          <AnimatePresence initial={false}>
            {slides.map((child, idx) => (
              <motion.div
                key={idx}
                className="slide"
                style={{
                  width: Math.max(0, slideWidth),
                  marginRight: idx === slides.length - 1 ? 0 : gap,
                }}
              >
                {child}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {showNavButtons && (
        <div className="navButtons">
          <button
            className="navButton"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <ArrowLeft size={navBtnSize} />
          </button>
          <div className="line" />
          <button
            className="navButton"
            onClick={handleNext}
            disabled={currentIndex >= children.length - visibleCount}
            aria-label="Next"
          >
            <ArrowRight size={navBtnSize} />
          </button>
        </div>
      )}
    </div>
  );
};

export default DefaultSlider;

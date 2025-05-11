import { viewportMargin, viewportOnce } from "@/utils/anim";
import { motion } from "motion/react";

const BrandBottomSvg = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: viewportOnce, margin: viewportMargin }}
      width="580"
      height="61"
      viewBox="0 0 580 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4521_56947)">
        <path
          d="M22.4133 39.0676C-15.3358 33.2367 41.5842 19.997 78.9494 14.9921C116.315 9.98713 166.865 8.75496 246.604 9.03796C326.344 9.32095 516.889 11.3393 557.384 16.69C597.88 22.0408 531.57 35.5943 489.58 41.1422C447.59 46.6901 383.305 50.3231 305.443 49.9773"
          fill="#D9CFE2"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_4521_56947"
          x="0"
          y="0"
          width="580"
          height="61"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4521_56947"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4521_56947"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default BrandBottomSvg;

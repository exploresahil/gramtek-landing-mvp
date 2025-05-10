import { useEffect, useRef, useState, useMemo } from "react";
import {
  BhiwapurSvg,
  HingnaSvg,
  KalameshwarSvg,
  KampteeSvg,
  KatolSvg,
  KuhiSvg,
  MaudaSvg,
  NagpurRuralNorthSvg,
  NagpurRuralSouthSvg,
  NagpurRuralWestSvg,
  NagpurUrbanSvg,
  NarkhedSvg,
  ParseoniSvg,
  RamtekSvg,
  SaonerSvg,
  UmredSvg,
} from "@/components/svg/talukaMap/talukas/TalukasSvgs";
import useResponsive from "@/hooks/useResponsive";
import { LocationData, mapData } from "./data.db";
import { motion } from "motion/react";

const ALL_ID = "all";

type TalukaMapProps = {
  selected: string;
  setSelectedLocation?: (location: string) => void;
};

const TalukaMap = ({ selected, setSelectedLocation }: TalukaMapProps) => {
  //* 1. All hooks at the top
  const [mounted, setMounted] = useState(false);
  const { isMobile } = useResponsive();
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState("0 0 587 508");

  //* Compute which talukas to render
  const toRender: LocationData[] = useMemo(() => {
    if (isMobile && selected === ALL_ID) {
      return mapData;
    }
    if (isMobile) {
      return mapData.filter((loc) => loc.id === selected);
    }
    return mapData;
  }, [isMobile, selected]);

  //* mount flag
  useEffect(() => {
    setMounted(true);
  }, []);

  //* recalc viewBox when children change
  useEffect(() => {
    if (!mounted || !svgRef.current) return;
    const elements = Array.from(
      svgRef.current.children
    ) as SVGGraphicsElement[];
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

    elements.forEach((el) => {
      const { x, y, width, height } = el.getBBox();
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x + width);
      maxY = Math.max(maxY, y + height);
    });

    const padding = 16;
    setViewBox(
      `${minX - padding} ${minY - padding} ${maxX - minX + padding * 2} ${
        maxY - minY + padding * 2
      }`
    );
  }, [mounted, isMobile, selected]);

  //* 2. Now it’s safe to bail out
  if (!mounted) return null;

  //* 3. Render everything
  const getFill = (id: string) => (selected === id ? "#B7ABC6" : "#D6CCDF");

  const SvgTag = isMobile ? motion.svg : "svg";

  return (
    <SvgTag
      ref={svgRef}
      width="100%"
      height="100%"
      {...(isMobile
        ? {
            animate: { viewBox },
            transition: { duration: 0.3, ease: "easeInOut" },
          }
        : { viewBox })}
      xmlns="http://*www.w3.org/2000/svg"
    >
      {toRender.map((loc) => {
        const Comp = {
          ramtek: RamtekSvg,
          mauda: MaudaSvg,
          kuhi: KuhiSvg,
          kamptee: KampteeSvg,
          saoner: SaonerSvg,
          "nagpur-urban": NagpurUrbanSvg,
          kalameshwar: KalameshwarSvg,
          "nagpur-rural-north": NagpurRuralNorthSvg,
          parseoni: ParseoniSvg,
          bhiwapur: BhiwapurSvg,
          umred: UmredSvg,
          hingna: HingnaSvg,
          "nagpur-rural-south": NagpurRuralSouthSvg,
          katol: KatolSvg,
          "nagpur-rural-west": NagpurRuralWestSvg,
          narkhed: NarkhedSvg,
        }[loc.id];

        return Comp ? (
          <Comp
            key={loc.id}
            fill={getFill(loc.id)}
            onClick={() => setSelectedLocation && setSelectedLocation(loc.id)}
          />
        ) : null;
      })}
    </SvgTag>
  );
};

export default TalukaMap;

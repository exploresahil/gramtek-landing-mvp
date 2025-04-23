import { useEffect, useRef, useState } from "react";
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
import { LocationData } from "./data.db";
import { motion } from "motion/react";

type TalukaMapProps = {
  selected: string;
  setSelectedLocation?: (location: string) => void;
};

const TalukaMap = ({ selected, setSelectedLocation }: TalukaMapProps) => {
  const [mounted, setMounted] = useState(false);
  const { isMobile } = useResponsive();
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState<string>("0 0 587 508");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (svgRef.current) {
        const visibleElements = Array.from(svgRef.current.children);
        if (visibleElements.length > 0) {
          let minX = Infinity,
            minY = Infinity,
            maxX = -Infinity,
            maxY = -Infinity;

          visibleElements.forEach((element) => {
            const bbox = (element as SVGGraphicsElement).getBBox();
            minX = Math.min(minX, bbox.x);
            minY = Math.min(minY, bbox.y);
            maxX = Math.max(maxX, bbox.x + bbox.width);
            maxY = Math.max(maxY, bbox.y + bbox.height);
          });

          const padding = 16;
          const newViewBox = `${minX - padding} ${minY - padding} ${
            maxX - minX + padding * 2
          } ${maxY - minY + padding * 2}`;
          setViewBox(newViewBox);
        }
      }
    }
  }, [mounted, isMobile, selected, viewBox]);

  if (!mounted) return null;

  const getSelectedFill = (talukaName: string) =>
    selected === talukaName ? "#D6CCDF" : undefined;

  // Import mapData to filter visible SVG components
  const { mapData } = require("./data.db");

  // Create a mapping of taluka IDs to their SVG components
  const talukaComponents = {
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
  };

  //*---------↓ Mobile screen ↓---------*//

  if (isMobile) {
    return (
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {mapData
          .filter((loc: LocationData) => loc.id === selected)
          .map((loc: LocationData) => {
            const Component =
              talukaComponents[loc.id as keyof typeof talukaComponents];
            return (
              <Component
                key={loc.id}
                fill={getSelectedFill(loc.id) ?? "#B7ABC6"}
              />
            );
          })}
      </svg>
    );
  }

  //*---------↓ Larger screen ↓---------*//

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {mapData.map((location: { id: string }) => {
        const TalukaSvg =
          talukaComponents[location.id as keyof typeof talukaComponents];
        return TalukaSvg ? (
          <TalukaSvg
            key={location.id}
            fill={getSelectedFill(location.id)}
            onClick={() =>
              setSelectedLocation && setSelectedLocation(location.id)
            }
          />
        ) : null;
      })}
    </svg>
  );
};

export default TalukaMap;

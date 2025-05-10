"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { mapData, LocationData } from "./data.db";
import "./style.scss";
import TalukaMap from "@/components/home/successMap/TalukaMap";
import { motion } from "motion/react";
import MapNav from "./nav/MapNav";
import { viewportMargin, viewportOnce } from "@/utils/anim";
import { FadeInTitle } from "@/components/common/title/AnimatedTitles";

//* A special ID for the aggregated view
const ALL_ID = "all";

export default function SuccessMapSection() {
  //* Default to the "all" aggregate
  const [selectedLocation, setSelectedLocation] = useState<string>("ramtek");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  //* close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  //* Compute the data for either the selected taluka or the “all” aggregate
  const locationData: LocationData = useMemo(() => {
    if (selectedLocation === ALL_ID) {
      return mapData.reduce(
        (acc, cur) => ({
          id: ALL_ID,
          name: "All Agents",
          agents: acc.agents + cur.agents,
          padsDistributed: acc.padsDistributed + cur.padsDistributed,
          revenueGenerated: acc.revenueGenerated + cur.revenueGenerated,
          beneficiaries: acc.beneficiaries + cur.beneficiaries,
        }),
        {
          id: ALL_ID,
          name: "All Agents",
          agents: 0,
          padsDistributed: 0,
          revenueGenerated: 0,
          beneficiaries: 0,
        }
      );
    }
    //* single location
    return mapData.find((loc) => loc.id === selectedLocation)!;
  }, [selectedLocation]);

  const InfoItem = ({ label, value }: { label: string; value: number }) => (
    <div className="info">
      <h5>
        <strong>{label}:</strong>
      </h5>
      <p>{value.toLocaleString()}</p>
    </div>
  );

  return (
    <section id="SuccessMapSection">
      <FadeInTitle text="Browse Our Success Map" />

      <motion.div
        className="success_map_main"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { ease: "easeInOut", delay: 0.4 },
        }}
        viewport={{ once: viewportOnce, margin: viewportMargin }}
      >
        <MapNav
          locationData={locationData}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          dropdownRef={dropdownRef}
        />

        <div className="map_main_container">
          <div className="taluka_map_container">
            <TalukaMap
              selected={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <div className="info_container">
            <InfoItem
              label="Total Pads Distributed"
              value={locationData.padsDistributed}
            />
            <InfoItem
              label="Total Revenue Generated"
              value={locationData.revenueGenerated}
            />
            <InfoItem
              label="Total Beneficiaries"
              value={locationData.beneficiaries}
            />
            <InfoItem
              label="Total Beneficiaries"
              value={locationData.beneficiaries}
            />
            <InfoItem
              label="Total Agents Employed"
              value={locationData.agents}
            />
            <InfoItem
              label="Total Agents Employed"
              value={locationData.agents}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

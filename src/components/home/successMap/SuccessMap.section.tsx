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
      const total = mapData.reduce(
        (acc, cur, index, array) => {
          const isLast = index === array.length - 1;

          return {
            id: ALL_ID,
            name: "Total",
            agents: acc.agents + cur.agents,
            padsDistributed: acc.padsDistributed + cur.padsDistributed,
            publicMoneySaved: acc.publicMoneySaved + cur.publicMoneySaved,
            beneficiaries: acc.beneficiaries + cur.beneficiaries,
            employmentGenerated:
              acc.employmentGenerated + cur.employmentGenerated,
            renumerationDisbursed:
              acc.renumerationDisbursed + cur.renumerationDisbursed,

            // Instead of summing, calculate mean in the last iteration
            reducedMenstrualHygieneRelatedInfectionsBy: isLast
              ? (acc.reducedMenstrualHygieneRelatedInfectionsBy +
                  cur.reducedMenstrualHygieneRelatedInfectionsBy) /
                array.length
              : acc.reducedMenstrualHygieneRelatedInfectionsBy +
                cur.reducedMenstrualHygieneRelatedInfectionsBy,
          };
        },
        {
          id: ALL_ID,
          name: "Total",
          agents: 0,
          padsDistributed: 0,
          publicMoneySaved: 0,
          beneficiaries: 0,
          employmentGenerated: 0,
          renumerationDisbursed: 0,
          reducedMenstrualHygieneRelatedInfectionsBy: 0,
        }
      );

      return total;
    }

    // Single location
    return mapData.find((loc) => loc.id === selectedLocation)!;
  }, [selectedLocation, mapData]);

  const InfoItem = ({
    label,
    value,
    prefix,
    suffix,
  }: {
    label: string;
    value: number;
    prefix?: string;
    suffix?: string;
  }) => (
    <div className="info">
      <h5>
        <strong>{label}:</strong>
      </h5>
      <p>
        {prefix && <span>{prefix}</span>} {value.toLocaleString("en-IN")}
        {suffix && <span>{suffix}</span>}
      </p>
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
              label="Public Money Saved"
              value={locationData.publicMoneySaved}
            />
            <InfoItem
              label="Total Beneficiaries"
              value={locationData.beneficiaries}
              suffix=" +"
            />
            <InfoItem
              label="Employment Generated"
              value={locationData.employmentGenerated}
            />
            <InfoItem
              label="Renumeration Disbursed"
              value={locationData.renumerationDisbursed}
              prefix="₹"
            />
            <InfoItem
              label="Reduced Menstrual Hygiene - related infections by"
              value={Math.round(
                locationData.reducedMenstrualHygieneRelatedInfectionsBy
              )}
              suffix="%"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

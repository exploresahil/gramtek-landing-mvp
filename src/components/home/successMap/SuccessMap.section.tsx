"use client";

import { useState, useRef, useEffect } from "react";
import { mapData } from "./data.db";
import "./style.scss";
import TalukaMap from "@/components/home/successMap/TalukaMap";
import { AnimatePresence, motion } from "motion/react";

export default function SuccessMapSection() {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    mapData[0].id
  );

  //console.log("selectedLocation->", selectedLocation);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close on outside click
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

  const locationData = mapData.find(
    (location) => location.id === selectedLocation
  )!;

  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );

  const once = true;

  return (
    <section id="SuccessMapSection">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            ease: "easeInOut",
            delay: 0.3,
          },
        }}
        viewport={{ once }}
      >
        Browse Our Success Map
      </motion.h1>
      <motion.div
        className="success_map_main"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            ease: "easeInOut",
            delay: 0.4,
          },
        }}
        viewport={{ once }}
      >
        <div className="select_container" ref={dropdownRef}>
          <button
            className="dropdown_toggle"
            onClick={() => setIsOpen((o) => !o)}
          >
            {locationData.name}{" "}
            <span className="arrow">{isOpen ? "▴" : "▾"}</span>
          </button>

          <AnimatePresence mode="sync">
            {isOpen && (
              <motion.ul
                className="dropdown_menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.2 },
                }}
                exit={{ opacity: 0, height: 0 }}
              >
                {mapData.map((loc) => (
                  <li key={loc.id}>
                    <button
                      className={loc.id === selectedLocation ? "active" : ""}
                      onClick={() => {
                        setSelectedLocation(loc.id);
                        setIsOpen(false);
                      }}
                    >
                      {loc.name}
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="map_main_container">
          <div className="taluka_map_container">
            <TalukaMap
              selected={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>
          <div className="info_container">
            <h2>{locationData.name}</h2>
            <InfoItem label="Date" value={locationData.date} />
            <InfoItem label="Education" value={locationData.education} />
            <InfoItem label="Description" value={locationData.description} />
            <InfoItem label="Info" value={locationData.info} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion, AnimatePresence } from "motion/react";
import { Ref, useEffect, useState, useMemo } from "react";
import { mapData } from "../data.db";
import useResponsive from "@/hooks/useResponsive";
import "./style.scss";

interface Props {
  locationData: { id: string; name: string; agents: number };
  selectedLocation: string;
  setSelectedLocation: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (o: boolean) => void;
  dropdownRef: Ref<HTMLDivElement>;
}

const ALL_ID = "all";

const MapNav = ({
  locationData,
  selectedLocation,
  setSelectedLocation,
  isOpen,
  setIsOpen,
  dropdownRef,
}: Props) => {
  const [mounted, setMounted] = useState(false);
  const { isMobile } = useResponsive();

  useEffect(() => {
    setMounted(true);
  }, []);

  //* total agents for the label
  const totalAgents = useMemo(
    () => mapData.reduce((sum, loc) => sum + loc.agents, 0),
    []
  );

  if (mounted && isMobile) {
    return (
      <div className="select_container" ref={dropdownRef}>
        <button className="dropdown_toggle" onClick={() => setIsOpen(!isOpen)}>
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
                    {loc.name} ({loc.agents})
                  </button>
                </li>
              ))}
              <li key={ALL_ID}>
                <button
                  className={selectedLocation === ALL_ID ? "active" : ""}
                  onClick={() => {
                    setSelectedLocation(ALL_ID);
                    setIsOpen(false);
                  }}
                >
                  All Agents ({totalAgents})
                </button>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="map_nav_container">
      {mapData.map((loc) => (
        <button
          key={loc.id}
          className={loc.id === selectedLocation ? "active" : ""}
          onClick={() => setSelectedLocation(loc.id)}
        >
          {`${loc.name} (${loc.agents})`}
        </button>
      ))}
      <button
        key={ALL_ID}
        className={selectedLocation === ALL_ID ? "active" : ""}
        onClick={() => setSelectedLocation(ALL_ID)}
      >
        Total ({totalAgents})
      </button>
    </div>
  );
};

export default MapNav;

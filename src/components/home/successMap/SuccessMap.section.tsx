"use client";

import { useState } from "react";
import { mapData } from "./data.db";
import "./style.scss";

export default function SuccessMapSection() {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    mapData[0].id
  );

  const locationData = mapData.find(
    (location) => location.id === selectedLocation
  )!;

  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );

  return (
    <section className="py-8" id="SuccessMapSection">
      <div className="select-container">
        <label
          htmlFor="locationSelect"
          className="block mb-2 text-sm font-medium"
        >
          Choose Location:
        </label>
        <select
          id="locationSelect"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          {mapData.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      <div className="info-container mt-6">
        <h2 className="text-2xl font-bold mb-4">{locationData.name}</h2>
        <InfoItem label="Date" value={locationData.date} />
        <InfoItem label="Education" value={locationData.education} />
        <InfoItem label="Description" value={locationData.description} />
        <InfoItem label="Info" value={locationData.info} />
      </div>
    </section>
  );
}

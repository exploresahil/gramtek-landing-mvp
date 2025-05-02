export interface LocationData {
  id: string;
  name: string;
  agents: number;
  padsDistributed: number;
  revenueGenerated: number;
  beneficiaries: number;
}

export const mapData: LocationData[] = [
  /* {
    id: "saoner",
    name: "Saoner",
    agents: 50,
    padsDistributed: 2100000,
    revenueGenerated: 2100000,
    beneficiaries: 60000,
  }, */
  {
    id: "mauda",
    name: "Mauda",
    agents: 50,
    padsDistributed: 2100000,
    revenueGenerated: 2100000,
    beneficiaries: 60000,
  },
  {
    id: "parseoni",
    name: "Parseoni",
    agents: 50,
    padsDistributed: 1200000,
    revenueGenerated: 1200000,
    beneficiaries: 60000,
  },
  {
    id: "ramtek",
    name: "Ramtek",
    agents: 150,
    padsDistributed: 2400000,
    revenueGenerated: 2400000,
    beneficiaries: 60000,
  },
];
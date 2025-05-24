export interface LocationData {
  id: string;
  name: string;
  agents: number;
  padsDistributed: number;
  publicMoneySaved: number;
  beneficiaries: number;
  employmentGenerated: number;
  renumerationDisbursed: number;
  reducedMenstrualHygieneRelatedInfectionsBy: number;
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
    id: "ramtek",
    name: "Ramtek",
    agents: 150,
    padsDistributed: 2400000,
    publicMoneySaved: 2400000,
    beneficiaries: 60000,
    employmentGenerated: 60000,
    renumerationDisbursed: 60000,
    reducedMenstrualHygieneRelatedInfectionsBy: 60,
  },
  {
    id: "mauda",
    name: "Mauda",
    agents: 50,
    padsDistributed: 21000,
    publicMoneySaved: 21000,
    beneficiaries: 42000,
    employmentGenerated: 85000,
    renumerationDisbursed: 75000,
    reducedMenstrualHygieneRelatedInfectionsBy: 70,
  },
  {
    id: "parseoni",
    name: "Parseoni",
    agents: 50,
    padsDistributed: 40000,
    publicMoneySaved: 500000,
    beneficiaries: 55000,
    employmentGenerated: 25000,
    renumerationDisbursed: 65000,
    reducedMenstrualHygieneRelatedInfectionsBy: 30,
  },

];
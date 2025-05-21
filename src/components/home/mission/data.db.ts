import {
    CurrentDistributionIocon,
    EconomicImpactIcon,
    OurReachIcon,
    TotalBeneficiariesIcon,
} from "@/components/svg/MissionIcons";


type MissionCardDataTypes = {
    title: string;
    mainTitle: string;
    subtitle: string;
    cardsData: {
        icon: () => React.ReactElement;
        title: string;
        numbers: number;
        numbersSuffix?: string;
        subtitle: string;
    }[];
};

export const missionData: MissionCardDataTypes = {
    title: "Our Mission",
    mainTitle: "Empowering Communities",
    subtitle:
        "At Gramtek, we are committed to providing sustainable solutions that address the critical issue of menstrual health and hygiene in rural India",

    cardsData: [
        {
            icon: OurReachIcon,
            title: "Our Reach",
            numbers: 210,
            numbersSuffix: "*",
            subtitle: "Villages",
        },
        {
            icon: CurrentDistributionIocon,
            title: "Current Distribution",
            numbers: 8,
            numbersSuffix: " lac",
            subtitle: "Pads/month",
        },
        {
            icon: EconomicImpactIcon,
            title: "Economic Impact",
            numbers: 200,
            subtitle: "Women Employed",
        },
        {
            icon: TotalBeneficiariesIcon,
            title: "Total Beneficiaries",
            numbers: 1,
            numbersSuffix: " lac*",
            subtitle: "Women",
        },
    ],
};
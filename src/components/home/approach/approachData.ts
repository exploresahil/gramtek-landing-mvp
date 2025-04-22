import { ApproachIconFour, ApproachIconOne, ApproachIconThree, ApproachIconTwo } from "@/components/svg/ApproachIcons";

export interface ApproachPoint {
    icon: React.FC;
    text: string;
}

export interface ApproachSectionData {
    title: string;
    subtitle: string;
    points: ApproachPoint[];
    cta: {
        text: string;
        href: string;
    };
}

const approachData: ApproachSectionData = {
    title: "Our Approach",
    subtitle: "Holistic Solutions Addressing\nthe Systemic Barriers",
    points: [
        {
            text: "Challenging Taboos and Misconceptions",
            icon: ApproachIconOne
        },
        {
            text: "Providing Access to Essential Resources",
            icon: ApproachIconTwo
        },
        {
            text: "Building Sustainable Community Partnerships",
            icon: ApproachIconThree
        },
        {
            text: "Empowering Women and Girls Through Education and Advocacy",
            icon: ApproachIconFour
        }
    ],
    cta: {
        text: "Get Involved",
        href: "/login"
    }
};

export default approachData;
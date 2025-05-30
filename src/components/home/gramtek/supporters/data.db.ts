import BrandBottomSvg from "@/components/svg/supporters/BrandBottomSvg";

interface SupportersData {
    title: string;
    description: string;
    brand: string;
    brandTitle: string;
    brandBottom: React.FC;
    button: {
        text: string;
        href: string;
    };
}

export const supportersData: SupportersData = {
    title: "Our Supporters",
    description: "Gramtek is grateful for the generous support of our donors, volunteers, and allies who share our vision of a world where every women and girl has access to the resources and support they need to cope up with their everyday routine",
    brand: "MahatvaLogo.png",
    brandTitle: "Mahatva Foundation",
    brandBottom: BrandBottomSvg,
    button: {
        text: "Get Involved",
        href: "/contact",
    }
};
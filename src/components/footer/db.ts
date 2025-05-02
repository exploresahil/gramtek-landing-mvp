import { FacebookIcon, InstagramIcon, LinkedInIcon, YoutubeIcon } from "../svg/socials/Socials";

interface FooterType {
    brand: {
        name: string;
        href: string;
    };
    socials: {
        href: string;
        title: string;
        icon: () => React.ReactElement;
    }[];
    nav: {
        title: string;
        href: string;
    }[];
    footer: string;
}

export const footerData: FooterType = {
    brand: {
        name: "AMICAL ENTERPRISES PVT LTD",
        href: "/",
    },
    socials: [
        {
            href: "/",
            title: "LinkedIn",
            icon: LinkedInIcon,
        },
        {
            href: "/",
            title: "Facebook",
            icon: FacebookIcon,
        },
        {
            href: "/",
            title: "Instagram",
            icon: InstagramIcon,
        },
        {
            href: "/",
            title: "Youtube",
            icon: YoutubeIcon,
        },
    ],
    nav: [
        {
            title: "Team",
            href: "/",
        },
        {
            title: "Case Studies",
            href: "/",
        },
        {
            title: "Publications",
            href: "/",
        },
    ],
    footer: "© 2020 Amical Enterprises Pvt Ltd. All rights reserved",
};
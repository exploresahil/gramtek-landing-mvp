type ContactUsDataType = {
    title: string;
    description: string;
    info: {
        contactInfo: {
            title: string;
            info: {
                title: string;
                value: string;
                isLink: boolean;
                prefix?: string;
            }[];
        };
    };
};

export const contactUsData = {
    title: "Contact Us",
    description: "Gramtek is here to help and we'd love to hear from you. Whether you have a question about our sanitary pad distribution, want to explore partnership opportunities, or simply wish to share feedback, our team is ready to connect and support you every step of the way.",
    info: {
        contactInfo: {
            title: "Get in Touch",
            info: [
                {
                    title: "Phone",
                    value: "+91 123 456 7890",
                    prefix: "tel:",
                },
                {
                    title: "Email",
                    value: "hello@gramtek.in",
                    prefix: "mailto:",

                }, {
                    title: "Office Hours",
                    value: "Monday-Friday, 9 AM-6 PM IST",
                }
            ],
        }
    }
};
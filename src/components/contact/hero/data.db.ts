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
  description:
    "Gramtek is here to help and we'd love to hear from you. Whether you have a question about our sanitary pad distribution, want to explore partnership opportunities, or simply wish to share feedback, our team is ready to connect and support you every step of the way.",
  info: {
    contactInfo: {
      title: "Get in Touch",
      info: [
        {
          title: "Phone",
          value: "+91 827 555 5331",
          prefix: "tel:",
        },
        {
          title: "Email",
          value: "info@gramtek.in",
          prefix: "mailto:",
        },
        {
          title: "Office Hours",
          value: "Monday-Friday, 11 AM to 5 PM IST",
        },
      ],
    },
  },
};

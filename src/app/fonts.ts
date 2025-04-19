import { Roboto, Cookie, Azeret_Mono, Inter, Anek_Devanagari, Syne, Nunito, Lato } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "500", "700"], // all weights
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cookie",
});

export const azeret = Azeret_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-azeret",
});

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
});

export const anek = Anek_Devanagari({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["devanagari"],
  style: ["normal"],
  variable: "--font-anek",
});

export const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-syne",
});

export const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-lato",
});
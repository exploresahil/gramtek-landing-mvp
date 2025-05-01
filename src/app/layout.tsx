import type { Metadata, Viewport } from "next";
import {
  cookie,
  roboto,
  azeret,
  inter,
  anek,
  syne,
  nunito,
  lato,
} from "./fonts";
import "./scss/globals.scss";
import Header from "@/components/header/Header";
import { ErrorBoundary } from "react-error-boundary";
import ReactLenis from "lenis/react";
import "lenis/dist/lenis.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Gramtek",
  description:
    "Gramtek is a non-profit organization dedicated to improving sanitary hygiene in underserved rural communities across India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body
          className={`${roboto.variable} ${cookie.variable} ${azeret.variable} ${inter.variable} ${anek.variable} ${syne.variable} ${nunito.variable} ${lato.variable}`}
        >
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Header />
            {children}
          </ErrorBoundary>
        </body>
      </ReactLenis>
    </html>
  );
}

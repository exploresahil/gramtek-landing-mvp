import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import ImageSize from "@/utils";

//*---------↓ Hero Content ↓---------*//

const heroData = {
  title: "Gramtek - A Public Distribution Solution",
  subtitleA: "Distributing Sanitary",
  subtitleB: "Pads for Rural India",
  description:
    "Gramtek is a non-profit organization dedicated to improving sanitary hygiene in underserved rural communities across India.",
  btn: {
    link: "/login",
    text: "Get Involved",
  },
};

const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero_container">
        <h2>{heroData.title}</h2>
        <h1>
          {heroData.subtitleA}
          <br />
          {heroData.subtitleB}
        </h1>
        <h3>{heroData.description}</h3>
        <Link href={heroData.btn.link}>{heroData.btn.text}</Link>
      </div>
      <div className="bg_container">
        <div className="left_img">
          <Image
            src="/assets/hero/hero-asset-01.png"
            fill
            sizes={ImageSize.banner}
            alt="hero_right"
          />
        </div>
        <div className="right_img">
          <Image
            src="/assets/hero/hero-asset-02.png"
            fill
            sizes={ImageSize.banner}
            alt="hero_right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

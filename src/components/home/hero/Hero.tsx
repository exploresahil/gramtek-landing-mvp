import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import ImageSize from "@/utils";

const Hero = () => {
  return (
    <section id="Hero">
      <div className="hero_container">
        <h2>Gramtek - A Public Distribution Solution</h2>
        <h1>
          Distributing Sanitary
          <br />
          Pads for Rural India
        </h1>
        <h3>
          Gramtek is a non-profit organization dedicated to improving sanitary
          hygiene in underserved rural communities across India.{" "}
        </h3>
        <Link href="/login">Get Involved</Link>
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

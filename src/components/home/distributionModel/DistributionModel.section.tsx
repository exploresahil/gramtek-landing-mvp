import Image from "next/image";
import "./style.scss";
import ImageSize from "@/utils";
import Link from "next/link";

const DistributionModelSectionData = {
  img: "/assets/hero/package.png",
  title: "Our Distribution Model",
  subtitle: "Simple, Effective & Scalable",
  descriptionOne:
    "Gramtek's innovative distribution model ensures that women and girls in remote and underserved areas have access to high-quality sanitary pads at affordable prices.",
  descriptionTwo:
    "By partnering with local community organizations and leveraging digital technologies, we established a deep connection with the villagers.",
  btn: "Learn More",
};

const DistributionModelSection = () => {
  return (
    <section id="DistributionModelSection">
      <div className="content_container">
        <h1>{DistributionModelSectionData.title}</h1>
        <h2>{DistributionModelSectionData.subtitle}</h2>
        <p>
          {DistributionModelSectionData.descriptionOne}
          <br />
          <br />
          {DistributionModelSectionData.descriptionTwo}
        </p>
        <Link href="/about">Learn More</Link>
      </div>
      <div className="img_container">
        <Image
          src={DistributionModelSectionData.img}
          alt="Distribution Model"
          fill
          sizes={ImageSize.banner}
        />
      </div>
    </section>
  );
};

export default DistributionModelSection;

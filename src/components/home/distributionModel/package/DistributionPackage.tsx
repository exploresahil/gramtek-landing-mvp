import ImageSize from "@/utils";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

const DistributionModelSectionData = {
  img: "/assets/distribution/package_right.png",
  title: "Our Distribution Model",
  subtitle: "Simple, Effective & Scalable",
  descriptionOne:
    "Gramtek's innovative distribution model ensures that women and girls in remote and underserved areas have access to high-quality sanitary pads at affordable prices.",
  descriptionTwo:
    "By partnering with local community organizations and leveraging digital technologies, we established a deep connection with the villagers.",
  btn: {
    link: "/login",
    text: "Learn More",
  },
};

const DistributionPackage = () => {
  return (
    <section id="DistributionPackage">
      <div className="img_container">
        <Image
          src={DistributionModelSectionData.img}
          alt="Distribution Model"
          fill
          sizes={ImageSize.banner}
        />
      </div>
      <div className="content_container">
        <h1>{DistributionModelSectionData.title}</h1>
        <h2>{DistributionModelSectionData.subtitle}</h2>
        <p>
          {DistributionModelSectionData.descriptionOne}
          <br />
          <br />
          {DistributionModelSectionData.descriptionTwo}
        </p>
        <Link href={DistributionModelSectionData.btn.link}>
          {DistributionModelSectionData.btn.text}
        </Link>
      </div>
    </section>
  );
};

export default DistributionPackage;

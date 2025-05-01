import ImageSize from "@/utils";
import Image from "next/image";
import "./style.scss";

const DistributionModelSectionData = {
  img: "/assets/distribution/package_right_edited.png",
  title: "Quality & Community Feedback",
  subtitle: "Her Comfort, Our Commitment",
  descriptionOne:
    "At Gramtek, we believe access to safe, high-quality sanitary pads is just as important as ensuring their availability. We make sure pads pass BIS Standards as per IS 5405:2019 .",
  descriptionTwo:
    "To ensure our pads meet the needs of women in remote villages, we",
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
        <ul>
          <li>
            Collect direct feedback from users through surveys and village
            meetings
          </li>
          <li>
            Train local agents to report issues and suggestions in real-time.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DistributionPackage;

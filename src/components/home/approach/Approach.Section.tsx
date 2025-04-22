import ApproachDesign from "@/components/svg/ApproachDesign";
import "./style.scss";
import Link from "next/link";
import approachData, { ApproachSectionData } from "./approachData";

interface ApproachSectionProps {
  data?: ApproachSectionData;
}

const ApproachSection: React.FC<ApproachSectionProps> = ({
  data = approachData,
}) => {
  return (
    <section id="ApproachSection">
      <div className="approach_degign">
        <ApproachDesign />
      </div>
      <div className="approach_container">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <ul className="approach_container_points">
          {data.points.map((point, index) => {
            const Icon = point.icon;
            return (
              <li
                key={`${point.text}-${index}`}
                className="approach_container_points_item"
              >
                <Icon />
                <p>{point.text}</p>
              </li>
            );
          })}
        </ul>
        <Link href={data.cta.href}>{data.cta.text}</Link>
      </div>
    </section>
  );
};

export default ApproachSection;

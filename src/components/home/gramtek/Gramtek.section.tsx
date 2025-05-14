import {
  FadeInParagraph,
  FadeInTitleSmall,
  TitleSplitText,
} from "@/components/common/title/AnimatedTitles";
import "./style.scss";
import { gramtekData } from "./data.db";
import Supporters from "./supporters/Supporters";
import SupportOurMission from "./supportOurMission/SupportOurMission";
import DashboardFeatures from "./dashboardFeatures/DashboardFeatures";

const Gramtek = () => {
  return (
    <section id="Gramtek">
      <FadeInTitleSmall text={gramtekData.title} />
      <TitleSplitText text={gramtekData.subtitle} />
      <FadeInParagraph text={gramtekData.description} />
      <Supporters />
      <SupportOurMission />
      <DashboardFeatures />
    </section>
  );
};

export default Gramtek;

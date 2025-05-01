import "./style.scss";
import DistributionMockup from "./mockup/DistributionMockup";
import DistributionPackage from "./package/DistributionPackage";

const TITLE = {
  title: "Our Solution",
  subtitle: "Public Distribution Model",
};

const DistributionModelSection = () => {
  return (
    <>
      <div id="DistributionModelSection">
        <div className="title_container">
          <h1>{TITLE.title}</h1>
          <h2>{TITLE.subtitle}</h2>
        </div>
        <DistributionMockup />
        <DistributionPackage />
      </div>
    </>
  );
};

export default DistributionModelSection;

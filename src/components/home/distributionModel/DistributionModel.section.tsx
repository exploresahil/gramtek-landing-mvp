import "./style.scss";
import DistributionMockup from "./mockup/DistributionMockup";
import DistributionPackage from "./package/DistributionPackage";

const DistributionModelSection = () => {
  return (
    <>
      <div id="DistributionModelSection">
        <DistributionMockup />
        <DistributionPackage />
      </div>
    </>
  );
};

export default DistributionModelSection;

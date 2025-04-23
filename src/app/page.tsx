import ApproachSection from "@/components/home/approach/Approach.Section";
import DistributionModelSection from "@/components/home/distributionModel/DistributionModel.section";
import Hero from "@/components/home/hero/Hero.Section";
import Mission from "@/components/home/mission/Mission.Section";
import SuccessMapSection from "@/components/home/successMap/SuccessMap.section";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <Mission />
        <SuccessMapSection />
        <DistributionModelSection />
        <ApproachSection />
      </main>
    </ReactLenis>
  );
}

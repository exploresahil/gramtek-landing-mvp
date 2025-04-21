import DistributionModelSection from "@/components/home/distributionModel/DistributionModel.section";
import Hero from "@/components/home/hero/Hero.Section";
import Mission from "@/components/home/mission/Mission.Section";
import SuccessMapSection from "@/components/home/successMap/SuccessMap.section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      {/* <SuccessMapSection /> */}
      <DistributionModelSection />
    </main>
  );
}

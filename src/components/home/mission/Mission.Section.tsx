import MenuIcon from "@/components/icons/MenuIcon";
import "./style.scss";
import {
  CurrentDistributionIocon,
  EconomicImpactIcon,
  OurReachIcon,
  TotalBeneficiariesIcon,
} from "@/components/icons/MissionIcons";

//*---------↓ Mission Content ↓---------*//

const iconSize = 100; // Adjust the size as needed

const missionData = {
  title: "Our Mission",
  mainTitle: "Empowering Communities",
  subtitle:
    "At Gramtek, we are committed to providing sustainable solutions that address the critical issue of menstrual health and hygiene in rural India",

  cardsData: [
    {
      icon: <OurReachIcon />,
      title: "Our Reach",
      numbers: "210*",
      subtitle: "Villages",
    },
    {
      icon: <CurrentDistributionIocon />,
      title: "Current Distribution",
      numbers: "210*",
      subtitle: "Pads/month",
    },
    {
      icon: <EconomicImpactIcon />,
      title: "Economic Impact",
      numbers: "200",
      subtitle: "Women Employed",
    },
    {
      icon: <TotalBeneficiariesIcon />,
      title: "Total Beneficiaries",
      numbers: "1 lac*",
      subtitle: "Women",
    },
  ],
};

const Mission = () => {
  return (
    <section id="Mission">
      <h1>{missionData.title}</h1>
      <h2>{missionData.mainTitle}</h2>
      <h3>{missionData.subtitle}</h3>
      <div className="cards_container">
        {missionData.cardsData.map((card, index) => (
          <div className="card" key={`card-${card.title}-${index}`}>
            {card.icon}
            <h4>{card.title}</h4>
            <p>
              {card.numbers}
              <span>{card.subtitle}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;

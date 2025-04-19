import Link from "next/link";
import Nav from "./nav/Nav";
import "./style.scss";

//*---------↓ Header Content ↓---------*//

const headerData = {
  logo: "Gramtek",
  navData: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],
};

const buttonText = "Login";

const Header = () => {
  return (
    <header id="Header">
      <Link href="/" className="logo">
        {headerData.logo}
      </Link>
      <Nav navItems={headerData.navData} buttonText={buttonText} />
    </header>
  );
};

export default Header;

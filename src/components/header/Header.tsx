import Link from "next/link";
import Nav from "./nav/Nav";
import "./style.scss";
import { buttonText, headerData } from "./data.db";

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

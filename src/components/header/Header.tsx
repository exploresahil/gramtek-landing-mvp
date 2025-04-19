import Link from "next/link";
import Nav from "./nav/Nav";
import "./style.scss";

//*---------↓ Header Content ↓---------*//

const navItems = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

const buttonText = "Login";

const Header = () => {
  return (
    <header id="Header">
      <Link href="/" className="logo">
        Gramtek
      </Link>
      <Nav navItems={navItems} buttonText={buttonText} />
    </header>
  );
};

export default Header;

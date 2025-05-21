import "./style.scss";
import { footerData } from "./db";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="footer_top">
        {/* When socials will be created */}
        {/*
        <div className="footer_socials">
          {footerData.socials.map((social, index) => (
            <Link
              href={social.href}
              title={social.title}
              key={index}
              className="footer_social_icon"
            >
              {social.icon()}
            </Link>
          ))} 
        </div>
        */}
        <div className="footer_brand">
          <p>A PRODUCT OF</p>
          <p className="brand">{footerData.brand.name}</p>
          {/* When Brand website is available */}
          {/* <Link href={footerData.brand.href}>{footerData.brand.name}</Link> */}
        </div>

        {/* When footer nav will be created */}
        {/*
         <div className="footer_nav">
          {footerData.nav.map((nav, index) => (
            <Link href={nav.href} key={index}>
              {nav.title}
            </Link>
          ))} 
        </div>
        */}
      </div>
      <div className="footer_bottom">
        <p>{footerData.footer}</p>
      </div>
    </footer>
  );
};

export default Footer;

import * as React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";

export default function ComboBox() {
  return (
    <div>
      <SocialsContainer />
      <Logo />
    </div>
  );
}

const SocialsContainer = () => {
  return (
    <div className="SocialsContainer">
      <text style={{ textAlign: "start", fontWeight: "bold" }}>
        Follow our Socials!
      </text>
      <div style={{ height: 20 }} />
      <div className="SocialsCirclesContainer">
        <div className="SocialsCircle"></div>
        <div className="SocialsCircle"></div>
        <div className="SocialsCircle"></div>
      </div>
    </div>
  );
};

const Logo = () => {
  return <img src={logo} alt="Logo" />;
};

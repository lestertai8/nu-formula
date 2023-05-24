import * as React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";
import socials from "../assets/socials.png";

const CONDITIONS_TEXT =
  'Northwestern Formula Racing owns all rights to the intellectual property and material contained in this website, and all such rights are reserved. This website is provided "as is", with no guarantee of completeness, accuracy, or timeliness. Northwestern Formula Racing is permitted to revise these conditions at any time as it deems fit.';

const logo_scale = 0.5;

const subcontainer_style = {
  width: "350px",
  height: "250px",
};

const text_style = {
  position: "relative",
  padding: "40px",
  color: "white",
};

const heading_style = {
  display: "block",
  fontSize: "18px",
  textAlign: "left",
};

const para_style = {
  display: "block",
  position: "relative",
  wordWrap: "break-word",
  whiteSpace: "pre-wrap",
  fontSize: "14px",
  lineHeight: "1.5",
  textAlign: "justify",
};

export default function ComboBox() {
  return (
    <div style={text_style} className="FooterContainer">
      <SocialsContainer />
      <Logo />
      <Conditions />
    </div>
  );
}

const SOCIALS_SCALE = 0.3;

const SocialsContainer = () => {
  return (
    <div className="SocialsContainer" style={subcontainer_style}>
      <h1 style={heading_style}>Follow our Socials!</h1>
      <div style={{ height: 10 }} />
      <img
        src={socials}
        alt="Logo"
        height={256 * SOCIALS_SCALE}
        width={1014 * SOCIALS_SCALE}
      />
      {/* <div className="SocialsCirclesContainer">
        <div className="SocialsCircle"></div>
        <div className="SocialsCircle"></div>
        <div className="SocialsCircle"></div>
      </div> */}
    </div>
  );
};

const Logo = () => {
  return (
    <div style={subcontainer_style}>
      <img
        src={logo}
        alt="Logo"
        height={275 * logo_scale}
        width={564 * logo_scale}
      />
    </div>
  );
};

const Conditions = () => {
  return (
    <div className="ConditionsContainer" style={subcontainer_style}>
      <h1 style={heading_style}>Conditions</h1>
      <p1 style={para_style}>{CONDITIONS_TEXT}</p1>
    </div>
  );
};

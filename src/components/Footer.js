import * as React from "react";
import "../styles/Footer.css";

// Images
import logo from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

// Data
const DEFAULT_PROPS = {
  CONDITIONS_TEXT:
    'Northwestern Formula Racing owns all rights to the intellectual property and material contained in this website, and all such rights are reserved. This website is provided "as is", with no guarantee of completeness, accuracy, or timeliness. Northwestern Formula Racing is permitted to revise these conditions at any time as it deems fit.',
};

const CONFIG = {
  LOGO_SCALE: 0.5,
};

// Components
export default function ComboBox() {
  return (
    <div className="Container Text">
      <SocialsContainer />
      <Logo />
      <Conditions />
    </div>
  );
}

const SocialsContainer = () => {
  return (
    <div className="SocialsContainer Subcontainer">
      <h1 className="Heading">Follow our Socials!</h1>
      <div style={{ height: 10 }} />
      <div className="SocialsCirclesContainer">
        <img
          src={facebook}
          alt="Logo"
          onClick={() => alert("Clicked facebook")}
          className="SocialsIcon"
        />
        <img
          src={instagram}
          alt="Logo"
          onClick={() => alert("Clicked instagram")}
          className="SocialsIcon"
        />
        <img
          src={youtube}
          alt="Logo"
          onClick={() => alert("Clicked youtube")}
          className="SocialsIcon"
        />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="Subcontainer">
      <img
        src={logo}
        alt="Logo"
        height={275 * CONFIG.LOGO_SCALE}
        width={564 * CONFIG.LOGO_SCALE}
      />
    </div>
  );
};

const Conditions = () => {
  return (
    <div className="ConditionsContainer Subcontainer">
      <h1 className="Heading">Conditions</h1>
      <p1 className="Para">{DEFAULT_PROPS.CONDITIONS_TEXT}</p1>
    </div>
  );
};

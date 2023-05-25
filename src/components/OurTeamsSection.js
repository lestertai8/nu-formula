import React, { useState } from "react";
import Section from "./Section";
import VerticalSwitchBar from "./VerticalSwitchBar";
import "../styles/OurTeamsSection.css";

// Static Data
const AERODYNAMICS = {
  TEXT: "AERODYNAMICS: Something something about something teams. Lorem Ipsum. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  IMAGE: "aerodynamics_team.png",
  CAPTION: "Aerodynamics TEAM!",
};

const CHASSIS = {
  TEXT: "Chassis: Something something about something teams. Lorem Ipsum. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  IMAGE: "Chassis_team.png",
  CAPTION: "Chassis TEAM!",
};

const ELECTRONICS = {
  TEXT: "Electronics: Something something about something teams. Lorem Ipsum. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  IMAGE: "Electronics_team.png",
  CAPTION: "Electronics TEAM!",
};

const POWERTRAIN = {
  TEXT: "Powertrain: Something something about something teams. Lorem Ipsum. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  IMAGE: "Powertrain_team.png",
  CAPTION: "Powertrain TEAM!",
};

const SUSPENSION = {
  TEXT: "Suspension: Something something about something teams. Lorem Ipsum. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  IMAGE: "Suspension_team.png",
  CAPTION: "Suspension TEAM!",
};

export default function OurTeamsSection() {
  const [selected, setSelected] = useState("Aerodynamics");
  return (
    <Section title="OUR TEAMS">
      <div className="OurTeamsContainer">
        <div className="VerticalSwitchBarContainer">
          <VerticalSwitchBar selected={selected} setSelected={setSelected} />
        </div>
        {selected === "Aerodynamics" && (
          <TextImageCaption
            text={AERODYNAMICS.TEXT}
            image={AERODYNAMICS.IMAGE}
            caption={AERODYNAMICS.CAPTION}
          />
        )}
        {selected === "Chassis" && (
          <TextImageCaption
            text={CHASSIS.TEXT}
            image={CHASSIS.IMAGE}
            caption={CHASSIS.CAPTION}
          />
        )}
        {selected === "Electronics" && (
          <TextImageCaption
            text={ELECTRONICS.TEXT}
            image={ELECTRONICS.IMAGE}
            caption={ELECTRONICS.CAPTION}
          />
        )}
        {selected === "Powertrain" && (
          <TextImageCaption
            text={POWERTRAIN.TEXT}
            image={POWERTRAIN.IMAGE}
            caption={POWERTRAIN.CAPTION}
          />
        )}
        {selected === "Suspension" && (
          <TextImageCaption
            text={SUSPENSION.TEXT}
            image={SUSPENSION.IMAGE}
            caption={SUSPENSION.CAPTION}
          />
        )}
      </div>
    </Section>
  );
}

const TextImageCaption = ({ text, image, caption }) => {
  return (
    <div className="TextImageCaptionContainer">
      <div className="TeamDescriptionContainer">
        <text>{text}</text>
      </div>
      <div className="PhotoCaption">
        <div className="TeamPhoto">
          <text>{image}</text>
        </div>
        <text>{caption}</text>
      </div>
    </div>
  );
};

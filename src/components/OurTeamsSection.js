import React, { useState } from "react";
import aero from "../assets/teams/aerodynamics.jpeg"
import chassis from "../assets/teams/chassis.jpeg"
import elec from "../assets/teams/electronics.jpeg"
import pt from "../assets/teams/powertrain.jpeg"
import sus from "../assets/teams/suspension.jpeg"
import LightSection from "./LightSection";
import VerticalSwitchBar from "./VerticalSwitchBar";
import "../styles/OurTeamsSection.css";

// Static Data
const AERODYNAMICS = {
  TEXT: "The aerodynamics team, aero for short, specializes in the flow of air around the car as it drives. It’s our responsibility to design an aero kit which allows the vehicle to slice through the air and develops the downforce needed to press the wheels firmly into the track. With the aid of on-track testing and CFD, we optimize geometry for efficiency in both straight-line and curved travel. \n\nMaking these designs a reality can be challenging in a field as new as composites manufacturing, where educational resources are scarce. Consequently, aero members learn to devise imaginative manufacturing methods which cut time and weight without sacrificing functionality or aesthetics. These innovations enable us to produce an aero package that is both elegant and functional. \n\nThough style isn’t drive critical, our team knows the car’s appearance is its identity, so we work to create contours that everyone on NFR can be proud of.",
  IMAGE: "aerodynamics_team.png",
};

const CHASSIS = {
  TEXT: "The chassis subteam is tasked with the design, manufacturing, and assembly of the critical components responsible for integrating the different subsystems of the car, as well as interfacing them with the driver. Encompassing a broad range of majors from biomedical, mechanical, and environmental engineers to economics we apply our diverse backgrounds towards the new design challenges faced every year. \n\nAt Northwestern Formula Racing we as chassis balance our goals of optimizing mass and increasing the strength and fatigue resistance of our subsystems with ensuring that driver safety remains our top priority. Leveraging our extensive design and modeling software, every part we manufacture or purchase is the product of extensive research, testing, and review.",
  IMAGE: "Chassis_team.png",
};

const ELECTRONICS = {
  TEXT: "The Electronics subteam is responsible for the organization and reliability of engine electronics as well as for the electro-mechanical integration of vehicle systems. Composed of a diverse group of undergraduate and graduate students whose knowledge base spans electrical engineering, computer engineering, applied mathematics, and computer science, our subteam works to construct and improve upon systems from the previous year while accounting for time, budgetary and safety constraints. \n\nThrough a rigorous education practicum and with the invaluable time and energy of our members, the Electronics subteam aspires to continue increasing the reliability of powertrain electronics, such as more consistent engine control, increased Motec configurability and more stable CAN communications. In addition to engine electronics, we are also responsible for digital power distribution, consisting of switching, power control and voltage regulation. Lastly, we are always improving the organization, packaging, and construction of the wiring harness, now built to include a data acquisition system with telemetry capabilities so that we can accurately and quickly assess the state of the car through dynamic testing data.",
  IMAGE: "Electronics_team.png",
};

const POWERTRAIN = {
  TEXT: "The powertrain subteam is responsible for the design, construction, and management of all components that produce and transmit power to the wheels. The multitude of variables impacting our system’s performance lead to some of the most complex design challenges on NFR. We utilize a broad spectrum of engineering disciplines including electrical, mechanical, chemical and material sciences. We take pride in our diverse skill set and ability to work with high-performance engines and components, top of the line engine computers, and aerospace-grade composites. \n\nAt Northwestern Formula Racing, we strive create a custom powertrain that is as efficient as possible. Our engine and its accessories are mass-optimized in order to produce adequate power with the least amount of mass possible. To achieve this goal, we begin the design process by utilizing powerful, industry-leading simulation tools in order to outline the parameters and design targets of each component comprising the powertrain. Every part we select or produce has been scrutinized with both mass-efficiency and driver safety as paramount criteria. Bringing some of the most innovative solutions to NFR, we are passionate engineers and the die-hard car fans.",
  IMAGE: "Powertrain_team.png",
};

const SUSPENSION = {
  TEXT: "The suspension subsystem of the race car controls the forces on the tires as the car races around the track, maximizing our grip on the road to improve handling and to put power down on the ground. We also make sure the driver isn’t too uncomfortable. We take care of all the components between the frame and the tires, through design, manufacturing, and testing.",
  IMAGE: "Suspension_team.png",
};

export default function OurTeamsSection() {
  const [selected, setSelected] = useState("Aerodynamics");
  const getText = () => {
    switch (selected) {
      case "Aerodynamics":
        return AERODYNAMICS.TEXT;
      case "Chassis":
        return CHASSIS.TEXT;
      case "Electronics":
        return ELECTRONICS.TEXT;
      case "Powertrain":
        return POWERTRAIN.TEXT;
      case "Suspension":
        return SUSPENSION.TEXT;
    }
  };
  const getImageCaption = () => {
    switch (selected) {
      case "Aerodynamics":
        return (
          <img className="Photo" src= {aero} alt= "aerodynamics">
          </img>
        );
      case "Chassis":
        return (
          <img className="Photo" src= {chassis} alt= "chassis">
          </img>
        );
      case "Electronics":
        return (
          <img className="Photo" src= {elec} alt= "electronics">
          </img>
        );
      case "Powertrain":
        return (
          <img className="Photo" src= {pt} alt= "powertrain">
          </img>
        );
      case "Suspension":
        return (
          <img className="Photo" src= {sus} alt= "suspension">
          </img>
        );
    }
  };
  return (
    <LightSection title="Our Teams">
      <div className="OurTeamsContainer">
        <VerticalSwitchBar selected={selected} setSelected={setSelected} />
        <text className="Content">{getText()}</text>
        {getImageCaption()}
      </div>
    </LightSection>
  );
}

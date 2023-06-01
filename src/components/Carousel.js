import React from "react";
import "../styles/Carousel.css"
import DarkSection from "./DarkSection";
import Carousel from "react-material-ui-carousel";
import { Button } from "@mui/material";

import NFR08 from "../assets/cars/nfr08.jpeg"
import NFR11 from "../assets/cars/nfr11.jpeg"
import NFR12 from "../assets/cars/nfr12.jpeg"
import NFR13 from "../assets/cars/nfr13.jpeg"
import NFR14 from "../assets/cars/nfr14.jpeg"
import NFR15 from "../assets/cars/nfr15.jpeg"
import NFR16 from "../assets/cars/nfr16.jpeg"
import NFR17 from "../assets/cars/nfr17.jpeg"
import NFR18 from "../assets/cars/nfr18.jpeg"
import NFR19 from "../assets/cars/nfr19.jpeg"
import NFR20 from "../assets/cars/nfr20.jpeg"
import { DeselectRounded } from "@mui/icons-material";


export default function Example(props) {
  var items = [
    {
      name: "NFR20 & Beyond",
      description: "NFR20’s team has set out to continue iterating and improving on last year’s design, with the major goals of completing endurance and gaining many more driving hours throughout the year for testing, validation, and training. The year’s schedule has been adjusted to allow manufacturing to start and end earlier and have the car rolling early. In response to the COVID-19 pandemic in early 2020, physical manufacturing has been halted to ensure the well being of the team, and design has been shifted offsite and is continuing virtually. The team is very eager to continue its climb up the results ranks at 2020’s Michigan and California FSAE competitions.",
      img: NFR20
    },
    {
      name: "NFR19",
      description: "NFR19 iterated on NFR18’s designs and worked on improving its powertrain, suspension, and aerodynamic systems using the previous year’s data and dedicating more time to education and design in the fall. At competition, we got the highest placement in recent NFR history, sharply improving our static events and jumping 18 spots in ranking. Other accomplishments include gaining our first ever creativity points.",
      specs1: "Formula SAE Michigan 2019 Results:66th out of 108 teams overall",
      specs2: "Vehicle Specifications: Yamaha R6 engine, TIG welded 4130 steel space frame,  pull rod a double wishbone suspension, MoTeC M130, 5-speed electronically-controlled pneumatic shifter, Hoosier LC0 7.0×10 tires",
      img: NFR19
    },
    {
      name: "NFR18",
      description: "NFR18 saw a dramatic design overhaul. We pivoted to a new 4-cylinder Yamaha R6 engine for an increase in power, requiring system-level alterations throughout the car. The most dramatic changes were made to the chassis, powertrain, and electronics subsystems.",
      specs2: "Vehicle Specifications: Yamaha R6 engine, TIG welded 4130 steel space framePull rod actuated dual A-arm suspension, MoTeC M400 ECU5-speed electronically-controlled pneumatic shifter, Hoosier LC0 7.0×10 tires",
      specs1: "Formula SAE Michigan 2018 results: 85th out of 114 teams overall",
      img: NFR18
    },
    {
      name: "NFR17",
      description: "The team for NFR17 initiated a redesign of our electronic systems, building a fully removable electronic harness. Its powertrain system had large power gains due to new designs for its intake and exhaust. Overall, the team was able to reduce the weight of the car and lower its center of gravity.",
      specs1: "Formula SAE Michigan 2017 results: 91st out of 109 teams overall",
      specs2: "aVehicle Specifications: Honda CBR500R engine TIG welded 4130 steel space frame Pull rod actuated dual A-arm suspension MoTeC M400 ECU 5-speed electronically-controlled pneumatic shifter Hoosier LC0 7.0×10 tires",
      img: NFR17
    },
    {
      name: "NFR16",
      description: "NFR16 was built with one goal in mind: to finish the endurance race. In the past years, the team never even made it to the start line. The team made changes in dropping down to 10-inch wheels giving the suspension team a more aggressive build cycle. After analysis, the team also decided to include an aero package on the car for the first time. This was also the first year the team decided to compete in FSAE West which took place in Lincoln, Nebraska. NFR16 was the first car to complete endurance and did it successfully at both competitions.",
      specs1: "Formula SAE Michigan 2016 results: 53rd out of 132 teams overall 20th in business presentation 7th in fuel efficiency; Formula SAE Lincoln 2016 results: 15th out of 102 teams overall 20th in business presentation 4th in fuel efficiency",
      specs2: "Vehicle Specifications: Honda CBR500R engine TIG welded 4130 steel space frame Pull rod actuated dual A-arm suspension MoTeC M400 ECU 5-speed electronically-controlled pneumatic shifter Hoosier LC0 7.0×10 tires",
      img: NFR16
    },
    {
      name: "NFR15",
      description: "Built around the lightest, stiffest chassis in Northwestern Formula Racing’s history. This year, the team upgraded from a one-cylinder engine to a larger, more powerful, Honda CBR500R engine. On this car, the team had more structural composites than any previous car and radically redesigned electronics, including fully electric shifting. This year, the team was fully equipped to finish the endurance race for the first time, but there were electrical issues that wouldn’t allow the car to start.",
      specs1: "Formula SAE Michigan 2015 results: 71 out of 134 teams overall 1st in pushbar competition",
      specs2: "Vehicle Specifications: Honda CBR500R engine TIG welded 4130 steel space frame Pull rod actuated dual A-arm suspension MoTeC M400 ECU 5-speed electronically-controlled pneumatic shifter Hoosier R25B 7.0×13 tires",
      img: NFR15
    },
    {
      name: "NFR14",
      description: "Building off of the completely overhauled design of the previous year’s car, NFR14 was the lightest, fastest car the team had ever designed and built. This year saw the reintroduction of machined aluminum uprights, as well as substantial improvements to the custom aluminum hubs, lightweight wheel centers, pneumatic shifting system, and structural composites. Although a drivetrain issue prevented NFR14 from competing at Formula SAE Michigan, the substantial improvements of this new car were confirmed in post-season testing.",
      specs1: "",
      specs2: "Vehicle Specifications: Suzuki LT-R450 engine TIG welded 4130 steel space frame Pull rod actuated dual A-arm suspension MoTeC M48 ECU 5-speed electronically-controlled pneumatic shifter Hoosier dry tire 43163",
      img: NFR14
    },
    {
      name: "NFR13",
      description: "Northwestern Formula Racing began 2013 with an experienced team, and decided to push the design envelope. For this car, the team redesigned every major component including pneumatic shifting, reclined driving position, lightweight wheel centers, custom hubs, a rebuilt engine, and a structural carbon fiber floor. All this innovation resulted in an impressive car from a design standpoint, but ultimately did not allow for adequate testing time.",
      specs1: "Formula SAE Michigan 2013 results 87th out of 124 teams overall",
      specs2: "",
      img: NFR13
    },
    {
      name: "NFR12",
      description: "This was the first Northwestern Formula Racing car to be completed in a one-year cycle. It was designed in Fall 2011 and manufactured Winter and Spring 2012. The car showcased some notable engineering improvements with full carbon fiber bodywork and improved driving dynamics. Simplicity was key, as the team wanted to prove that NFR could compete with a new car every year.",
      specs1: "80th out of 118 teams overall 70 points awarded in design",
      specs2: "",
      img: NFR12
    },
    {
      name: "NFR11",
      description: "The team went through a restructuring in 2011 with an emphasis on team building before competing again in 2011. The team grew to 25 active members with defined subteams for composites, engine, frame, and suspension. The theme guiding the 2011 design was simplicity and efficiency, allowing members to know the car from the inside out.",
      specs1: "Formula SAE Michigan 2011 results: 65th out of 121 teams overall 80 points awarded in design",
      specs2: "",
      img: NFR11
    },
    {
      name: "NFR08",
      description: "The 2008 design focus was on a simple reliable package that was within the team’s capability to manufacture, assemble, and maintain. The result was a car that ran throughout the three days of competition without mechanical difficulty and passed technical inspection on the first attempt, an extremely rare achievement for a first-year vehicle. The competition rules allow a maximum displacement of 610cc, and the standard engine choice is a 600cc 4-cylinder motorcycle engine. A smaller, lighter, and more compact 450cc single-cylinder engine was selected for the direct weight savings and the additional weight reduction from the smaller frame required to carry it. The result was a compact, nimble package. With further development, it had the potential to outmaneuver the bulkier vehicles designed for maximum power.",
      specs1: "Formula SAE Michigan 2008 Highlights 2nd place Rookie Team 37th out of 120 teams overall in Design Event",
      specs2: "Vehicle Specifications: Suzuki LT-R450 engine TIG welded 4130 chrome-moly space frame Non-parallel, double wishbone suspension Inboard-mounted springs and dampers Custom-tuned MegaSquirt ECU 5 speed sequential manual transmission Limited slip differential Goodyear D2692 20.0×7.0×13.0 racing slicks",
      img: NFR08
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <DarkSection>
      <h2 style ={{color: "#FDFCFF", margin: "0px"}}>{props.item.name}</h2>
      <img className="CaraImg" src = {props.item.img}></img>
      <Description desc={props.item.description} specs1={props.item.specs1} specs2={props.item.specs2}/>
    </DarkSection>
  );
}

function Description({desc, specs1, specs2}) {
  return (
    <div className = "DesCard"> 
      <p className = "DesText">{desc} </p>
      <div className = "SpecsContainer">
      <p className = "Specs"> {specs1} </p>
      <p className = "Specs"> {specs2} </p>
      </div>
    </div>
  )
}

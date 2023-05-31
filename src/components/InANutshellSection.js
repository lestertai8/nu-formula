import React, { useState } from "react";
import LightSection from "./LightSection";
import Button from "./Button";
import "../styles/InANutshellSection.css";
import nutshell from "../assets/nutshell.png"

const DATA = {
  BUTTON_TEXT: "Read More >",
};

export default function InANutshellSection() {
  return (
    <LightSection title="In A Nutshell">
      <div className="ImgText">
        <ImagesContainer src = {nutshell}/>
        <TextAndLink />
      </div>
    </LightSection>
  );
}

const ImagesContainer = () => {
  return <img className="ImagePlaceholder" src = {nutshell}></img>;
};

const TextAndLink = () => {
  return (
    <div className="TextAndLink">
      <text className="TextContent">
        Our team of more than 60 undergraduate and graduate students come from
        diverse backgrounds and studies across our McCormick School of
        Engineering as well as the broader Northwestern community. <br></br>
        <br></br>The design and construction of our car is an aggressive
        practicum, allowing students to take their coursework into application
        and sharpen their skills. Our work routinely runs ahead of classes,
        encouraging freshmen to acquire knowledge of material covered in
        senior-level coursework, while offering upperclassmen the opportunity to
        mentor and engage team members.<br></br>
        <br></br> Our members pursue a wide range of majors, and many see their
        time on the team translate to expanded expertise beyond their usual
        coursework. We have taught economists how to weld, literary scholars how
        to solder, and industrial engineers how to code. With an emphasis on
        inclusion through education, we value diligence and curiosity in experts
        and novices alike.
      </text>
      <Button title={DATA.BUTTON_TEXT} />
    </div>
  );
};

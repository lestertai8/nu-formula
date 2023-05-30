import React, { useState } from "react";
import Section from "./Section";
import "../styles/InANutshellSection.css";

const DATA = {
  TEXT: "Formula NU is so cool. Lorem Ipsum. Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
  LINK_TEXT: "Read More >",
};

export default function InANutshellSection() {
  return (
    <Section title="IN A NUTSHELL">
      <div className="NutshellSectionContainer">
        <ImagesContainer />
        <TextAndLink />
      </div>
    </Section>
  );
}

const ImagesContainer = () => {
  return <div className="ImagePlaceholder"></div>;
};

const TextAndLink = () => {
  return (
    <div className="TextAndLink">
      <text>{DATA.TEXT}</text>
      <a>{DATA.LINK_TEXT}</a>
    </div>
  );
};

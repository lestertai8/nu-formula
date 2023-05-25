import React, { useState } from "react";
import Section from "./Section";
import "../styles/InANutshellSection.css";

export default function InANutshellSection() {
  return (
    <Section title="IN A NUTSHELL">
      <ImagesContainer />
    </Section>
  );
}

const ImagesContainer = () => {
  return (
    <div className="ImagesTable">
      <div className="ImagesRow">
        <div>
          <text>Image 1</text>
        </div>
        <div>
          <text>Image 2</text>
        </div>
      </div>
      <div className="ImagesRow">
        <div>
          <text>Image 3</text>
        </div>
        <div>
          <text>Image 4</text>
        </div>
      </div>
    </div>
  );
};

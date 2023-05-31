import React from "react";
import DarkSection from "./DarkSection";
import "../styles/HomepageHeaderSection.css";

export default function HomepageHeaderSection() {
  return (
    <DarkSection>
      <div className="HomepageHeaderContainer">
        <text>
          <text className="HomepageHeaderTitle Purple">NU </text>
          <text className="HomepageHeaderTitle White">FSAE</text>
        </text>
      </div>
    </DarkSection>
  );
}

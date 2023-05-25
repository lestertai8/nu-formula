import React from "react";
import "../styles/Section.css";

export default function Section({ title, children }) {
  return (
    <div>
      <h1 className="SectionHeader">{title}</h1>
      {children}
    </div>
  );
}

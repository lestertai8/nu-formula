import "../styles/DarkSection.css";
import React from 'react'

export default function DarkSection({ title, children }) {
  return <div className="DarkSectionContainer">{children}</div>;
}

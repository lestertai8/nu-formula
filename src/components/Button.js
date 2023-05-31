import React from "react";
import "../styles/Button.css";

export default function Button({ title, link }) {
  return (
    <div
      onClick={() => {
        try {
          window.location(link);
        } catch (e) {
          console.log(`Error in Button component: ${e}`);
        }
      }}
      className="Button"
    >
      <text className="ButtonText">{title}</text>
    </div>
  );
}

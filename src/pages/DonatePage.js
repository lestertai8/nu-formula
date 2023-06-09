import React from "react";
import DonateInstructions from "../components/DonateInstructions";
import CustomHeader from "../components/CustomHeader";
import temp_img from "../assets/donate/1.png"
import step_2 from "../assets/donate/2.png"
import step_3 from "../assets/donate/3.png"
import step_4 from "../assets/donate/4.png"
import step_5 from "../assets/donate/5.png"
import img from "../assets/fsae.jpeg";

function DonatePage() {
  const bg_style = {
    background: "#141316",
  };
  const row_style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "60px",
  };
  const container_style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "80px 174px",
    gap: "60px",
  };
  const text_style = {
    fontFamily: "Helvetica",
    fontWeight: "800",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#FDFCFF",
  };
  return (
    <div style={bg_style}>
      <CustomHeader name="Donate" img={img}></CustomHeader>
      <div style={container_style}>
        <p1 style={text_style}>
          Please contact us at{" "}
          <a href="nfr@u.northwestern.edu">nfr@u.northwestern.edu</a> if you
          have any questions!
        </p1>
        <div style={row_style}>
          <DonateInstructions
            number="1"
            instructions=<p>
              {" "}
              Go to{" "}
              <a href="https://www.northwestern.edu/giving/">
                https://www.northwestern.edu/giving/
              </a>
            </p>
            img={temp_img}
          ></DonateInstructions>
          <DonateInstructions
            number="2"
            instructions="Click on the purple “Make A Gift Now” button in the middle of the page"
            img={step_2}
          ></DonateInstructions>
        </div>
        <div style={row_style}>
          <DonateInstructions
            number="3"
            instructions="Enter the donation amount and click on “Search School and Program Funds”"
            img={step_3}
          ></DonateInstructions>
          <DonateInstructions
            number="4"
            instructions="Search and select “NU Motorsports”"
            img={step_4}
          ></DonateInstructions>
        </div>
        <div style={row_style}>
          <DonateInstructions
            number="5"
            instructions="Continue with the donation process as prompted"
            img={step_5}
          ></DonateInstructions>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;

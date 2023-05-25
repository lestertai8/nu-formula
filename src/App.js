import "./App.css";
import "./components/CustomHeader.js";
import CustomHeader from "./components/CustomHeader";
import {
  AboutTeamContainerLeft,
  AboutTeamContainerRight,
} from "./components/AboutTeamContainer";
import img from "./fsae.jpeg";

import Footer from "./components/Footer.js";

function App() {
  const bg_style = {
    background: "lightgrey",
  };
  const left_style = {
    display: "flex",
    justifyContent: "left",
  };
  const right_style = {
    display: "flex",
    justifyContent: "right",
  };
  return (
    <div style={bg_style}>
      <CustomHeader name="About FSAE" img={img}></CustomHeader>
      <div style={left_style}>
        <AboutTeamContainerLeft
          heading="Formula SAE"
          text={
            <p>
              Formula SAE (FSAE) is an intercollegiate engineering design
              competition organized by the Society of Automotive Engineers
              (SAE), where student teams design, build, and race formula-style
              cars. FSAE began in the USA in 1978, and now includes hundreds of
              international teams that compete in eight competitions around the
              world.
              <br></br>
              <br></br>The FSAE series is internationally regarded as one of the
              most rigorous collegiate design competitions. Each year, teams
              spend 8 to 12 months preparing for competition.
              <br></br>
              <br></br>The concept of the competition is for students to design,
              build, and race a prototype formula-style vehicle. The prototype
              is marketed towards the non-professional, weekend autocross racer.
              It must be high-performance, low cost, easy to maintain, and
              suitable for manufacture at 1000 units per year. Students manage
              all aspects of the project like a small business, from the
              technical design to the management of an interdisciplinary team.
            </p>
          }
          img={img}
        ></AboutTeamContainerLeft>
      </div>
      <div style={right_style}>
        <AboutTeamContainerRight
          heading="Engineering"
          text=<p>
            Teams have overwhelming freedom in the design of their cars. This is
            evident in the variety and ingenuity presented at each competition.
            Technical restrictions only exist to ensure safety, and do not limit
            creativity. Students engage a panel of industry judges to defend
            their design decisions with supporting analysis. Student drivers
            compete against the clock in a series of driving events to
            demonstrate real-world performance of their vehicles.{" "}
          </p>
          img={img}
        ></AboutTeamContainerRight>
      </div>
      <div style={left_style}>
        <AboutTeamContainerLeft
          heading="Business and Marketing"
          text=<p>
            Building a racing car is not all engineering. Complex projects
            require strong leaders and a cooperative environment to succeed. In
            addition to managing the project, students must present a business
            case to a prospective manufacturer as well as a detailed
            manufacturing and cost analysis, showing complete understanding of
            what it takes to bring a product to market.{" "}
          </p>
          img={img}
        ></AboutTeamContainerLeft>
      </div>
      <div style={right_style}>
        <AboutTeamContainerRight
          heading="Perspective"
          text=<p>
            Teams FSAE converts classroom knowledge to real world experience.
            Involvement in the complete design process is a unique educational
            opportunity.
          </p>
          img={img}
        ></AboutTeamContainerRight>
      </div>
      <Footer />
    </div>
  );
}

export default App;

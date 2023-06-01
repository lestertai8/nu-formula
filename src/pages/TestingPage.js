import React from "react";
import HomepageHeaderSection from "../components/HomepageHeaderSection";
import InANutshellSection from "../components/InANutshellSection";
import OurTeamsSection from "../components/OurTeamsSection";
import Carousel from "../components/Carousel";

function TestingPage() {
  return (
    <div>
      <HomepageHeaderSection />
      <InANutshellSection />
      <Carousel />
      <OurTeamsSection />
    </div>
  );
}

export default TestingPage;

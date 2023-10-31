"use client";
import React from 'react';
import IntroSection from "./sections/intro/IntroSection";
import ProjectSection from "./sections/project/ProjectSection";
import JourneySection from "./sections/journey/JourneySection";
import Divider from "@mui/material/Divider";

import './home.css';

const Home = () => {
  const homeContainerStyle = {
    backgroundColor: "black",
  }
  const introStyle = {
    paddingTop: 10,
    justifyContent: "center",
  }
  const divider = <Divider style={{ paddingTop: 100, paddingBottom: 100 }} />;
  return (
    <div className="home-container" style={homeContainerStyle}>
      <div className="scrolling-container">
        <IntroSection className="intro-section-container" style={introStyle} />
        {divider}
        <ProjectSection />
        {divider}
        <JourneySection />
        {divider}
        {/*<InterestSection/>*/}



      </div>
    </div>);

};



export default Home;


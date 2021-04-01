import React from "react";
import HeroSection from "../HeroSection/hero-section.component";
import AboutSection from "../AboutSection/about-section.component";
import ContactSection from "../ContactSection/constact-section.component";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;

import React, { useLayoutEffect, useRef } from "react";
import HeroSection from "../HeroSection/hero-section.component";
import AboutSection from "../AboutSection/about-section.component";
import ContactSection from "../ContactSection/contact-section.component";

const HomePage = () => {
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const scrollHandler = () => {
    scrollRef.current.scrollIntoView();
  };

  return (
    <div>
      <HeroSection scrollHandler={scrollHandler} />
      <AboutSection scrollRef={scrollRef} />
      <ContactSection />
    </div>
  );
};

export default HomePage;

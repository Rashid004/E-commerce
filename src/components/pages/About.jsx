/** @format */

import Footer from "./Footer";
import HeroSection from "./Home/HeroSection";
import ServiceSection from "./Home/ServiceSection";
import Testomonial from "./Home/Testomonial";
import PageNav from "./PageNav";

function About() {
  return (
    <div>
      <PageNav />
      <HeroSection />
      <ServiceSection />
      <Testomonial />
      <Footer />
    </div>
  );
}

export default About;

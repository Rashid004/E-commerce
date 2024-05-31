/** @format */

import Footer from "./Footer";
import HeroSection from "./Home/HeroSection";
import ServiceSection from "./Home/ServiceSection";
import Testomina from "./Home/Testomina";
import PageNav from "./PageNav";

function About() {
  return (
    <div>
      <PageNav />
      <HeroSection />
      <ServiceSection />
      <Testomina />
      <Footer />
    </div>
  );
}

export default About;

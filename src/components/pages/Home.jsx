/** @format */

import HeroSection from "./Home/HeroSection";
import PageNav from "./PageNav";
import ServiceSection from "./Home/ServiceSection";
import Subscribe from "./Home/NewsLetter";
import Company from "./Home/Company";
import Footer from "./Footer";
import ProductFeature from "./Home/ProductFeature";

function Home() {
  return (
    <div>
      <PageNav />
      <HeroSection />
      {/* <ServiceSection /> */}
      <ProductFeature />
      <Subscribe />
      <Company />
      <Footer />
    </div>
  );
}

export default Home;
{
}

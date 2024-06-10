/** @format */

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, x: -500 },
      { opacity: 1, x: 0, duration: 2 }
    );
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: 0, duration: 2, delay: 0.5 }
    );
    gsap.fromTo(
      button1Ref.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, delay: 1 }
    );
    gsap.fromTo(
      button2Ref.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, delay: 1.2 }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, delay: 1.5 }
    );
  }, []);

  return (
    <div className="h-[90vh] bg-sky-50 text-center md:text-left mb-3 sm:mb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center md:text-left ">
        <div className="space-y-6 mt-12 sm:mt-24 ">
          <h1
            ref={headingRef}
            className="text-[30px] sm:text-[40px] font-semibold leading-tight md:text-[44px] lg:text-[52px] lg:font-bold"
          >
            Sale 20% Off On Everything
          </h1>
          <p
            ref={paragraphRef}
            className="text-sm sm:text-base md:text-xl leading-relaxed"
          >
            Explicabo esse amet tempora quibusdam laudantium, laborum eaque
            magnam fugiat hic? Esse dicta aliquid error repudiandae earum
            suscipit fugiat molestias, veniam, vel architecto veritatis delectus
            repellat modi impedit sequi.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center justify-center md:justify-start ">
            <Link
              ref={button1Ref}
              to="/product"
              className="btn bg-indigo-600 text-white py-3 px-8 rounded-md hover:bg-indigo-700 w-full sm:w-auto font-medium"
            >
              Shop Now
            </Link>
            <Link
              ref={button2Ref}
              to="#how"
              className="btn border border-indigo-600 text-indigo-600 hover:bg-indigo-200 py-3 px-6 rounded-[4px] w-full sm:w-auto"
            >
              Learn more &darr;
            </Link>
          </div>
        </div>
        <div
          ref={imageRef}
          className="flex items-center justify-center md:justify-end mt-8 md:mt-0"
        >
          <img
            src="/images/Hero1.jpg"
            className="  w-[80%] sm:w-[75%] rounded-[2px] shadow-lg md:w-full"
            alt="Woman enjoying Shopping"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

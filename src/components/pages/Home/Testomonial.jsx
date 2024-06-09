/** @format */
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Testomonial() {
  return (
    <div className="relative">
      <Swiper
        loop={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="py-4 sm:pb-32 bg-gray-50">
            <h2 className="text-center text-[32px] font-medium sm:font-semibold md:font-bold sm:text-[38px] md:text-[44px] mb-4">
              Customers Testimonial
              <div className="mx-auto w-12 h-1 bg-gray-800 rounded-sm mt-2"></div>
            </h2>
            <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
              <div className="mt-6">
                <div className="flex items-center justify-center flex-col">
                  <img
                    src="/images/user1.jpg"
                    alt="Customer"
                    className="w-36 h-36 rounded-full shadow-lg"
                  />
                  <h3 className="font-bold sm:font-semibold text-sm sm:text-lg md:text-xl my-2">
                    Anna de Armas
                  </h3>
                  <span className="text-gray-500 font-bold">Customer</span>
                  <p className="text-center leading-tight text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus id quaerat, minima incidunt harum illum iusto sed,
                    beatae et reiciendis dolores quibusdam soluta atque ea
                    consequuntur quas. Magni, quaerat labore!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-4 sm:pb-32 bg-gray-50">
            <h2 className="text-center text-[32px] font-medium sm:font-semibold md:font-bold sm:text-[38px] md:text-[44px] mb-4">
              Customers Testimonial
              <div className="mx-auto w-12 h-1 bg-gray-800 rounded-sm mt-2"></div>
            </h2>
            <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
              <div className="mt-6">
                <div className="flex items-center justify-center flex-col">
                  <img
                    src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                    alt="Customer"
                    className="w-36 h-36 rounded-full shadow-lg"
                  />
                  <h3 className="font-bold sm:font-semibold text-sm sm:text-lg md:text-xl my-2">
                    Nicole k.
                  </h3>
                  <span className="text-gray-500 font-bold">Customer</span>
                  <p className="text-center leading-tight text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus id quaerat, minima incidunt harum illum iusto sed,
                    beatae et reiciendis dolores quibusdam soluta atque ea
                    consequuntur quas. Magni, quaerat labore!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-4 sm:pb-32 bg-gray-50">
            <h2 className="text-center text-[32px] font-medium sm:font-semibold md:font-bold sm:text-[38px] md:text-[44px] mb-4">
              Customers Testimonial
              <div className="mx-auto w-12 h-1 bg-gray-800 rounded-sm mt-2"></div>
            </h2>
            <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
              <div className="mt-6">
                <div className="flex items-center justify-center flex-col">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
                    alt="Customer"
                    className="w-36 h-36 rounded-full shadow-lg"
                  />
                  <h3 className="font-bold sm:font-semibold text-sm sm:text-lg md:text-xl my-2">
                    Migeil
                  </h3>
                  <span className="text-gray-500 font-bold">Customer</span>
                  <p className="text-center leading-tight text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Delectus id quaerat, minima incidunt harum illum iusto sed,
                    beatae et reiciendis dolores quibusdam soluta atque ea
                    consequuntur quas. Magni, quaerat labore!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 z-10">
        <FaArrowLeft />
      </button>
      <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 z-10">
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Testomonial;

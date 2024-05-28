/** @format */
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
function ServiceSection() {
  return (
    <>
      <div className="mt-20 mb-4 md:mb-10 md:mt-6">
        <div className="text-center my-4 ">
          <h2 className="text-[32px] font-semibold leading-tight space-y-6 md:font-bold md:text-[44px] ">
            Our Service
            <div className="mx-auto w-1/12 h-1 bg-red-600 rounded-sm "></div>
          </h2>
        </div>
        <div className=" flex items-center justify-center gap-4 md:gap-14 px-4 flex-col md:flex-row ">
          <div className="flex items-center flex-col  px-4 py-[14px] md:py-[24px]  rounded-[4px] text-center md:px-6">
            <LiaShippingFastSolid size="4em" />
            <h2 className="text-[26px] font-semibold md:font-bold mt-2 md:text-[32px]">
              <span>Free Delivery</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-tight mt-2 md:text-[16px]">
              When order over the $75+
              <br />
              Lorem ipsum dolor sit
            </p>
          </div>

          <div className="flex items-center flex-col  px-4 py-[14px] md:py-[24px]  rounded-[4px] text-center md:px-6">
            <RiRefund2Line size="4em" />
            <h2 className="text-[26px] font-semibold mt-2 md:text-[32px] md:font-bold">
              <span>Free Shipping</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-tight mt-2 md:text-[16px]">
              When order Any Product
              <br />
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className="flex items-center flex-col  px-4 py-[14px] md:py-[24px]  rounded-[4px] text-center md:px-6">
            <RiSecurePaymentFill size="4em" />
            <h2 className="text-[26px] font-semibold mt-2 md:text-[32px] md:font-bold">
              <span>Secure Payment</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-tight mt-2 md:text-[16px]">
              100% guarantee money back
              <br />
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;

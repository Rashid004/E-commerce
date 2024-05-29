/** @format */
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbReplace } from "react-icons/tb";

function ServiceSection() {
  return (
    <>
      <div className="mx-auto mt-20  sm:mb-6 sm:mt-4 md:mb-10 md:mt-2 h-full pb-24">
        <div className="text-center my-4 sm">
          <h2 className="text-[32px] font-medium sm:font-semibold leading-tight space-y-6 md:font-bold sm:text-[38px] md:text-[44px] ">
            Our Service
            <div className="mx-auto w-1/12 h-1 bg-red-600 rounded-sm "></div>
          </h2>
        </div>
        <div className="flex items-center justify-center gap-4 sm:gap-10 md:gap-14 px-4 flex-col md:flex-row ">
          <div className="flex items-center flex-col  px-4 py-[14px] md:py-[24px]  rounded-[4px] text-center md:px-6">
            <LiaShippingFastSolid size="4em" color="red" />
            <h2 className="text-[18px] sm:text-[26px] font-semibold md:font-bold mt-2 md:text-[32px]">
              <span>Free Delivery</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-tight mt-2 md:text-[16px]">
              When order over the $75+
              <br />
              Lorem ipsum dolor sit
            </p>
          </div>

          <div className="flex items-center flex-col  px-4 py-[14px] md:py-[24px]  rounded-[4px] text-center md:px-6">
            <RiRefund2Line size="4em" color="red" />
            <h2 className="text-[18px] sm:text-[26px] font-semibold mt-2 md:text-[32px] md:font-bold">
              <span>Refund 100%</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-tight mt-2 md:text-[16px]">
              When order Any Product
              <br />
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className="flex items-center flex-col  px-4 py-[14px] md:py-[24px]  rounded-[4px] text-center md:px-6">
            <RiSecurePaymentFill size="4em" color="red" />
            <h2 className="text-[18px] sm:text-[26px] font-semibold mt-2 md:text-[32px] md:font-bold">
              <span>Secure Payment</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-tight mt-2 md:text-[16px]">
              100% guarantee money back
              <br />
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className="flex items-center flex-col  px-4 py-[14px] md:py-[24px]  rounded-[4px] text-center md:px-6">
            <TbReplace size="4em" color="red" />
            <h2 className="text-[18px] sm:text-[26px] font-semibold mt-2 md:text-[32px] md:font-bold">
              <span>7 days replacement</span>
            </h2>
            <p className="text-[12px] text-gray-500 leading-tight mt-2 md:text-[16px]">
              guarantee Replacement back
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

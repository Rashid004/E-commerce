/** @format */

import Footer from "./Footer";
import PageNav from "./PageNav";

function Contact() {
  return (
    <>
      <PageNav />
      <div className="py-4 sm:pb-32">
        <h2 className="text-center text-[32px] font-medium sm:font-semibold md:font-bold sm:text-[38px] md:text-[44px] mb-4">
          Contact Us
          <div className="mx-auto w-1/12 h-1 bg-red-600 rounded-sm mt-2"></div>
        </h2>
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <p className="text-center text-gray-600 leading-tight mb-8">
            We'd love to hear from you! Here's how you can reach us...
          </p>
          <div className="w-full h-64 sm:h-80 md:h-96">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086719395181!2d-122.4194150846811!3d37.77492927975842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c631f7961%3A0x4a0c2b8d6f212cd9!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1603914379382!5m2!1sen!2sus"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

        <form action="submit" className="bg-sky-200 mt-10">
          <div className="flex items-center flex-col justify-center gap-4  py-4">
            <input
              className="block w-2/3 md:w-1/3 lg:h-1/4 py-2 md:py-3 px-2 rounded-sm border-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 "
              type="text"
              placeholder="Full Name"
            />
            <input
              className="block w-2/3 md:w-1/3 lg:h-1/4 py-2 md:py-3 px-2 rounded-sm border-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 "
              type="text"
              placeholder="Last Name"
            />
            <input
              className="block w-2/3 md:w-1/3 lg:h-1/4 py-2 md:py-3 px-2 rounded-sm border-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 "
              type="email"
              placeholder="Email"
            />

            <textarea
              id="message"
              name="message"
              placeholder="Enter Your Message"
              className="w-2/3 md:w-1/3 lg:h-1/4 h-28 md:h-32 py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-700"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

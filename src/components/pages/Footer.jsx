/** @format */

import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 pt-6">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              to="/"
              className="flex items-center text-3xl font-bold text-white"
            >
              <span>ShopEasy</span>
            </Link>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Address
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  623 Harrison St., 2nd Floor, San Francisco, CA 94107
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#" className="hover:underline">
                  415-201-6370 hello@ShopEasy.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Company
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    About ShopEasy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    For Buisness
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <Link className="hover:underline">ShopEasy</Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:underline">Help Center</Link>
                </li>
                <li>
                  <Link className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Account
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Create account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Sign in
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    iOS App
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Android App
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023
            <Link to="/" className="hover:underline">
              ShopEasy
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link className="text-gray-500 hover:text-white">
              <FaFacebookSquare size="1.5em" />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link className="text-gray-500 hover:text-white  ms-5">
              <FaDiscord size="1.5em" />
              <span className="sr-only">Discord community</span>
            </Link>
            <Link className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaSquareXTwitter size="1.5em" />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link className="text-gray-500 hover:text-white ms-5">
              <FaGithubSquare size="1.5em" />
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

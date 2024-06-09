/** @format */

import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 py-8 lg:py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <Link
              to="/"
              className="flex items-center text-3xl font-bold text-white"
            >
              <span>ShopEasy</span>
            </Link>
            <p className="text-gray-500 mt-4">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p className="text-gray-500">415-201-6370 hello@ShopEasy.com</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white uppercase mb-4">
              Company
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  About ShopEasy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  For Business
                </Link>
              </li>
              <li className="mb-2">
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
            <h2 className="text-sm font-semibold text-white uppercase mb-4">
              Resources
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  ShopEasy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white uppercase mb-4">
              Account
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Create Account
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="hover:underline">
                  Sign In
                </Link>
              </li>
              <li className="mb-2">
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
        <hr className="my-6 border-gray-200" />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            © 2023 ShopEasy. All Rights Reserved.
          </span>
          <div className="flex space-x-4">
            <Link to="#" className="text-gray-500 hover:text-white">
              <FaFacebookSquare size="1.5em" />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white">
              <FaDiscord size="1.5em" />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white">
              <FaTwitterSquare size="1.5em" />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white">
              <FaGithubSquare size="1.5em" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

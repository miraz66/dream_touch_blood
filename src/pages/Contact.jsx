import Header from "../components/Headers";
import Footer from "../components/Footer";
import AllPageScreen from "../components/AllPageScreen";
import CommunicateForm from "../components/CommunicateForm";
import CommunicationMap from "../components/CommunicationMap";

import Animation from "../utils/Animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  Animation();

  return (
    <>
      {/* ----header section---- */}
      <Header />

      {/* ----About Home---- */}
      <AllPageScreen name="Contact us" />

      {/* ----Contact Information----- */}
      <div className="max-w-7xl mx-3 lg:mx-5 2xl:mx-auto py-20 md:py-32">
        <h3 className="text-4xl font-medium text-gray-600">Contact us</h3>
        <div className="h-0.5 bg-gray-200 my-5">
          <p className="h-0.5 w-14 bg-red-600"></p>
        </div>

        <div>
          <ul className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 max-lg:gap-5">
            <li className="max-lg:flex gap-3">
              <FontAwesomeIcon
                className="bg-red-500 p-2 text-white"
                icon={faHome}
              ></FontAwesomeIcon>
              <h5>3100 C/A Khulna,Bangladesh</h5>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                className="bg-red-600 p-2 text-white"
                icon={faPhone}
              ></FontAwesomeIcon>
              <a
                className="hover:text-red-600 ease-in-out duration-300"
                href=""
              >
                +88 010-000-112
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                className="bg-red-600 p-2 text-white"
                icon={faEnvelope}
              ></FontAwesomeIcon>
              <a
                className="hover:text-red-600 ease-in-out duration-300"
                href="mailto:"
              >
                query@yourdomain.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                className="bg-red-600 p-2 text-white"
                icon={faGlobe}
              ></FontAwesomeIcon>
              <a
                className="hover:text-red-600 ease-in-out duration-300"
                href=""
              >
                www.yourdomain.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FontAwesomeIcon
                className="bg-red-600 p-2 text-white"
                icon={faLinkedinIn}
              ></FontAwesomeIcon>
              <a
                className="hover:text-red-600 ease-in-out duration-300"
                href=""
              >
                Your Linkedin UserName
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ----Communicate Section---- */}
      <div className="bg-gray-100 py-20 md:py-28">
        <div className="max-w-7xl mx-3 lg:mx-5 2xl:mx-auto grid lg:grid-cols-2 gap-10">
          <div className="animationUp">
            <CommunicateForm />
          </div>
          <div className="animationUp max-lg:h-[25rem]">
            <h2 className="text-3xl text-gray-600 font-semibold mb-4">
              Our Location
            </h2>
            <div className="h-0.5 bg-gray-200 mt-5 mb-7">
              <p className="h-0.5 w-10 bg-red-600"></p>
            </div>
            <CommunicationMap />
          </div>
        </div>
      </div>

      {/* ----Footer Section---- */}
      <Footer />
    </>
  );
}

export default Contact;

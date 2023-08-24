import Header from "../components/Headers";
import AllPageScreen from "../components/AllPageScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faPhone,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
      <div className="">
        {/* header section */}
        <Header />

        {/* ----About Home---- */}
        <AllPageScreen name="Contact us" />

        {/* Contact Information */}
        <div className="max-w-7xl mx-auto py-20">
          <h3 className="text-4xl font-medium text-gray-600">Contact us</h3>
          <div className="h-0.5 bg-gray-200 my-5">
            <p className="h-0.5 w-14 bg-red-600"></p>
          </div>

          <div className="">
            <ul className="grid grid-cols-5">
              <li>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                <h5>3100 C/A Khulna,Bangladesh</h5>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                <h5>+88 010-000-112</h5>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                <a href="">mirajulislam0509@gmail.com</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                <h5></h5>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                <h5></h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

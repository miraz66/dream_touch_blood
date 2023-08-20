import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faGooglePlusG,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function VolunteersCard({
  name,
  images,
  sureName,
  mainCss,
  imagesCss,
  nameCss,
  sureNameCss,
}) {
  return (
    <>
      <div
        className={`shadow-md rounded-md hover:shadow-xl hover:-mt-1 ease-in-out duration-300 ${mainCss}`}
      >
        <img className={imagesCss} src={images} alt={name} />
        <div className="bg-gray-50 py-3 text-center">
          <h2
            className={`text-xl font-semibold text-gray-700 uppercase ${nameCss}`}
          >
            {name}
          </h2>
          <h4 className={`text-gray-500 pt-1 uppercase ${sureNameCss}`}>
            {sureName}
          </h4>
        </div>

        <div className="py-4 bg-slate-100 flex gap-4 justify-center">
          <FontAwesomeIcon
            className="w-4 h-4 p-2 bg-white text-red-600 hover:text-red-800 ease-in-out duration-300 cursor-pointer"
            icon={faFacebookF}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="w-4 h-4 p-2 bg-white text-red-600 hover:text-red-800 ease-in-out duration-300 cursor-pointer"
            icon={faTwitter}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="w-4 h-4 p-2 bg-white text-red-600 hover:text-red-800 ease-in-out duration-300 cursor-pointer"
            icon={faGooglePlusG}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="w-4 h-4 p-2 bg-white text-red-600 hover:text-red-800 ease-in-out duration-300 cursor-pointer"
            icon={faLinkedinIn}
          ></FontAwesomeIcon>
        </div>
      </div>
    </>
  );
}

VolunteersCard.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  sureName: PropTypes.string.isRequired,
  mainCss: PropTypes.string.isRequired,
  imagesCss: PropTypes.string.isRequired,
  nameCss: PropTypes.string.isRequired,
  sureNameCss: PropTypes.string.isRequired,
};

export default VolunteersCard;

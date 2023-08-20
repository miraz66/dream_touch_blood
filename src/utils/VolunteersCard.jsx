import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "../assets/team_9.jpg";
import {
  faTwitter,
  faGooglePlus,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

function VolunteersCard({
  name,
  sureName,
  mainCss,
  imagesCss,
  nameCss,
  sureNameCss,
}) {
  return (
    <>
      <div className={mainCss}>
        <img className={imagesCss} src={Team} alt={name} />
        <div className="">
          <h2 className={nameCss}>{name}</h2>
          <h4 className={sureNameCss}>{sureName}</h4>
        </div>

        <div className="">
          <FontAwesomeIcon className="" icon={faFacebookF}></FontAwesomeIcon>
          <FontAwesomeIcon className="" icon={faTwitter}></FontAwesomeIcon>
          <FontAwesomeIcon className="" icon={faGooglePlus}></FontAwesomeIcon>
          <FontAwesomeIcon className="" icon={faLinkedin}></FontAwesomeIcon>
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

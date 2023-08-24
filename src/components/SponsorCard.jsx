import PropTypes from "prop-types";

function SponsorCard({ images }) {
  return (
    <>
      <img className="bg-white p-5 rounded-md shadow-md" src={images} alt="" />
    </>
  );
}

SponsorCard.propTypes = {
  images: PropTypes.string.isRequired,
};

export default SponsorCard;

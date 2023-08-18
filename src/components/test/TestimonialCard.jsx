import PropTypes from "prop-types";

export default function TestimonialCard({ header, pra, name, image, address }) {
  return (
    <>
      <div className="bg-slate-200">
        <div>
          <h2>{header}</h2>
          {pra}

          <div className="">
            <img src={image} alt="Man_photo" />

            <h3>{name}</h3>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </>
  );
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  pra: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

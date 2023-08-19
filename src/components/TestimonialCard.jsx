import PropTypes from "prop-types";

export default function TestimonialCard({ header, pra, name, image, address }) {
  return (
    <>
      <div className="mt-10 mx-5 md:mx-16">
        <div>
          <h2 className="pb-10 text-3xl md:text-4xl text-red-600 font-semibold uppercase">
            {header}
          </h2>
          <p className="text-gray-700 pb-10 md:pb-20">{pra}</p>

          <div className="">
            <img
              className="h-20 w-20 md:h-24 md:w-24 mb-3 border-4 border-gray-300 rounded-full "
              src={image}
              alt="Man_photo"
            />

            <h3 className="text-lg md:text-2xl text-gray-800 font-medium uppercase">
              {name}
            </h3>
            <p className="text-sm md:text-base text-gray-600">{address}</p>
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

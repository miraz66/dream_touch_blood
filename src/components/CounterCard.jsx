import PropTypes from "prop-types";

function CounterCard({ name, icon, countent }) {
  return (
    <div>
      <div className="py-10 flex flex-col items-center text-center bg-white shadow hover:shadow-xl ease-in-out duration-300 rounded-md animationUp">
        {icon}

        {countent}
        <h4 className="pt-1 text-xl font-semibold font-serif text-gray-700 hover:text-gray-800">
          {name}
        </h4>
      </div>
    </div>
  );
}

CounterCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  countent: PropTypes.element.isRequired,
};

export default CounterCard;

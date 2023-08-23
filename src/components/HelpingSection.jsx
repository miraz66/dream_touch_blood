import PropTypes from "prop-types";
import Button from "../utils/Button";

function HelpingSection({ css }) {
  return (
    <div>
      <div className={`max-w-7xl mx-5 2xl:mx-auto ${css}`}>
        <div className="col-span-2 max-lg:pb-10">
          <h3 className="pb-5 text-2xl md:text-3xl lg:text-4xl text-gray-700 font-semibold uppercase">
            we are helping people from 40 years
          </h3>
          <p className="text-sm md:text-base lg:text-lg">
            You can give blood at any of our blood donation venues all over the
            world. We have total sixty thousands donor centers and visit
            thousands of other venues on various occasions.
          </p>
        </div>
        <div className="">
          <Button
            name="Request Appointment"
            css="bg-red-600 px-5 lg:px-6 py-3 lg:py-4 md:text-lg xl:text-xl text-white hover:bg-gray-700 ease-in-out duration-300"
          />
        </div>
      </div>
    </div>
  );
}

HelpingSection.propTypes = {
  css: PropTypes.string.isRequired,
};

export default HelpingSection;

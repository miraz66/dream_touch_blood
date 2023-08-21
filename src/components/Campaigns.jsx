import AutoSlider from "../utils/AutoSlider";
import Button from "../utils/Button";
import CampaignCardData from "../assets/data/CampaignCardData";

function Campaigns() {
  return (
    <>
      <div className="max-w-7xl mx-3 md:mx-5 xl:mx-auto pt-20 lg:pt-40 pb-24 flex flex-wrap">
        <div className="lg:w-1/2 lg:pr-10">
          <h2 className="text-3xl md:text-4xl max-lg:text-center text-gray-700 font-semibold uppercase">
            OUR CAMPAIGNS
          </h2>
          <hr className="h-0.5 w-20 mt-3 max-lg:mx-auto bg-red-600" />
          <p className="text-smlg:text-base text-gray-60 pt-6 pb-20 lg:pb-20 max-lg:text-center">
            All over the Country we have arranged total sixty thousands donation
            campaign and visit thousands of other venues on various occasions.
          </p>

          <Button
            name="Load all campaigns"
            css="text-lg md:text-xl text-white px-3 md:px-5 py-2 md:py-3 mb-5 bg-red-600 hover:bg-gray-700 ease-out duration-300"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <AutoSlider
            cardsData={CampaignCardData}
            css="h-[22rem] md:h-[21rem]"
            buttonCss="hidden"
            dotsCss="ml-5 md:ml-16 mt-4 flex justify-center"
          />
        </div>
      </div>
    </>
  );
}

export default Campaigns;

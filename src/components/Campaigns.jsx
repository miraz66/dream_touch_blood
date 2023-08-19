import AutoSlider from "../utils/AutoSlider";
import Button from "../utils/Button";
import CampaignCardData from "../assets/CampaignCardData";

function Campaigns() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-24 flex">
        <div className="w-1/2 pr-10">
          <h2 className="text-4xl text-gray-700 font-semibold uppercase">
            OUR CAMPAIGNS
          </h2>
          <hr className="bg-red-600 h-0.5 w-20" />
          <p className="text-gray-60 pt-6 pb-20">
            All over the Country we have arranged total sixty thousands donation
            campaign and visit thousands of other venues on various occasions.
          </p>

          <Button
            name="Load all campaigns"
            css="text-xl text-white px-5 py-3 bg-red-600 hover:bg-gray-700 ease-out duration-300"
          />
        </div>
        <div className="w-1/2">
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

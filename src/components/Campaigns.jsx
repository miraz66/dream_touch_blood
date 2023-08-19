import AutoSlider from "../utils/AutoSlider";
import Button from "../utils/Button";
import CampaignCardData from "../assets/CampaignCardData";

function Campaigns() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-10 flex">
        <div className="w-1/2">
          <h2 className="text-4xl text-gray-700 font-semibold uppercase">
            OUR CAMPAIGNS
          </h2>
          <hr className="bg-red-600 h-0.5 w-20" />
          <p className="text-gray-600">
            All over the Country we have arranged total sixty thousands donation
            campaign and visit thousands of other venues on various occasions.
          </p>

          <Button
            name="Load all campaigns"
            css="text-xl text-white px-5 py-3 bg-red-600"
          />
        </div>
        <div className="w-1/2">
          <AutoSlider
            cardsData={CampaignCardData}
            css="h-[22rem] md:h-[26rem]"
          />
        </div>
      </div>
    </>
  );
}

export default Campaigns;

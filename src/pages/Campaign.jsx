import AllPageScreen from "../components/AllPageScreen";
import Header from "../components/Headers";
import CampaignCardData from "../assets/data/CampaignCardData";
import HelpingSection from "../components/HelpingSection";
import Footer from "../components/Footer";

// Animation
import Animaton from "../utils/Animation";

function Campaign() {
  Animaton();

  return (
    <>
      {/* header section */}
      <Header />

      {/* Campaign Section */}
      <AllPageScreen name="CAMPAIGN LISTS" />

      {/* All Campaign */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl text-gray-700 font-semibold">
            ALL CAMPAIGNS
          </h1>
          <p className="h-0.5 w-24 mt-1 mb-4 bg-red-600 "></p>
          <p className="text-lg text-gray-600">
            Encourage new donors to join and continue to give blood. We have
            total sixty thousands donor centers and visit thousands of other
            venues on various occasions.
          </p>
          <div className="grid grid-cols-2 gap-10 pt-16">
            {CampaignCardData.map(({ id, content }) => (
              <div className="animationUp" key={id}>
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Helping Section */}
      <div className="bg-red-50 py-20">
        <HelpingSection css={"lg:grid grid-cols-3 gap-14"} />
      </div>

      {/* Sponsors Section */}
      <div className=""></div>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Campaign;

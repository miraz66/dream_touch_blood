import HomeCard from "../components/HomeCard";
import Campaigns from "../components/Campaigns";
import Animation from "../components/Animation";
import DetailsCompany from "../components/DetailsCompany";
import Headers from "../components/Headers";
import Information from "../components/Information";
import Testimonial from "../components/Testimonial";
import VolunteerSection from "../components/VolunteerSection";
import GallarySection from "../components/GallarySection";
import Footer from "../components/Footer";

function MainPage() {
  // for Animation
  Animation();

  return (
    <>
      {/* --headers */}
      <div className="fixed w-full bg-white bg-opacity-95 z-50 shadow">
        <Headers />
      </div>

      {/* -- homeContainer -- */}
      <div className="pt-24">
        <HomeCard />

        {/* Details for company */}
        <DetailsCompany />

        {/*Testimonial Section*/}
        <Testimonial />

        {/* CAMPAIGNS Section */}
        <Campaigns />

        {/* Information Section */}
        <Information />

        {/* Volunteer Section */}
        <VolunteerSection />

        {/* Gallary Section */}
        <GallarySection />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default MainPage;

import DetailsCompany from "../components/DetailsCompany";
import Header from "../components/Headers";
import VolunteerSection from "../components/VolunteerSection";
import CounterCard from "../components/CounterCard";
import CounterCardData from "../assets/data/CounterCardData";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import AllPageScreen from "../components/AllPageScreen";
import Animation from "../components/Animation";

// images
import separator from "../assets/separator.png";
import HelpingSection from "../components/HelpingSection";

function About() {
  // amimation library //
  Animation();

  return (
    <>
      <div className="">
        {/* ----header section---- */}
        <Header />

        {/* ----About Home---- */}
        <AllPageScreen name="About us" />

        {/* Details for company */}
        <DetailsCompany />

        {/* Volunteer Section */}
        <VolunteerSection />

        {/* Achievements Section */}
        <div className="bg-gray-50 py-10  w-screen   md:py-28">
          <div className="text-center pb-20 px-3 md:px-5">
            <h1 className="pb-3 text-2xl md:text-3xl lg:text-5xl tracking-wider text-gray-700 font-semibold uppercase">
              OUR ACHIEVEMENTS
            </h1>

            <img className="mx-auto" src={separator} alt="separator" />

            <p className="text-gray-500 lg:text-xl tracking-wide font-medium">
              We have been working since 1973 with a prestigious vision to
              helping patient to provide blood.
            </p>
          </div>

          {/* Counter Card */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-between gap-5 2xl:gap-10 px-5 boxTarget">
            {CounterCardData.map(({ id, name, icon, counterCard }) => (
              <CounterCard
                key={id}
                name={name}
                icon={icon}
                countent={counterCard}
              />
            ))}
          </div>
        </div>

        {/*Testimonial Section*/}
        <Testimonial />

        {/* Helping Section */}
        <div className="bg-gray-50 py-20">
          <HelpingSection css={"lg:grid grid-cols-3 gap-14"} />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default About;

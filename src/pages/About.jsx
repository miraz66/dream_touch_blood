import DetailsCompany from "../components/DetailsCompany";
import Header from "../components/Headers";
import VolunteerSection from "../components/VolunteerSection";
import CounterCard from "../components/CounterCard";
import CounterCardData from "../assets/data/CounterCardData";
import Testimonial from "../components/Testimonial";

import Animation from "../components/Animation";

// images
import separator from "../assets/separator.png";
import Button from "../utils/Button";
import Footer from "../components/Footer";

function About() {
  // amimation library //
  Animation();

  return (
    <>
      <div className="">
        {/* ----header section---- */}
        <Header />

        {/* ----About Home---- */}
        <div className="h-80 bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('assets/header-bg.jpg')]">
          <div className="max-w-7xl mx-auto h-full text-white flex flex-col justify-center items-center">
            <h2 className="text-4xl font-semibold uppercase tracking-widest">
              About us
            </h2>
            <div className="flex gap-2 text-lg font-semibold">
              <a
                className="after:content-[' '] after:bg-red-500 after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer"
                href="/"
              >
                Home
              </a>
              <h2> / About us</h2>
            </div>
          </div>
        </div>

        {/* Details for company */}
        <DetailsCompany />

        {/* Volunteer Section */}
        <VolunteerSection />

        {/* Achievements Section */}
        <div className="bg-gray-50 py-28">
          <div className="text-center pb-20">
            <h1 className="pb-3 text-5xl tracking-wider text-gray-700 font-semibold uppercase">
              OUR ACHIEVEMENTS
            </h1>

            <img className="mx-auto" src={separator} alt="" />

            <p className="text-gray-500 text-xl tracking-wide font-medium">
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
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-14">
            <div className="col-span-2">
              <h3 className="pb-5 text-4xl text-gray-700 font-semibold uppercase">
                we are helping people from 40 years
              </h3>
              <p className="text-lg">
                You can give blood at any of our blood donation venues all over
                the world. We have total sixty thousands donor centers and visit
                thousands of other venues on various occasions.
              </p>
            </div>
            <div className="">
              <Button
                name="Request Appointment"
                css="bg-red-600 px-6 py-4 text-xl text-white hover:bg-gray-700 ease-in-out duration-300"
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}

export default About;

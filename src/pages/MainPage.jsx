import DetailsCompany from "../components/DetailsCompany";
import Headers from "../components/Headers";
import Testimonial from "../components/Testimonial";
import Button from "../utils/Button";

function MainPage() {
  return (
    <>
      {/* --headers */}
      <div className="fixed w-full bg-white bg-opacity-95 z-20">
        <Headers />
      </div>

      {/* -- homeContainer -- */}
      <div className="pt-24">
        <div className="bg-no-repeat bg-center bg-cover bg-[url('assets/home_1_slider_1.jpg')]">
          <div className="max-w-7xl 2xl:mx-auto lg:mx-10 mx-3 py-20 lg:py-44">
            <h4 className="text-white font-serif text-sm md:text-lg lg:text-xl xl:text-2xl">
              Donate blood save life !
            </h4>
            <h1 className="pt-3 pb-10 text-2xl md:text-4xl xl:text-6xl font-Poppins text-white uppercase font-semibold leading-tight zoom-in">
              Your blood <br />
              can bring smile <br />
              in other person face
            </h1>
            <div className="">
              <Button
                name={"Donate Now"}
                css={
                  "bg-red-600 hover:bg-gray-600 ease-out duration-300 mr-1 md:mr-5 text-sm md:text-lg text-gray-200 py-2 md:py-3 px-4 md:px-5 uppercase font-semibold font-serif"
                }
              />
              <Button
                name={"Call: 123-009-123-113"}
                css={
                  "bg-gray-600 hover:bg-gray-900 ease-out duration-300 py-2 md:py-3 px-4 md:px-5 text-sm md:text-lg text-white uppercase font-serif"
                }
              />
            </div>
          </div>
        </div>
        {/* Details for company */}
        <DetailsCompany />

        {/* Donar Testimonial */}
        <Testimonial />
      </div>
    </>
  );
}

export default MainPage;

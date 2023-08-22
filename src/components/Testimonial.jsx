import TestimonyFeatImg from "../assets/testimonyFeatImg.jpg";
import AutoSlider from "../utils/AutoSlider";
import TestimonialCardData from "../assets/data/TestimonialCardData";

export default function Testimonial() {
  return (
    <>
      <div className="bg-no-repeat bg-center bg-cover bg-[url('assets/testimony_feat_bg.jpg')]">
        <div className="max-w-6xl lg:mx-16 2xl:mx-auto md:py-20">
          <div className="py-10 text-white text-center">
            <h5 className="md:text-xl">Awesome Words From Members</h5>
            <div className=""></div>
            <hr className="mx-auto w-16 md:w-28 bg-white my-3" />
            <h2 className="text-3xl md:text-5xl pb-10 font-medium">
              JOIN WITH US AND SAVE LIFE CAMPAIGNS
            </h2>
          </div>
          <div className="lg:flex lg:justify-between hover:shadow-xl lg:hover:shadow-gray-300 ease-out duration-300">
            <div className="lg:w-1/2 bg-white max-lg:pb-10 animationLeft">
              <AutoSlider
                cardsData={TestimonialCardData}
                css="h-[26rem] md:h-[30rem] mt-4"
                buttonCss="hidden"
                dotsCss="ml-5 md:ml-16 mt-4 flex"
              />
            </div>

            <div className="lg:w-1/2 hidden lg:block animationRight">
              <img
                className="h-[37rem] w-full"
                src={TestimonyFeatImg}
                alt="TestimonyFeatImg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

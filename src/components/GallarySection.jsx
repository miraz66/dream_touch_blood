import Button from "../utils/Button";
import gallary_1 from "../assets/gallery_1.jpg";
import gallary_2 from "../assets/gallery_2.jpg";
import gallary_3 from "../assets/gallery_3.jpg";
import gallary_4 from "../assets/gallery_4.jpg";
import gallary_5 from "../assets/gallery_5.jpg";
import gallary_6 from "../assets/gallery_6.jpg";
import gallary_7 from "../assets/event_3.jpg";
import gallary_8 from "../assets/testimonyFeatImg.jpg";

const gallaryImages = [
  gallary_1,
  gallary_2,
  gallary_3,
  gallary_4,
  gallary_5,
  gallary_6,
  gallary_7,
  gallary_8,
];

export default function GallarySection() {
  return (
    <>
      <div className="max-w-7xl mx-3 md:mx-5 2xl:mx-auto py-20">
        <div className="text-center">
          <h3 className="text-gray-700 text-2xl md:text-4xl font-bold">
            CAMPAIGN GALLERY
          </h3>
          <p className="my-2 w-[2px] h-6 md:h-8 mx-auto bg-red-600"></p>
          <h5 className="mb-10 text-lg md:text-xl text-gray-600 font-light">
            our prestigious voluntary work on campaigns by the team
          </h5>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5">
          {gallaryImages.map((images, index) => (
            <div className="container relative" key={index}>
              <img className="h-64 w-full" src={images} alt="" />
              <div className="overlay flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 bg-white p-2 text-red-600 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="2xl:w-10/12 py-10 mt-20 mx-auto bg-gray-100 text-center rounded-lg">
          <h2 className="text-2xl md:text-3xl pb-3 text-gray-600 font-bold">
            Become A Part Of Great Work Today
          </h2>
          <p className="text-sm md:text-base xl:text-lg text-gray-600">
            You can give blood at any of our blood donation venues all over the
            world. <br />
            We have total sixty thousands donor centers and visit thousands of
            other venues on various occasions.
          </p>
          <div className="flex justify-center mt-5">
            <Button
              name="Join with us"
              css="px-8 py-3 bg-red-600 text-lg md:text-xl font-bold text-white hover:bg-gray-700 ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

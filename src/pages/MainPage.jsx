import DetailsCompany from "../components/DetailsCompany";
import Headers from "../components/Headers";
import Button from "../utils/Button";
// import image from "../assets/";

function MainPage() {
  return (
    <>
      {/* --headers */}
      <div className="fixed w-full bg-white bg-opacity-95">
        <Headers />
      </div>

      {/* -- homeContainer -- */}
      <div className="pt-24">
        <div className="bg-no-repeat bg-center bg-[url('assets/home_1_slider_1.jpg')]">
          <div className="max-w-7xl mx-auto pl-20 py-44 px-10">
            <h4 className="text-white font-serif text-2xl">
              Donate blood save life !
            </h4>
            <h1 className="pt-3 pb-10 xl:text-6xl font-Poppins text-white uppercase font-semibold leading-tight zoom-in">
              Your blood <br />
              can bring smile <br />
              in other person face
            </h1>
            <div className="">
              <Button
                name={"Donate Now"}
                css={
                  "bg-red-600 hover:bg-gray-600 ease-out duration-300 mr-5 text-lg text-gray-200 py-3 px-5 uppercase font-semibold font-serif"
                }
              />
              <Button
                name={"Call: 123-009-1123-1213"}
                css={
                  "bg-gray-600 hover:bg-gray-900 ease-out duration-300 py-3 px-5 text-lg text-white uppercase font-serif"
                }
              />
            </div>
          </div>
        </div>
        {/* Details for company */}
        <DetailsCompany />
      </div>
    </>
  );
}

export default MainPage;

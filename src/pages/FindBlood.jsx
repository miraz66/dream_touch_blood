import BloodType from "../components/BloodType";
import Compatible from "../components/Compatible";
import Footer from "../components/Footer";
import Header from "../components/Headers";

import Animation from "../utils/Animation";

function FindBlood() {
  Animation();

  return (
    <>
      {/* header Section */}
      <Header />

      {/* FindPage Home Section */}
      <div className="h-40 md:h-96 bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('assets/header-bg.jpg')]">
        <div className="max-w-7xl mx-auto h-full text-gray-800 flex flex-col justify-center items-center">
          <div className="flex">
            <label
              className="bg-red-600 text-white px-5 py-2 md:px-8 md:py-3 cursor-pointer"
              htmlFor="search-dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 md:w-7 h-5 md:h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </label>
            <input
              className="w-52 md:w-[28rem] px-3 md:px-5 appearance-none outline-none border-2 focus:border-red-600 focus:shadow-md "
              type="search"
              name=""
              id="search-dropdown"
            />
          </div>
        </div>
      </div>

      {/* BloodType Section */}
      <BloodType />

      {/* compatible Section */}
      <Compatible />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default FindBlood;

import Header from "../components/Headers";

function FindBlood() {
  return (
    <>
      {/* header Section */}
      <Header />

      {/* FindPage Home Section */}
      <div className="h-96 bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('assets/header-bg.jpg')]">
        <div className="max-w-7xl mx-auto h-full text-gray-800 flex flex-col justify-center items-center">
          <div className="flex">
            <label
              className="bg-red-600 text-white px-8 py-3 cursor-pointer"
              htmlFor="search-dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </label>
            <input
              className="w-[28rem] px-5 appearance-none outline-none border-2 focus:border-red-600 focus:shadow-md "
              type="search"
              name=""
              id="search-dropdown"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FindBlood;

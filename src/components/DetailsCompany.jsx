function DetailsCompany() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex justify-between my-32">
        <div className="w-1/2 relative">
          <div className="bg-gray-100 p-14 top-14 absolute -right-14 rounded-l-lg">
            <h2 className="text-5xl font-medium text-gray-800 pb-2">
              Who We Are?
            </h2>
            <hr className="w-28 bg-red-600 h-0.5 mb-5" />
            <p className="text-lg pb-5">
              Blood Buddies is for public donation center with blood donation
              members in the changing health care system.
            </p>
            <ul className="text-base list-disc pl-10 marker:text-red-600">
              <li>Specialist blood donors and clinical supervision.</li>
              <li>Increasing communication with our members.</li>
              <li>High quality assessment, diagnosis and treatment.</li>
              <li>Examine critically to ensure alignment.</li>
              <li>The extra care of a multi-disciplinary team</li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 h-[25rem]">
          <div className="h-full flex justify-center items-center bg-no-repeat bg-center bg-[url('assets/home_1_slider_1.jpg')]">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-28 h-28 p-5 border-8 rounded-full cursor-pointer hover:border-red-600 hover:text-white ease-in-out duration-300 bg-gray-600 text-red-600 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsCompany;

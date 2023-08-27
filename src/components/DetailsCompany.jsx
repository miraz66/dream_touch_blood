import { useState } from "react";
import Modal from "../utils/Modal";
import VideoPlayer from "../utils/VideoPlayer";

function DetailsCompany() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mt-20 md:mt-28 md:mb-36 lg:mx-5 2xl:mx-auto flex justify-between max-lg:flex-wrap-reverse">
        <div className="w-full lg:w-1/2 relative animationLeft">
          <div className="bg-gray-100 max-md:m-3 p-3 md:p-6 xl:p-14 xl:top-14 lg:absolute xl:-right-14 rounded-md md:rounded-l-lg">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-800 pb-2">
              Who We Are?
            </h2>
            <hr className="w-16 md:w-28 bg-red-600 h-0.5 mb-5" />
            <p className="text-base md:text-lg pb-5 text-gray-800 animationDown">
              Blood Buddies is for public donation center with blood donation
              members in the changing health care system.
            </p>
            <ul className="text-sm md:text-base text-gray-700 list-disc pl-10 lg:pl-3 xl:pl-10 marker:text-red-600 animationDown">
              <li>Specialist blood donors and clinical supervision.</li>
              <li>Increasing communication with our members.</li>
              <li>High quality assessment, diagnosis and treatment.</li>
              <li>Examine critically to ensure alignment.</li>
              <li>The extra care of a multi-disciplinary team.</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[25rem] animationRight">
          <div className="h-full max-md:mx-3 max-md:rounded-md flex justify-center items-center bg-no-repeat bg-center bg-cover bg-[url('assets/about_feat_bg.jpg')]">
            <button onClick={() => setIsModalOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-28 h-28 p-5 border-8 rounded-full cursor-pointer hover:border-red-600 hover:text-white hover:bg-black ease-in-out duration-500 bg-gray-700 text-red-600 opacity-70 animationPopUP"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(!isModalOpen)}
          css="fixed inset-0 flex justify-center items-center bg-opacity-70 bg-gray-900 z-50"
        >
          <VideoPlayer
            src="aqz-KE-bpKQ"
            css="w-72 h-48 md:w-96 h-60 lg:w-[35rem] lg:h-[22rem] xl:w-[60rem] xl:h-[43rem] rounded-md"
          />
        </Modal>
      )}
    </>
  );
}

export default DetailsCompany;

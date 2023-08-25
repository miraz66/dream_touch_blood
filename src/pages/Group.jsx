import { useState } from "react";
import Header from "../components/Headers";
// import VideoPlayer from "../components/test/VideoPlayer2";
import Modal from "../utils/Modal";

function Group() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header />

      {/* <VideoPlayer src="https://www.youtube.com/embed/aqz-KE-bpKQ" /> */}

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

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(!isModalOpen)}
          css="fixed inset-0 flex justify-center items-center bg-opacity-50 bg-gray-900"
        >
          <p>hello</p>
        </Modal>
      )}
    </>
  );
}

export default Group;

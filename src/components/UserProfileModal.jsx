import { useState } from "react";
import Modal from "../utils/Modal";
import UserProfile from "./UserProfile";

const UserProfileModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 cursor-pointer hover:text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(!isModalOpen)}
          css="absolute lg:top-16 right-0"
        >
          <UserProfile />
        </Modal>
      )}
    </div>
  );
};

export default UserProfileModal;

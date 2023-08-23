import { useNavigate } from "react-router-dom";

function UserProfileModel() {
  const navigate = useNavigate();
  return (
    <div className="w-40 flex items-center flex-col">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 h-16 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="text-center">
        <h2 className="font-semibold">MD.MIRAJUL ISLAM</h2>
        <p className="text-xs">hello1234@gmail.com</p>

        <h3 className="hover:underline cursor-pointer">See Profile</h3>
        <p className="hover:underline cursor-pointer">Edit Profile</p>

        <button
          onClick={() => navigate("/login")}
          className="mt-10 w-full py-1 rounded-md bg-gradient-to-br text-white from-gray-500 via-red-500 to-gray-500"
        >
          log out
        </button>
      </div>
    </div>
  );
}

export default UserProfileModel;

import VideoPlayer from "../components/test/VideoPlayer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Compatible() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-28">
          <div className="">
            <h1 className="text-5xl font-bold text-gray-700 text-center tracking-wide">
              Who can receive my blood?
            </h1>

            <svg
              className="text-red-600 w-52 h-10 mx-auto"
              viewBox="0 0 205 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 34.1347C11.1842 36.0384 16.6219 37.7687 24.4467 31.382C27.9327 28.5367 31.0806 25.547 32.9281 21.3668C34.9534 16.7845 36.5016 4.30185 28.4111 10.4729C23.7482 14.0296 22.0384 19.2975 22.3564 25.0187C23.1447 39.1999 41.3992 38.9003 51.8372 36.8427C61.8179 34.8752 72.1668 29.0887 76.2245 19.3281C78.1431 14.7127 77.8465 6.66995 70.6262 10.4592C65.1536 13.3312 63.6562 20.9809 63.9982 26.5151C64.5613 35.625 77.9388 37.19 84.8535 36.8461C95.7995 36.3018 106.068 25.9496 111.554 17.1623C113.598 13.888 114.98 4.61775 108.743 9.69723C96.6664 19.5325 106.978 36.5207 121.144 35.1266C132.503 34.0088 142.282 21.3057 148.566 12.8961C149.797 11.2476 154.068 -2.96101 148.229 2.07428C143.478 6.17149 141.239 14.8679 143.623 20.6391C154.058 45.9043 188.217 17.5132 203.525 12.3881"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-20">
            <div className="">
              <h2 className="text-3xl text-gray-700">
                Which blood types are compatible?
              </h2>

              <div className="bg-gray-200 w-full h-0.5 my-5">
                <p className="bg-red-600 w-24 h-0.5 "></p>
              </div>

              <ul className="text-gray-600 mt-10 animationUp">
                <li className="flex gap-3 pb-3">
                  <FontAwesomeIcon
                    className="text-red-600 pt-1"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  You can receive blood from a donor with the same blood type as
                  you.
                </li>
                <li className="flex gap-3 pb-3">
                  <FontAwesomeIcon
                    className="text-red-600 pt-1"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  You can also receive blood from a donor with a compatible
                  blood type.
                </li>
                <li className="flex gap-3 pb-3">
                  <FontAwesomeIcon
                    className="text-red-600 pt-1"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  Similarly, a person with a different blood type to you may be
                  able to safely receive your blood.
                </li>
                <li className="flex gap-3 pb-3">
                  <FontAwesomeIcon
                    className="text-red-600 pt-1"
                    icon={faCaretRight}
                  ></FontAwesomeIcon>
                  O negative blood is known as the universal blood type because
                  it is safe for everyone to receive O negative red cells.
                </li>
              </ul>
            </div>
            <div className="">
              <VideoPlayer src="B6dAPXpUjCE" css="w-full h-[24rem]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compatible;

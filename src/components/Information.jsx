import AppointmentFrom from "./AppointmentFrom";
import Counter from "../utils/CountNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faStethoscope,
  faUsers,
  faBuilding,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";

function Information() {
  return (
    <>
      <div className="pb-20 bg-gray-50">
        <div className="h-[20rem] lg:h-[32rem] bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url('assets/appointment_female_bg.jpg')]"></div>
        <div className="max-w-7xl md:mx-5 2xl:mx-auto">
          <div className="flex pt-16 lg:pt-24 pb-20 flex-wrap">
            <div className="lg:w-1/2 max-lg:px-5 pb-10">
              <h4 className="text-xl pb-1 text-gray-600 font-light">
                Good To Know
              </h4>
              <hr className="bg-red-600 h-0.5 w-14" />
              <h2 className="pt-3 pb-10 text-3xl xl:text-5xl font-medium text-gray-700">
                Helpful Information
              </h2>

              <ul className="text-sm xl:text-base max-lg:px-5 lg:pl-10 text-gray-600 list-disc marker:text-red-600 animationUp">
                <li>
                  Maintain a healthy iron level by eating iron rich foods.
                </li>
                <li>Drink an extra 16 oz. of water prior to your donation.</li>
                <li>Avoid alcohol consumption before your blood donation.</li>
                <li>
                  Remember to bring the donor card or national ID/Passport.
                </li>
                <li>
                  Finally, Try to get a good night sound sleep after donation.
                </li>
              </ul>
            </div>

            {/* APPOINTMENT form */}
            <div className="lg:w-1/2 px-3 animationPopUP">
              <AppointmentFrom />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-between gap-5 2xl:gap-10 px-5 boxTarget">
            <div className="py-10 flex flex-col items-center text-center bg-white shadow hover:shadow-xl ease-in-out duration-300 rounded-md animationUp">
              <FontAwesomeIcon
                className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
                icon={faHeartbeat}
              ></FontAwesomeIcon>
              <Counter
                startValue={0}
                endValue={1360}
                duration={20000}
                css="pt-5 text-3xl text-red-600 font-semibold font-serif"
              />
              <h4 className="pt-1 text-xl font-semibold font-serif text-gray-700 hover:text-gray-800">
                Success Smile
              </h4>
            </div>

            <div className="py-10 flex flex-col items-center text-center bg-white shadow hover:shadow-xl ease-in-out duration-300 rounded-md animationUp">
              <FontAwesomeIcon
                className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
                icon={faStethoscope}
              ></FontAwesomeIcon>
              <Counter
                startValue={0}
                endValue={1510}
                duration={20000}
                css="pt-5 text-3xl text-red-600 font-semibold font-serif"
              />
              <h4 className="pt-1 text-xl font-semibold font-serif text-gray-700 hover:text-gray-800">
                Happy Donors
              </h4>
            </div>

            <div className="py-10 flex flex-col items-center text-center bg-white shadow hover:shadow-xl ease-in-out duration-300 rounded-md animationUp">
              <FontAwesomeIcon
                className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
                icon={faUsers}
              ></FontAwesomeIcon>

              <Counter
                startValue={0}
                endValue={2850}
                duration={20000}
                css="pt-5 text-3xl text-red-600 font-semibold font-serif"
              />
              <h4 className="pt-1 text-xl font-semibold font-serif text-gray-700 hover:text-gray-800">
                Happy Recipient
              </h4>
            </div>

            <div className="py-10 flex flex-col items-center text-center bg-white shadow hover:shadow-xl ease-in-out duration-300 rounded-md animationUp">
              <FontAwesomeIcon
                className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
                icon={faBuilding}
              ></FontAwesomeIcon>

              <Counter
                startValue={0}
                endValue={3260}
                duration={20000}
                css="pt-5 text-3xl text-red-600 font-semibold font-serif"
              />
              <h4 className="pt-1 text-xl font-semibold font-serif text-gray-700 hover:text-gray-800">
                Total Awards
              </h4>
            </div>

            <div className="py-10 flex flex-col items-center text-center bg-white shadow hover:shadow-xl ease-in-out duration-300 rounded-md animationUp">
              <FontAwesomeIcon
                className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
                icon={faHeartCrack}
              ></FontAwesomeIcon>

              <Counter
                startValue={0}
                endValue={600}
                duration={20000}
                css="pt-5 text-3xl text-red-600 font-semibold font-serif"
              />
              <h4 className="pt-1 text-xl font-semibold font-serif text-gray-700 hover:text-gray-800">
                Bad Smile
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;

import AppointmentFrom from "./AppointmentFrom";
import CounterCard from "./CounterCard";
import CounterCardData from "../assets/data/CounterCardData";

function Information() {
  return (
    <>
      <div className="pb-20 bg-gray-50">
        <div className="h-[20rem] lg:h-[32rem] bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url('assets/appointment_female_bg.jpg')]"></div>
        <div className="max-w-7xl md:mx-5 2xl:mx-auto">
          <div className="max-lg:-mt-72 pt-16 lg:pt-24 pb-20 flex flex-wrap">
            <div className="lg:w-1/2 max-lg:px-5 pb-10">
              <h4 className="text-xl pb-1 text-gray-600 max-lg:text-white max-xl: font-light">
                Good To Know
              </h4>
              <hr className="bg-red-600 h-0.5 w-14" />
              <h2 className="pt-3 pb-10 text-3xl xl:text-5xl font-medium text-gray-700 max-lg:text-white ">
                Helpful Information
              </h2>

              <ul className="text-sm xl:text-base max-lg:px-5 lg:pl-10 text-gray-600 max-lg:text-white list-disc marker:text-red-600 max-lg:marker:text-white animationUp">
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

          {/* Counter Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-between gap-5 2xl:gap-10 px-5 boxTarget">
            {CounterCardData.map(({ id, name, icon, counterCard }) => (
              <CounterCard
                key={id}
                name={name}
                icon={icon}
                countent={counterCard}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Information;

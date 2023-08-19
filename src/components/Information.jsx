import AppointmentFrom from "./AppointmentFrom";

function Information() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="h-[32rem] bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url('assets/appointment_female_bg.jpg')]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="flex pt-24 pb-20">
            <div className="w-1/2">
              <h4 className="text-xl pb-1 text-gray-600 font-light">
                Good To Know
              </h4>
              <hr className="bg-red-600 h-0.5 w-14" />
              <h2 className="pt-3 pb-10 text-5xl font-medium text-gray-700">
                Helpful Information
              </h2>

              <ul className="pl-10 text-gray-700 list-disc marker:text-red-600">
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
            <div className="w-1/2">
              <AppointmentFrom />
            </div>
          </div>
          <div className="">hello</div>
        </div>
      </div>
    </>
  );
}

export default Information;

import VolunteersData from "../assets/data/VolunteersCardData";
import Button from "../utils/Button";

function VolunteerSection() {
  return (
    <>
      <div className="py-10 lg:py-24 bg-no-repeat bg-center bg-cover bg-[url('assets/team_feat_bg.jpg')]">
        <div className="max-w-7xl mx-5 2xl:mx-auto">
          <div>
            <h4 className="text-base lg:text-xl text-center font-mono text-white uppercase">
              OUR VOLUNTEERS
            </h4>
            <p className="h-[2px] w-16 mt-2 mb-5 mx-auto bg-red-600 font-serif"></p>
            <h2 className="pb-24 md:text-2xl lg:text-4xl xl:text-5xl text-center font-bold text-gray-100">
              The volunteers who give their time and <br /> talents help to
              fulfill our mission.
            </h2>
          </div>
          <div className="lg:flex gap-10 lg:gap-2 xl:gap-10 max-lg:flex-wrap">
            {VolunteersData.map(({ content, id }) => (
              <div key={id}>{content}</div>
            ))}
          </div>

          <div className="flex justify-center md:pt-14">
            <Button
              name="Become A Volunteer"
              css="flex px-6 md:px-10 py-3 md:py-4 bg-red-600 text-xl text-white font-serif hover:bg-gray-700 ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerSection;

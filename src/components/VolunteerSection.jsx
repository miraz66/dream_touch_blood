import VolunteersData from "../assets/data/VolunteersCardData";
import Button from "../utils/Button";

function VolunteerSection() {
  return (
    <>
      <div className="py-24 bg-no-repeat bg-center bg-cover bg-[url('assets/team_feat_bg.jpg')]">
        <div className="max-w-7xl mx-auto">
          <div>
            <h4 className="text-xl text-center font-mono text-white uppercase">
              OUR VOLUNTEERS
            </h4>
            <p className="h-[2px] w-16 mt-2 mb-5 mx-auto bg-red-600 font-serif"></p>
            <h2 className="pb-24 text-5xl text-center font-bold text-gray-100">
              The volunteers who give their time and <br /> talents help to
              fulfill our mission.
            </h2>
          </div>
          <div className="flex gap-10">
            {VolunteersData.map(({ content, id }) => (
              <div key={id}>{content}</div>
            ))}
          </div>

          <div className="flex justify-center pt-14">
            <Button
              name="Become A Volunteer"
              css="flex px-10 py-4 bg-red-600 text-xl text-white font-serif hover:bg-gray-700 ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default VolunteerSection;

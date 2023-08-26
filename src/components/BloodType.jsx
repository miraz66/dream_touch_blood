import BloodTypeImages from "../assets/BloodTypeImages.jpg";

export default function BloodType() {
  return (
    <>
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-5xl text-gray-700 font-semibold tracking-wider">
            Find out your blood type
          </h2>
          <p className="text-center text-gray-500 text-xl">
            You will find out your blood type after your first blood donation.
          </p>
          <div className="grid grid-cols-2 mt-20">
            <div className="">
              <h3 className="text-3xl font-medium text-gray-700">
                What are the rarest blood types?
              </h3>
              <p className="text-gray-500">
                There are eight main blood types but some are rarer than others.
                The list below shows the percentage of donors with each blood
                type:
              </p>
              <ul className="ml-10 list-disc marker:text-red-600">
                <li>O positive: 35%</li>
                <li>O negative: 13%</li>
                <li>A positive: 30%</li>
                <li>A negative: 8%</li>
                <li>B positive: 8%</li>
                <li>B negative: 2%</li>
                <li>AB positive: 2%</li>
                <li>AB negative: 1%</li>
              </ul>
            </div>
            <div className="mx-auto">
              <img src={BloodTypeImages} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

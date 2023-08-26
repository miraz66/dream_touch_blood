import BloodTypeImages from "../assets/BloodTypeImages.jpg";

export default function BloodType() {
  return (
    <>
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="pb-4 text-center text-5xl text-gray-600 font-semibold tracking-wider">
            Find out your blood type
          </h2>
          <p className="text-center text-gray-500 text-xl">
            You will find out your blood type after your first blood donation.
          </p>
          <div className="grid grid-cols-2 mt-20">
            <div className="">
              <h3 className="mb-3 text-3xl font-medium text-gray-600">
                What are the rarest blood types?
              </h3>

              <div className="bg-gray-200 w-full h-0.5 my-5">
                <p className="bg-red-600 w-20 h-0.5 "></p>
              </div>

              <p className="text-gray-500 tracking-wide">
                There are eight main blood types but some are rarer than others.
                The list below shows the percentage of donors with each blood
                type:
              </p>
              <ul className="mt-5 text-lg text-gray-500 ml-10 list-disc marker:text-red-600">
                <li>O positive: 35%</li>
                <li>O negative: 13%</li>
                <li>A positive: 30%</li>
                <li>A negative: 8%</li>
                <li>B positive: 8%</li>
                <li>B negative: 2%</li>
                <li>AB positive: 2%</li>
                <li>AB negative: 1%</li>
              </ul>
              <p className="pt-5 text-gray-600">
                Data accurate at December 2018. Percentage figures have been
                rounded to the nearest whole number.
              </p>
            </div>
            <div className="mx-auto">
              <h1 className="text-3xl font-medium text-gray-600">
                Blood Types
              </h1>
              <div className="bg-gray-200 w-full h-0.5 my-4">
                <p className="bg-red-600 w-20 h-0.5 "></p>
              </div>
              <img src={BloodTypeImages} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

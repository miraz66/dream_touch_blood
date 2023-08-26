import VideoPlayer from "../components/test/VideoPlayer2";

function Compatible() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-28">
          <div className="">
            <h1 className="text-5xl font-bold text-gray-700 text-center tracking-wide">
              Who can receive my blood?
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <h2 className="text-3xl text-gray-700">
                Which blood types are compatible?
              </h2>

              <div className="bg-gray-200 w-full h-0.5 my-5">
                <p className="bg-red-600 w-24 h-0.5 "></p>
              </div>

              <ul className="text-gray-600">
                <li>
                  You can receive blood from a donor with the same blood type as
                  you.
                </li>
                <li>
                  You can also receive blood from a donor with a compatible
                  blood type.
                </li>
                <li>
                  Similarly, a person with a different blood type to you may be
                  able to safely receive your blood.
                </li>
                <li>
                  O negative blood is known as the universal blood type because
                  it is safe for everyone to receive O negative red cells.
                </li>
              </ul>
            </div>
            <div className="">
              <VideoPlayer src="B6dAPXpUjCE" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Compatible;

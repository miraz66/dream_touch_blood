import MainPhoto from "../assets/MainPhoto.jpg";

function Home() {
  return (
    <>
      <div className="h-screen bg-white overflow-hidden max-md:p-2">
        <div className="max-w-6xl mx-auto">
          <img
            className="w-[250px] md:w-[300px] lg:w-[400px] mx-auto pt-10 pb-4"
            src={MainPhoto}
            alt=""
          />
          <h1 className="uppercase text-gray-700 text-3xl md:text-4xl lg:text-6xl font-bold text-center">
            Dream touch blood for life
          </h1>
          <p className="pt-3 2xl:pt-5 md:text-2xl text-center text-gray-600 font-semibold ">
            Elipur,Rupsha,Khulna
          </p>

          <div className="flex justify-center md:mt-10 2xl:mt-14 mt-24">
            <button className="px-14 py-3 lg:px-20 lg:py-4 text-2xl md:text-3xl rounded-md text-gray-200 font-Poppins font-semibold bg-gradient-to-br from-gray-500 via-red-500 to-gray-500 ">
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

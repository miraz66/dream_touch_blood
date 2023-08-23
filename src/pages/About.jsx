import Header from "../components/Headers";

function About() {
  return (
    <>
      <div className="">
        {/* ----header section---- */}
        <Header />

        {/* ----About Home---- */}
        <div className="h-80 bg-no-repeat bg-center bg-cover bg-[url('assets/header-bg.jpg')]">
          <div className="max-w-7xl mx-auto h-full text-2xl font-semibold text-gray-700 flex justify-center items-center">
            <a href="">Home</a>
            <h2>/ About us</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

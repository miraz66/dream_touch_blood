import DetailsCompany from "../components/DetailsCompany";
import Header from "../components/Headers";

function About() {
  return (
    <>
      <div className="">
        {/* ----header section---- */}
        <Header />

        {/* ----About Home---- */}
        <div className="h-80 bg-no-repeat bg-center bg-cover bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.9)),url('assets/header-bg.jpg')]">
          <div className="max-w-7xl mx-auto h-full text-white flex flex-col justify-center items-center">
            <h2 className="text-4xl font-semibold uppercase tracking-widest">
              About us
            </h2>
            <div className="flex gap-2 text-lg font-semibold">
              <a
                className="after:content-[' '] after:bg-red-500 after:m-auto after:block after:w-0 after:h-[2px] after:ease-in after:duration-300 after:hover:w-full cursor-pointer"
                href="/"
              >
                Home
              </a>
              <h2> / About us</h2>
            </div>
          </div>
        </div>

        {/* Details for company */}
        <DetailsCompany />
      </div>
    </>
  );
}

export default About;

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
          <div className="max-w-7xl mx-auto h-full text-3xl font-semibold text-white flex justify-center items-center">
            <a
              className="hover:border-b hover:border-red-600 ease-in-out duration-300"
              href="/"
            >
              Home
            </a>
            <h2>/ About us</h2>
          </div>
        </div>

        {/* Details for company */}
        <DetailsCompany />
      </div>
    </>
  );
}

export default About;

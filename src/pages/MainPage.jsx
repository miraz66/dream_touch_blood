import Headers from "../components/Headers";

function MainPage() {
  return (
    <>
      <div className="">
        {/* --headers */}
        <Headers />

        {/* homeContainer */}
        <div className="bg-[url('/img/hero-pattern.svg')]"></div>
      </div>
    </>
  );
}

export default MainPage;

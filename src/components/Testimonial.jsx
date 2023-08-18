import TestimonyFeatImg from "../assets/testimonyFeatImg.jpg";

export default function Testimonial() {
  return (
    <>
      <div className="bg-no-repeat bg-center bg-cover bg-[url('assets/testimony_feat_bg.jpg')]">
        <div className="max-w-7xl mx-auto">
          <div className="1/2"></div>
          <div className="1/2 ">
            <img
              className="w-32"
              src={TestimonyFeatImg}
              alt="TestimonyFeatImg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faLocationArrow,
  faPhone,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

const supportLink = {
  LinkNameFirst: [
    { name: "Thalassemia", link: "" },
    { name: "Myelodysasia", link: "" },
    { name: "Hemolytimia ", link: "" },
    { name: "Hyrcoagulable", link: "" },
    { name: "Sicklenemiaxs", link: "" },
  ],
  LinkNameSecond: [
    { name: "Cell Elofrosis", link: "" },
    { name: "Blood Count", link: "" },
    { name: "Ychromas Eosis", link: "" },
    { name: "Thrombo Xtosis", link: "" },
    { name: "Aplastic Anemia", link: "" },
  ],
};

function Footer() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-10 pt-20">
            <h2 className="w-1/4 text-gray-300 lg:text-center font-bold text-3xl lg:text-4xl 2xl:text-5xl">
              <span className="text-red-600">Blood</span>{" "}
              <span className="font-serif">Donate</span>
            </h2>
            <p className="w-3/4 text-gray-200">
              We are world largest and trustful blood donation center. We have
              been working since 1973 with a prestigious vision to helping
              patient to provide blood. We are working all over the world,
              organizing blood donation campaign to grow awareness among the
              people to donate blood.
            </p>
          </div>

          <p className="my-16 h-[1px] bg-slate-500 w-full"></p>

          <div className="flex gap-10">
            <div className="w-1/4">
              <ul className="text-white">
                <li className="pb-6 text-3xl text-gray-100">CONTACT US</li>
                <li className="flex gap-5 pb-4">
                  <FontAwesomeIcon
                    className="text-red-600 pt-1"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                  <div className="flex flex-col text-gray-200 gap-1">
                    <a
                      href=""
                      className="hover:text-red-500 ease-in-out duration-500"
                    >
                      support@donation.com
                    </a>
                    <a
                      href=""
                      className="hover:text-red-500 ease-in-out duration-500"
                    >
                      helpme@donation.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-5 pb-4">
                  <FontAwesomeIcon
                    className="text-red-600 pt-1"
                    icon={faLocationArrow}
                  ></FontAwesomeIcon>
                  <p className="text-gray-200">
                    Road-2,3/A East Khulna Khulna-3100, Bangladesh
                  </p>
                </li>
                <li className="flex gap-5">
                  <FontAwesomeIcon
                    className="text-red-600 pt-1"
                    icon={faPhone}
                  ></FontAwesomeIcon>
                  <div className="text-gray-200">
                    <p>Office: (+880) 0823 560 433</p>
                    <p>Cell: (+880) 0723 161 343</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="w-2/4 text-white">
              <h3 className="pb-5 text-3xl text-gray-100">SUPPORT LINKS</h3>
              <div className="flex">
                <ul className="w-1/2">
                  {supportLink.LinkNameFirst.map(({ name, link }, index) => (
                    <li
                      className="pb-3 text-gray-200 flex gap-3 items-center"
                      key={index}
                    >
                      <FontAwesomeIcon
                        className="text-red-500"
                        icon={faCaretRight}
                      ></FontAwesomeIcon>
                      <a
                        className="text-lg hover:text-red-500 ease-in-out duration-300"
                        href={link}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="w-1/2">
                  {supportLink.LinkNameSecond.map(({ name, link }, index) => (
                    <li
                      className="pb-3 text-gray-200 flex gap-3 items-center"
                      key={index}
                    >
                      <FontAwesomeIcon
                        className="text-red-500"
                        icon={faCaretRight}
                      ></FontAwesomeIcon>
                      <a
                        className="text-lg hover:text-red-500 ease-in-out duration-300"
                        href={link}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-1/4">
              <h3 className="text-3xl text-gray-100 pb-5">SUBSCRIBE US</h3>
              <p className="pb-5 text-gray-200">
                Signup for regular newsletter and stay up to date with our
                latest news.
              </p>
              <form action="">
                <input
                  className="h-12 pl-3 bg-gray-20 rounded-sm"
                  type="text"
                  placeholder="Enter Your Email"
                />
                <button className="mt-3 px-5 py-2 bg-red-600 uppercase rounded-sm hover:bg-gray-400 ease-in-out duration-300">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>

        <p className="mt-14 h-[1px] bg-slate-600 w-full"></p>

        <div className="py-5">
          <h6 className=" text-gray-500 text-center">
            Copyright 2018 - Blood Donate by BlueWindLab. All Rights Reserved.
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;

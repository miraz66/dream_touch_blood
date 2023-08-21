import PropTypes from "prop-types";

export default function CampainCard({
  title,
  paragraph,
  images,
  time,
  location,
  date,
}) {
  return (
    <>
      <div className="flex flex-wrap bg-gray-100 hover:shadow-xl hover:shadow-gray-300 ease-out duration-300">
        <div
          className={
            "w-full max-md:h-60 md:w-1/3 bg-no-repeat bg-center bg-cover " +
            images
          }
        ></div>

        <div className="md:w-2/3 p-7">
          <div className="flex font-serif gap-1 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>

            <p>{date}</p>
          </div>
          <h3 className="text-2xl py-3">{title}</h3>

          <p className="text-sm md:text-base text-gray-700">{paragraph}</p>

          <div className="flex gap-1 md:gap-5 flex-wrap pt-5 text-gray-700 ">
            <h6 className="flex gap-1 font-serif items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              {time}
            </h6>
            <h6 className="flex gap-1 font-serif items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-red-600"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>

              {location}
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

CampainCard.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

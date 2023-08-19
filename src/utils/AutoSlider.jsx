import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function AutoSlider({ cardsData, css }) {
  const [people] = useState(cardsData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <div className={`relative flex overflow-hidden ${css}`}>
        {people.map((person, personIndex) => {
          let position = " translate-x-full";
          if (personIndex === index) {
            position = " opacity-95 translate-x-0";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = " -translate-x-full";
          }
          return (
            <article
              key={person.id}
              className={`absolute opacity-0 ease-linear duration-500 ${position}`}
            >
              {person.content}
            </article>
          );
        })}

        <div className="hidden">
          <button
            className="absolute top-[200px] translate-x-1/2 grid place-items-center ease-in-out duration-200 left-0"
            onClick={() => setIndex(index - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            className="absolute top-[200px] translate-x-1/2 grid place-items-center ease-in-out duration-200 right-0"
            onClick={() => setIndex(index + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="ml-5 md:ml-16 mt-4 flex justify-start">
        {people.map((_, i) => (
          <button
            key={i}
            className={`mx-1 w-4 h-4 rounded-full ${
              i === index ? "bg-red-500" : "border-2 border-gray-400"
            }`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </>
  );
}

AutoSlider.propTypes = {
  cardsData: PropTypes.array.isRequired,
  css: PropTypes.string.isRequired,
};

export default AutoSlider;

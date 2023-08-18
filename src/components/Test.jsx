import { useState, useEffect } from "react";
import data from "../assets/Data";

function App() {
  const [people] = useState(data);
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
    <section className="max-w-md mx-auto">
      <div className="mx-auto mt-4 max-w-md text-center relative flex overflow-hidden h-[480px] bg-red-300">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
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
              key={id}
              className={`absolute opacity-0 ease-linear duration-500 ${position}`}
            >
              <img src={image} alt={name} className="w-20 h-20 " />
              <h4 className="text-red-500 uppercase">{name}</h4>
              <p className="capitalize mb-3 text-gray-800">{title}</p>
              <p className="text">{quote}</p>
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

      <div className="flex justify-center mt-4">
        {people.map((_, i) => (
          <button
            key={i}
            className={`mx-1 w-3 h-3 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setIndex(i)}
          ></button>
        ))}
      </div>
    </section>
  );
}

export default App;
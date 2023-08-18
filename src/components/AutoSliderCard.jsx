import { useEffect, useState } from "react";
import Card from "./test/TestimonialCard";
import DoctorImage from "../assets/image-Doctor.jpg";
// import data from "../assets/Data";

// const delay = 5000;

const cardsData = [
  {
    id: 1,
    title: "Donor Opinion",
    paragraph:
      "I proudly donate blood on a regular basis because it gives others someting they desperately need to survive. Just knowing i cian make a difference in someone else's life makes me feel great!",
    name: "Brandon Munson",
    address: "khulna,Bangladesh",
    image: { DoctorImage },
  },
  {
    id: 2,
    title: "Donor Opinion",
    paragraph: `I have been a donar since high school.Aithough i hava no been a donaor ever year, i always want to give to the humen rase. i love to help others! Moreover it gives a real peace in mind.`,
    name: "Brandon Munson",
    address: "khulna,Bangladesh",
    image: { DoctorImage },
  },
  {
    id: 3,
    title: "Donor Opinion",
    paragraph:
      "I wish I could tell you my donor how grateful i am for your selfiess act.You gave me new life. We may be coworkers of schoolmates of just two in the same cammunity. I'm very grateful to you.",
    name: "Brandon Munson",
    address: "khulna,Bangladesh",
    image: { DoctorImage },
  },
];

function AutoSliderCard() {
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
      <div className="mt-4 text-center relative flex overflow-hidden h-[480px] bg-red-300">
        {people.map((person, personIndex) => {
          const { id, image, name, paragraph, address, title } = person;
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
              <Card
                name={name}
                image={image}
                pra={paragraph}
                header={title}
                address={address}
              />
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

      <div className="mt-4 flex justify-center">
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
    </>
  );
}

export default AutoSliderCard;

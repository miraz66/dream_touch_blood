import { useEffect, useState } from "react";
import Card from "./test/TestimonialCard";
import DoctorImage from "../assets/image-Doctor.jpg";

// const delay = 5000;

const cardsData = [
  {
    id: 1,
    paragraph:
      "I proudly donate blood on a regular basis because it gives others someting they desperately need to survive. Just knowing i cian make a difference in someone else's life makes me feel great!",
    name: "Brandon Munson",
    address: "khulna,Bangladesh",
  },
  {
    header: "Donor Opinion",
    paragraph: `I have been a donar since high school.Aithough i hava no been a donaor ever year, i always want to give to the humen rase. i love to help others! Moreover it gives a real peace in mind.`,
    name: "Brandon Munson",
    address: "khulna,Bangladesh",
  },
  {
    header: "Donor Opinion",
    paragraph:
      "I wish I could tell you my donor how grateful i am for your selfiess act.You gave me new life. We may be coworkers of schoolmates of just two in the same cammunity. I'm very grateful to you.",
    name: "Brandon Munson",
    address: "khulna,Bangladesh",
  },
];

// function Slideshow() {
//   const [index, setIndex] = useState(0);
//   const timeoutRef = useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === DonarTestimonial.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="mx-auto overflow-hidden max-w-lg">
//       <div
//         className="ease-out duration-1000"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {/* {DonarTestimonial.map((data, index) => (
//           <div className="inline-block" key={index}>
//             <TestimonialCard header={data.header} pra={data.paragraph} />
//           </div>
//         ))} */}

//         <p>{}</p>
//       </div>

//       <div className="text-center">
//         {DonarTestimonial.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ... (previous imports and code)

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
    }, 5000); // Change card every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-full max-w-lg overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentCard * 100}%)` }}
        >
          {cardsData.map((card, index) => (
            <Card key={index} header={card.header} pra={card.paragraph} />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {cardsData.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-3 h-3 rounded-full ${
                index === currentCard ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentCard(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;

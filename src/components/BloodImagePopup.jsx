// BloodImagePopup.js
import { useEffect } from "react";
import bloodImage from "../assets/blood-image.png"; // Replace this with the actual path to your blood image

const BloodImagePopup = () => {
  // const [bloodImages, setBloodImages] = useState([]);

  useEffect(() => {
    // Function to create a random blood image element
    const createBloodImage = () => {
      const bloodImageElement = document.createElement("img");
      bloodImageElement.src = bloodImage;
      bloodImageElement.classList.add("blood-image");
      bloodImageElement.style.top = `${Math.random() * 100}vh`;
      bloodImageElement.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(bloodImageElement);
      document.body.style.overflow = "hidden";
      // Remove the blood image after 2 seconds
      setTimeout(() => {
        document.body.removeChild(bloodImageElement);
      }, 10000);
    };

    // Function to generate blood images periodically
    const generateBloodImages = () => {
      const intervalId = setInterval(() => {
        createBloodImage();
      }, 1000);

      //   // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    };

    // Start generating blood images on component mount
    generateBloodImages();
  }, []);

  return <></>;
};

export default BloodImagePopup;

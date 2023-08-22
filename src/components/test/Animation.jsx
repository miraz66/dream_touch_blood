import { useEffect } from "react";

export default function Animation() {
  useEffect(() => {
    const animationRight = document.querySelectorAll(".animationRight");
    const animationLeft = document.querySelectorAll(".animationLeft");
    const animationUp = document.querySelectorAll(".animationUp");
    const animationDown = document.querySelectorAll(".animationDown");
    const animationPopUP = document.querySelectorAll(".animationPopUP");
    const animation3D = document.querySelectorAll(".animation3D");

    window.addEventListener("scroll", chackBoxs);

    function chackBoxs() {
      const triggerButton = (window.innerHeight / 5) * 4;

      animationRight.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationLeft.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationDown.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationUp.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationPopUP.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animation3D.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }

    chackBoxs();
  }, []);
}

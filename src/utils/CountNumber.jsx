import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Counter = ({ startValue, endValue, duration, css }) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    window.addEventListener("scroll", ChackBoxs);

    const boxTargetCount = document.querySelectorAll(".boxTarget");

    function ChackBoxs() {
      const triggerButton = (window.innerHeight / 5) * 4;

      boxTargetCount.forEach((boxNum) => {
        const boxTop = boxNum.getBoundingClientRect().top;
        if (boxTop < triggerButton) {
          Count();
        }
      });
    }

    function Count() {
      const step = Math.ceil((endValue - startValue) / (duration / 10));
      const timer = setInterval(() => {
        setCount((prevCount) => {
          const nextCount = prevCount + step;
          if (step > 0 ? nextCount >= endValue : nextCount <= endValue) {
            clearInterval(timer);
            return endValue;
          }
          return nextCount;
        });
      }, 10);
      return () => clearInterval(timer);
    }
    ChackBoxs();
  });

  return <div className={css}>{count}</div>;
};

Counter.propTypes = {
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  css: PropTypes.string.isRequired,
};
export default Counter;

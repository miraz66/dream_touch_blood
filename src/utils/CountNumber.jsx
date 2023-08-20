import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Counter = ({ startValue, endValue, duration, css }) => {
  const [count, setCount] = useState(startValue);

  useEffect(() => {
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
  }, [startValue, endValue, duration]);

  return <div className={css}>{count}</div>;
};

Counter.propTypes = {
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  css: PropTypes.string.isRequired,
};
export default Counter;

import React, { useEffect, useState } from "react";
import classes from "./TestingComponent.module.css";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#91C49F",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#91C49F",
];
const delays = 2500;

const TestingComponent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) => {
          return prevIndex === colors.length - 4 ? 0 : prevIndex + 1;
        }),
      delays
    );
  }, [index]);

  return (
    <div className={classes.slideshow}>
      <div
        className={classes.slideshowSlider}
        style={{ transform: `translate3d(${-index * 25}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <div className={classes.slideWrapper}>
            <div
              className={classes.slide}
              key={index}
              style={{ backgroundColor }}
            >
              {" "}
            </div>
          </div>
        ))}
      </div>

      {/* <div className={classes.slideshowDots}>
        {colors.map((_, idx) => (
          <div key={idx} className={classes.slideshowDot}>
            {" "}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TestingComponent;

// import classes from "./TestingComponent.module.css";

// const TestingComponent = () => {
//   return <div className={classes.testdiv}></div>;
// };

// export default TestingComponent;

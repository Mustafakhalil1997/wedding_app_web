import React, { useEffect, useState, useCallback } from "react";
import classes from "./Slideshow.module.css";
import img1 from "./images/colors.jpg";
import img2 from "./images/1623286023435.jpg";
import img3 from "./images/1623286435301.jpg";

// console.log("image is, ", img1);

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

const dummyGroups = [
  {
    name: "band1",
    image: img1,
    number: "358728249",
  },
  {
    name: "band2",
    image: img2,
    number: "358728249",
  },
  {
    name: "band3",
    image: img3,
    number: "358728249",
  },
  {
    name: "band4",
    image: img1,
    number: "358728249",
  },
  {
    name: "band5",
    image: img2,
    number: "358728249",
  },
  {
    name: "band6",
    image: img3,
    number: "358728249",
  },
  {
    name: "band7",
    image: "",
    number: "358728249",
  },
  {
    name: "band8",
    image: "",
    number: "358728249",
  },
];

// console.log("first image, ", dummyGroups[0].image.img);

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [danceGroups, setDanceGroups] = useState();

  const fetchDanceGroups = useCallback(async () => {
    const url =
      "https://weddingproject2-ce55f-default-rtdb.firebaseio.com/groups.json";

    try {
      const response = await fetch(url);

      if (!response.ok) {
        console.log("Falied to fethc");
        throw new Error("Falied to fetch groups");
      }
      const data = await response.json();
      console.log("results", data);

      const transformedGroups = data.map((group) => {
        return {
          name: group.name,
          image: group.image,
        };
      });
      setDanceGroups(transformedGroups);
    } catch (error) {
      console.log(error, "failed");
    }
  }, []);

  /* uncomment later when we update the server with groups*/
  //   useEffect(() => {
  //     fetchDanceGroups();
  //   }, [fetchDanceGroups]);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) => {
          return prevIndex === colors.length - 4 ? 0 : prevIndex + 1;
        }),
      delays
    );
  }, [index, fetchDanceGroups]);

  return (
    <React.Fragment>
      <div className={classes.slideshow}>
        <div
          className={classes.slideshowSlider}
          style={{ transform: `translate3d(${-index * 25}%, 0, 0)` }}
        >
          {dummyGroups.map((group, index) => (
            <div className={classes.slideWrapper}>
              <div className={classes.slide} key={index}>
                {/* <img src={img} /> */}
                <img src={group.image} />
                <div className={classes.description}>{group.name}</div>
              </div>
            </div>
          ))}
          {/* {colors.map((backgroundColor, index) => (
          <div className={classes.slideWrapper}>
            <div
              className={classes.slide}
              key={index}
              style={{ backgroundColor }}
            ></div>
          </div>
        ))} */}
        </div>

        {/* <div className={classes.slideshowDots}>
        {colors.map((_, idx) => (
          <div key={idx} className={classes.slideshowDot}>
            {" "}
          </div>
        ))}
      </div> */}
      </div>
    </React.Fragment>
  );
};

export default Slideshow;

// import classes from "./TestingComponent.module.css";

// const TestingComponent = () => {
//   return <div className={classes.testdiv}></div>;
// };

// export default TestingComponent;

import React from "react";
import Slideshow from "../Components/Slideshow/Slideshow";

const HomePage = () => {
  return (
    <React.Fragment>
      <p style={{ fontSize: "1.5rem", color: "white" }}>
        This is the main Page
      </p>
      <Slideshow />
    </React.Fragment>
  );
};

export default HomePage;

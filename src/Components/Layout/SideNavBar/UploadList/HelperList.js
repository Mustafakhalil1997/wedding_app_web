import React from "react";
import classes from "./HelperList.module.css";

const HelperList = (props) => {
  const { changeHandler, handleClose, handleSubmit, show, onBlur } = props;

  const cssClasses = [
    classes.uploadfile_view,
    show === "entering"
      ? classes.showview
      : show === "exiting"
      ? classes.closeview
      : null,
  ];

  return (
    <div className={cssClasses.join(" ")} onBlur={onBlur}>
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button className={classes.close_button} onClick={handleClose}>
          Close
        </button>
        <button className={classes.submit_button} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default HelperList;

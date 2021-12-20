import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Card from "../ui/Card";

import classes from "./RegisterForm.module.css";

const DetailsForm = (props) => {
  const mobileNumberRef = useRef();
  const addressRef = useRef();
  const email = props.email;
  const fullName = props.fullName;

  const history = useHistory();

  const registerRequest = async () => {
    const enteredMobileNumber = mobileNumberRef.current.value;
    const enteredAddress = addressRef.current.value;

    console.log("register here");
    const url =
      "https://weddingproject2-ce55f-default-rtdb.firebaseio.com/users.json";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        mobileNumber: enteredMobileNumber,
        address: enteredAddress,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    registerRequest();
    history.replace("/profile");
  };

  return (
    <React.Fragment>
      <Card>
        <form onSubmit={submitHandler} className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              ref={mobileNumberRef}
              id="mobileNumber"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input
              type="address"
              name="address"
              ref={addressRef}
              id="address"
              required
            />
          </div>
          <div className={classes.actions}>
            <button>Skip</button>
          </div>
          <div className={classes.actions}>
            <button>Add Details</button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default DetailsForm;

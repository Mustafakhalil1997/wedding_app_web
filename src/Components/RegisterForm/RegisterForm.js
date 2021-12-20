import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { tokenActions } from "./../../store/tokenSlice";

import classes from "./RegisterForm.module.css";
import Card from "../ui/Card";
import DetailsForm from "./DetailsForm";

const RegisterForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const fullNameRef = useRef();

  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [error, setError] = useState("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const registerRequest = async () => {
    setError("");
    const fullName = fullNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    setEmail(enteredEmail);
    setFullName(fullName);

    console.log("register here");
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAioK_0pdMEniIqmQ97K2HkmaaYWoSo8Wk";

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setEmailIsValid(true);
          setPasswordIsValid(true);
          return response.json();
        } else {
          return response.json().then((data) => {
            // show an error modal
            console.log("data ", data.error.message);
            setEmailIsValid(false);
            const errorMessage = data.error.message;
            setError(errorMessage);
            // setErrorMessage(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("value ", data);
        const idToken = data.idToken;
        console.log("idToken ", idToken);
        dispatch(tokenActions.loginHandler(idToken)); // log user in after registering
        setIsSubmitted(true);
        setError("");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    registerRequest();
  };

  return (
    <React.Fragment>
      {isSubmitted && <DetailsForm email={email} fullName={fullName} />}
      {!isSubmitted && (
        <Card>
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.control}>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                ref={fullNameRef}
                id="fullName"
                required
              />
              {error.length !== 0 && <p>Email Already Exists</p>}
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                id="email"
                required
              />
              {error.length !== 0 && <p>Email Already Exists</p>}
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                ref={passwordRef}
                id="password"
                required
              />
              {!passwordIsValid && <p>Password is incorrect</p>}
            </div>
            <div className={classes.actions}>
              <button>Register</button>
            </div>
          </form>
        </Card>
      )}
    </React.Fragment>
  );
};

export default RegisterForm;

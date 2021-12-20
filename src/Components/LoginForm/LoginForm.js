import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "../ui/Card";
import { tokenActions } from "./../../store/tokenSlice";

import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const history = useHistory();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const setErrorMessage = (errorMessage) => {
    if (errorMessage === "EMAIL_NOT_FOUND") {
      setEmailIsValid(false);
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
      setEmailIsValid(true);
    }
  };

  const dispatch = useDispatch();
  // const token = useSelector((state) => state.idToken.idToken);

  const loginRequest = async (email, password) => {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAioK_0pdMEniIqmQ97K2HkmaaYWoSo8Wk";

    await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
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
            const errorMessage = data.error.message;
            setErrorMessage(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log("value ", data);
        const idToken = data.idToken;
        console.log("idTokennn ", idToken);
        dispatch(tokenActions.loginHandler(idToken));
        history.replace("/profile");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log(enteredEmail);
    console.log(enteredPassword);

    loginRequest(enteredEmail, enteredPassword);
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" ref={emailRef} id="email" required />
          {!emailIsValid && <p>There is no account with the provided email</p>}
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
          <button>Login</button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;

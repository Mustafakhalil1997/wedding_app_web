import React from "react";
import { useSelector } from "react-redux";

import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
// import TestingComponent from "./TestingComponent";
import TestingComponent from "./TestingComponent";

function App() {
  const isLoggedIn = useSelector((state) => state.idToken.userIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {!isLoggedIn && (
          <Route path="/login">
            <LoginPage />
          </Route>
        )}

        <Route path="/register">
          <RegisterPage />
        </Route>

        {isLoggedIn && (
          <Route path="/profile">
            <ProfilePage />
          </Route>
        )}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

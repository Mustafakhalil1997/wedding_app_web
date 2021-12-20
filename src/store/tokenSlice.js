import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");
const initialState = {
  idToken: initialToken || "",
  userIsLoggedIn: initialToken ? true : false,
};

const tokenSlice = createSlice({
  name: "idToken",
  initialState: initialState,
  reducers: {
    logoutHandler(state) {
      state.idToken = "";
      state.userIsLoggedIn = false;
      localStorage.removeItem("token");
    },

    loginHandler(state, action) {
      state.idToken = action.payload;
      state.userIsLoggedIn = true;
      console.log("action Payload", action.payload);
      localStorage.setItem("token", action.payload);
      console.log("action Payload", action.payload);
      console.log("actionsss");
    },
  },
});

export const tokenActions = tokenSlice.actions;

export default tokenSlice;

import sidebarSlice from "./sidebarSlice";
import tokenSlice from "./tokenSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    idToken: tokenSlice.reducer,
    sidebar: sidebarSlice.reducer,
  },
});

export default store;

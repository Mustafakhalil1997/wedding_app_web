import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: initialState,
  reducers: {
    toggleSidebar(state) {
      const value = state.sidebarOpen;
      state.sidebarOpen = !value;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice;

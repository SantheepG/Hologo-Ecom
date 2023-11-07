// store.js
import { configureStore } from "@reduxjs/toolkit";

import DashboardReducer from "./DashboardReducer.reducer";

const store = configureStore({
  reducer: DashboardReducer,
});

export default store;

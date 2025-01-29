import { configureStore } from "@reduxjs/toolkit";
import details from "../reducers/user/details";
import adminsList from "../reducers/superAdmin/adminsList";

export default configureStore({
  reducer: {
    user: details,
    adminsList: adminsList,
  },
});

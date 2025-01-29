import { createSlice } from "@reduxjs/toolkit";

const adminListSlice = createSlice({
  name: "adminList",
  initialState: {
    admins: [],
  },
  reducers: {
    setAdmins: (state, action) => {
      state.admins = action.payload;
    },
  },
});

export const { setAdmins } = adminListSlice.actions;
export default adminListSlice.reducer;

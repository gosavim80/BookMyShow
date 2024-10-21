import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: null,  // Default to null, no user at the start
  },
  reducers: {
    // This reducer takes the action payload (the user data) and sets it in the state
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Export the action to be used in other components
export const { setUser } = userSlice.actions;
export default userSlice.reducer;

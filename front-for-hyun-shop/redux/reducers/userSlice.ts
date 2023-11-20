import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
  loginUserName: string;
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  loginUserName: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    initializeLoginUserName(state) {
      state.loginUserName = "";
    },
    initialzeIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { initializeLoginUserName, initialzeIsLoggedIn } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
export default userSlice.reducer;

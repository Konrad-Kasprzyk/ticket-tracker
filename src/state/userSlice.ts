import { createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  logged: boolean;
}

const initialState: UserInterface = {
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.logged = true;
    },
    logOut: (state) => {
      state.logged = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;

//import { useSelector, useDispatch } from "react-redux";
//import { logIn } from "../state/userSlice";
//import { RootState } from "../state/store";

//const logged: boolean = useSelector((state: RootState) => state.user.logged);
//const dispatch = useDispatch();

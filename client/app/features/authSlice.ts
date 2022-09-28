import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../interfaces/user_interface";

interface AuthSliceState {
  user: IUser | null;
}

interface SetCredentialsProps {
  user: IUser;
}

const initialState: AuthSliceState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<SetCredentialsProps>) => {
      state.user = action.payload.user;
      console.log(action.payload.user);
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

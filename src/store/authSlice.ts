import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    password: string;
}
  
  interface AuthState {
    user: User | null;
  }

const initialState: AuthState = {
  user: null
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
          },

        logout: () => initialState
    }
  });
  
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
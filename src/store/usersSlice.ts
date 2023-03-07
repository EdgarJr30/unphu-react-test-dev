import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    names: string;
    lastname1: string;
    lastname2: string;
    cedula: string;
    age: number;
    gender: string;
    address: string;
    addressOptional?: string;
    telephone: string;
    email: string;
    maritalStatus: string;
    hasKids: string;
    birthdate: string;
}
  
  interface UsersState {
    users: User[];
  }

const initialState = {
  users: []
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      addUser: (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
      }
    }
  });
  
export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
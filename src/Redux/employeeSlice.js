import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    /*data employee*/
    addEmployee: (state, action) => {
      //stocker dans le local storage les données
      localStorage.setItem("employee", JSON.stringify(action.payload));
      state.push(action.payload);
    },
  },
});

export { employeeSlice };

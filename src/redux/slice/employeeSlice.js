import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: [],
    selectedEmployees: [],
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
      state.selectedEmployees = state.selectedEmployees.filter(
        (id) => id !== action.payload
      );
    },
    toggleSelectEmployee: (state, action) => {
      const id = action.payload;
      if (state.selectedEmployees.includes(id)) {
        state.selectedEmployees = state.selectedEmployees.filter(
          (selectedId) => selectedId !== id
        );
      } else {
        state.selectedEmployees.push(id);
      }
    },
    clearSelectedEmployees: (state) => {
      state.selectedEmployees = [];
    },
  },
});

export const {
  setEmployees,
  deleteEmployee,
  toggleSelectEmployee,
  clearSelectedEmployees,
} = employeeSlice.actions;

export default employeeSlice.reducer;

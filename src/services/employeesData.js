import axios from "axios";
import { setEmployees } from "../redux/slice/employeeSlice";

export function fetchEmployeeData() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("Employee data...", response);
      if (!response.data) {
        throw new Error(response.data.message);
      }

      dispatch(setEmployees(response?.data));
    } catch (error) {
      console.log("fetching employee data error...", error);
    }
  };
}

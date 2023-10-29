import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../services/employeesData";
import Card from "./Card";
import styles from "./EmployeeDetails.module.css";
import {
  clearSelectedEmployees,
  deleteEmployee,
} from "../redux/slice/employeeSlice";

const Employees = () => {
  const { employees } = useSelector((state) => state.employee);
  const selectedEmployees = useSelector(
    (state) => state.employee.selectedEmployees
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, []);

  const handleClearSelected = () => {
    dispatch(clearSelectedEmployees());
  };

  const handleDeleteSelected = () => {
    selectedEmployees.forEach((id) => dispatch(deleteEmployee(id)));
  };

  return (
    <div className={styles.container}>
      {selectedEmployees.length > 0 && (
        <div className={styles["button-container"]}>
          <button onClick={handleClearSelected}>Clear Selected</button>
          <button
            className={styles["delete-button"]}
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </button>
        </div>
      )}
      <div className={styles["card-container"]}>
        {employees.length === 0 ? (
          <div className='spinner'></div>
        ) : (
          employees.map((employee) => (
            <Card employee={employee} key={employee.id} className='card' />
          ))
        )}
      </div>
    </div>
  );
};

export default Employees;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeData } from "../services/employeesData";
import Card from "./Card";
import styles from "./EmployeeDetails.module.css";

const Employees = () => {
  const { employees } = useSelector((state) => state.employee);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, []);

  return employees.length === 0 ? (
    <div className='spinner'></div>
  ) : (
    <div className={styles["card-container"]}>
      {employees.map((employee) => (
        <Card employee={employee} key={employee.id} className='card' />
      ))}
    </div>
  );
};

export default Employees;

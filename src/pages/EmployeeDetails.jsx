import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaMapMarker, FaBuilding } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "./EmployeeDetail.module.css";
const EmployeeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const employees = useSelector((state) => state.employee.employees);
  const employee = employees.find((emp) => emp.id.toString() === id);

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <IoMdArrowRoundBack />
        <p>back</p>
      </button>
      <div className={styles["address-details"]}>
        <h2>{employee.name}</h2>
        <p>ID: {employee.id}</p>
        <p>Username: {employee.username}</p>
        <p>Email: {employee.email}</p>
        <p>Phone: {employee.phone}</p>

        <div>
          <p>
            <FaMapMarker /> Address: {employee.address.street},{" "}
            {employee.address.suite}, {employee.address.city} -{" "}
            {employee.address.zipcode}
          </p>
          <p>
            <FaBuilding /> Company: {employee.company.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;

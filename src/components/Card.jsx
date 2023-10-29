import React from "react";
import styles from "./Card.module.css";
import { BsFillTrash3Fill } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteEmployee,
  toggleSelectEmployee,
} from "../redux/slice/employeeSlice";

const Card = ({ employee }) => {
  const navigate = useNavigate();

  const selectedEmployees = useSelector(
    (state) => state.employee.selectedEmployees
  );
  const dispatch = useDispatch();

  const handleDelete = (event, id) => {
    event.stopPropagation();
    dispatch(deleteEmployee(id));
  };

  const handleToggleSelect = (event, id) => {
    event.stopPropagation();
    dispatch(toggleSelectEmployee(id));
  };

  const handleUpdate = (event, id) => {
    event.stopPropagation();
  };

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/employeeDetails/${employee.id}`)}
    >
      <div>
        <h2>{employee.name}</h2>
        <p>ID: {employee.id}</p>
        <p>Username: {employee.username}</p>
        <p>Email: {employee.email}</p>
        <p>Phone: {employee.phone}</p>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.delete}
          onClick={(event) => handleDelete(event, employee.id)}
        >
          <BsFillTrash3Fill /> Delete
        </button>
        <button
          className={styles.update}
          onClick={(event) => handleUpdate(event, employee.id)}
        >
          <RxUpdate /> Update
        </button>

        <label onClick={(event) => event.stopPropagation()}>
          <input
            type='checkbox'
            checked={selectedEmployees.includes(employee.id)}
            onChange={(event) => handleToggleSelect(event, employee.id)}
          />
        </label>
      </div>
    </div>
  );
};

export default Card;

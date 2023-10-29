import React from "react";
import styles from "./Card.module.css";
import { BsFillTrash3Fill } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";

const Card = ({ employee }) => {
  return (
    <div className={styles.card}>
      <div>
        <h2>{employee.name}</h2>
        <p>ID: {employee.id}</p>
        <p>Username: {employee.username}</p>
        <p>Email: {employee.email}</p>
        <p>Phone: {employee.phone}</p>
      </div>

      <div className={styles.buttons}>
        <button className={styles.delete}>
          <BsFillTrash3Fill />
        </button>
        <button className={styles.update}>
          <RxUpdate />
        </button>
      </div>
    </div>
  );
};

export default Card;

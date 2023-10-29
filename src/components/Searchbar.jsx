import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Searchbar.module.css";
import { BiSearchAlt } from "react-icons/bi";
const SearchBar = () => {
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchId.trim() === "") {
      return;
    }

    navigate(`/employeeDetails/${searchId}`);
    setSearchId("");
  };

  return (
    <div className={styles["searchbar-container"]}>
      <div className={styles.searchBar}>
        <input
          type='text'
          placeholder='Search by ID'
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>
          <BiSearchAlt /> <p>Search</p>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

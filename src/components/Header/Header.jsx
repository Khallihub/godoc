import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles["header-container"]}>

      {/* logo */}
      <h1 className={styles["company-name"]}>godoc</h1>

      {/* search bar */}
      <div className={styles["search-container"]}>
        <input
          type="text"
          name="searchQuery"
          className={styles["search-input"]}
          placeholder="Search"
          required
        />
        <button className={styles["search-icon"]}>
          <i className="bx bx-search bx-sm"></i>
        </button>
      </div>

      {/* logout */}
      <div className={styles["logout-container"]}>
        <button className={styles["logout-btn"]}>
          <i className="bx bx-log-out bx-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;

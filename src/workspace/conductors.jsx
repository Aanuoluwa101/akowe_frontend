import React from "react";
import Dashboard from "./dashboard";
import styles from "./conductors.module.css";
import { IconPlus } from "@tabler/icons-react";

const ManageConductors = () => {
  return (
    <Dashboard>
      <div>
        <h3 className={styles.title}>Manage Conductors</h3>
        <div className={styles.createNew}>
          Create new officiator
        </div>

        <div className={styles.displayAllOfficiators}></div>
      </div>
    </Dashboard>
  );
};

export default ManageConductors;

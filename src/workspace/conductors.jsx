import React, { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import styles from "./conductors.module.css";
import { IconPlus, IconX } from "@tabler/icons-react";
import Slide from "@mui/material/Slide";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import EnforcementsCalendar from "./calendar";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ManageConductors = () => {
  // state for the dialog box
  const [open, setOpen] = React.useState(false);
  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  // state for the select
  const [rank, setRank] = React.useState("");

  const handleRankChange = (event) => {
    setRank(event.target.value);
  };

  // get rank data from BE
  useEffect(() => {
    const getAllRanks = async () => {
      try {
        // const endpointToGetRank = `${process.env.REACT_APP_API_URL}/rankings`
        const endpointToGetRank = "https://akowe.onrender.com/api/v1/rankings";
        const getRanks = await axios.get(endpointToGetRank);
        console.log("response", getRanks);
      } catch (error) {}
    };
    getAllRanks();
  }, []);

  return (
    <Dashboard>
      <div>
        <div>
          <h3 className={styles.title}>Manage Officiators</h3>
          <div onClick={handleDialogOpen} className={styles.createNew}>
            Create new officiator
          </div>
          <div>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              onClose={handleDialogClose}
            >
              {/* <DialogTitle>{"Create new officiator"}</DialogTitle> */}
              <DialogContent style={{ position: "relative" }}>
                {/* <IconX className={styles.closeDialog} /> */}
                <section className={styles.dialogForm}>
                  <p className={styles.dialogTitles}>Create new officiator</p>
                  <div className={styles.persona}>
                    <div className={styles.personaInputContainer}>
                      <input type="text" placeholder="Enter officiator name" />
                    </div>
                    <div className={styles.personaSelectContainer}>
                      <select>
                        <option disabled selected value="">
                          What&apos;s their rank...
                        </option>

                        <option></option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.checkboxOverallContainer}>
                    <p className={styles.dialogTitles}>Customize</p>
                    <div className={styles.customizationToSelect}>
                      <div className={styles.individualCheckboxContainer}>
                        <label>Can conduct on weekdays</label>
                        <input type="checkbox" />
                      </div>
                      <div className={styles.individualCheckboxContainer}>
                        <label>Can conduct on Sundays</label>
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div className={styles.customizationToSelect}>
                      <div className={styles.individualCheckboxContainer}>
                        <label>Can read on weekdays</label>
                        <input type="checkbox" />
                      </div>
                      <div className={styles.individualCheckboxContainer}>
                        <label>Can read on Sundays</label>
                        <input type="checkbox" />
                      </div>
                    </div>
                    <div className={styles.customizationToSelect}>
                      <div className={styles.individualCheckboxContainer}>
                        <label>Can preach on weekdays</label>
                        <input type="checkbox" />
                      </div>
                      <div className={styles.individualCheckboxContainer}>
                        <label>Can preach on Sundays</label>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.addEnforcements}>
                    <p className={styles.enforcementTitle}>
                      Add Enforcements <sub>(optional)</sub>
                    </p>
                    <div className={styles.enforcementSelection}>
                      <div>
                        <EnforcementsCalendar />
                      </div>
                      <div>
                        <div className={styles.enforcementSelectContainer}>
                          <select>
                            <option disabled selected value="">
                              Choose officiation type...
                            </option>

                            <option></option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div></div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className={styles.displayAllOfficiators}></div>
      </div>
    </Dashboard>
  );
};

export default ManageConductors;

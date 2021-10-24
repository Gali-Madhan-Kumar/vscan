import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import BasicDatePicker from "./DatePicker";
import BasicSelect from "./Select";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  title: {
    fontWeight: 700,
    fontSize: 18,
    width: "100%",
    textAlign: "center",
    color: "#3d8a94",
    margin: "1rem 0px",
  },
  form: {
    margin: "1rem 0px",
  },
}));

const ActivationForm = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.title}>Activate IMEI Number</div>
      <div className={classes.form}>
        <TextField
          className={classes.textField}
          id="imei"
          placeholder="IMEI Number"
          label="IMEI Number"
          variant="outlined"
        />
      </div>
      <div className={classes.form}>
        <TextField
          className={classes.textField}
          id="vendormobile"
          placeholder="Vendor Mobile"
          label="Vendor Mobile"
          variant="outlined"
        />
      </div>
      <div className={classes.form}>
        <TextField
          className={classes.textField}
          id="grageName"
          placeholder="Garage Name"
          label="Garage Name"
          variant="outlined"
        />
      </div>
      <div className={classes.form}>
        <BasicDatePicker />
      </div>
      <div className={classes.form}>
        <TextField
          className={classes.textField}
          id="agentCode"
          placeholder="Agent Code"
          label="Agent Code"
          variant="outlined"
        />
      </div>
      <div className={classes.form}>
        <BasicSelect />
      </div>
      <div className={classes.form}>
        <Button variant="contained">Activate</Button>
      </div>
    </>
  );
};

export default ActivationForm;

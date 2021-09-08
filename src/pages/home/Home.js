import React from "react";
import { Button, Divider, Grid } from "@material-ui/core";
import "./Home.css";
import CustomTextField from "../../components/TextField/CustomTextField";
import CustomSelect from "../../components/Select/CustomSelect";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#3d8a94",
    color: "white",
    "&:hover": {
      backgroundColor: "#3d8a94",
    },
  },
  divider: {
    backgroundColor: "darkGray",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={8}>
          <div className="title-div">
            <div className="title">
              <span className="title-text">VEHITO SCAN</span>
            </div>
          </div>
          <div className="text-fields">
            <div className="text-field">
              <div className="label">
                <label>IP : </label>
              </div>
              <div className="field">
                <CustomTextField id={"ip"} value={"56789"} />
              </div>
            </div>
            <div className="text-field">
              <div className="label">
                <label>IMEI NUMBER : </label>
              </div>
              <div className="field">
                <CustomTextField id={"imei"} value={"567899999"} />
              </div>
            </div>
          </div>
          <div className="text-fields">
            <div className="text-field">
              <div className="label">
                <label>PORT NUMBER : </label>
              </div>
              <div className="field">
                <CustomTextField id={"portnum"} value={"56789RT"} />
              </div>
            </div>
            <div className="text-field">
              <div className="label">
                <label>VEHICLE BATTERY VOLTAGE : </label>
              </div>
              <div className="field">
                <CustomTextField id={"vehicleVoltage"} value={"200"} />
              </div>
            </div>
          </div>
          <div className="connection-status-main-div">
            <div className="connection-status-inner-div">
              <span>DLC CONNECTION STATUS</span>
            </div>
            <div className="status-div">
              <div className="status">
                <span>Connected</span>
              </div>
            </div>
          </div>
          <Divider className={classes.divider} />
          <div className="pids">
            <label className="pid-label">PID'S : </label>
            <CustomSelect />
          </div>
          <div className="btn-div">
            <Button className={classes.btn} size="small" variant="contained">
              Send
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

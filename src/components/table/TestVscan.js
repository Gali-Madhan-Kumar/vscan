import React, { useState, useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import "./TestVscan.css";
import CustomTextField from "../../components/TextField/CustomTextField";
import { makeStyles } from "@material-ui/core/styles";
import { PostDetailsUsingImei } from "../../api/PostDetailsUsingImei";
import {
  GetDetailsUsingImei,
  getVscanDetails,
} from "../../api/GetDetailsUsingImei";
import ScrollSpy from "../scrollspy/Scrollspy";
import CustomBackdrop from "../backdrop/CustomBackdrop";
import ViewDetailsModal from "../modal/ViewDetailsModal";

const useStyles = makeStyles(() => ({
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

const TestVscan = () => {
  const classes = useStyles();
  const [scanReq, setScanReq] = useState(null);
  const [count, setCount] = useState(0);
  const [imei, setImei] = useState("");
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [viewDetails, setViewDetails] = useState(false);

  const handleToggle = () => {
    setOpen(true);
  };

  const closeToggle = () => {
    setOpen(false);
  };

  const handleGetData = (res) => {
    setScanReq(res.scanReq);
    if (res.scanReq) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    if (scanReq) {
      setTimeout(() => {
        handleToggle();
        getData();
      }, 20000);
    }
    if (!scanReq && scanReq !== null) {
      let result = getVscanDetails(imei);
      result.then((res) => {
        setData(res);
      });
    }
    if (!scanReq && data) {
      closeToggle();
    }
  }, [count, scanReq]);

  const getData = () => {
    let details = GetDetailsUsingImei(imei);
    details.then(handleGetData);
  };

  const sendDetailsUsingImei = () => {
    let details = {
      jobcardId: "dsfdddsfdssdsddsdsdsd",
      vendorId: "96326421051503395525054",
      imei: imei,
      regNo: "KA02BC3456",
      vendorName: "ABCD Garages",
      newReq: false,
      scanReq: true,
      id: 2,
    };
    if (imei !== "") {
      const result = PostDetailsUsingImei(details);
      result.then((response) => {
        if (response.status) {
          handleToggle();
          getData();
        }
      });
    }
  };

  const onChange = (e) => {
    setImei(e.target.value);
  };

  const viewReportBtnHandler = () => {
    setViewDetails(true);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item lg={12}>
          <div className="text-fields">
            <div className="text-field" style={{ width: "55%" }}>
              <div className="label">
                <label>IMEI NUMBER : </label>
              </div>
              <div className="field">
                <CustomTextField
                  placeholder={"Enter IMEI Number"}
                  onChange={onChange}
                  id={"imei"}
                  value={imei}
                />
              </div>
              <div className="btn-div">
                <Button
                  onClick={sendDetailsUsingImei}
                  className={classes.btn}
                  size="medium"
                  variant="contained"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
          {/* <Divider className={classes.divider} />
          <div className="pids">
            <label className="pid-label">PID'S : </label>
            <CustomSelect />
          </div>
          <div className="btn-div">
            <Button className={classes.btn} size="medium" variant="contained">
              Send
            </Button>
          </div> */}
        </Grid>
      </Grid>
      {data && viewDetails && (
        <Grid container spacing={4}>
          <Grid item lg={12}>
            <ScrollSpy data={data} />
          </Grid>
        </Grid>
      )}
      {scanReq === true && <CustomBackdrop open={open} />}
      <ViewDetailsModal
        open={data === null || viewDetails ? false : true}
        message={"Scan Successful"}
        viewReportBtnHandler={viewReportBtnHandler}
      />
    </>
  );
};

export default TestVscan;

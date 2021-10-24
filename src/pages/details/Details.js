import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import DirectSellingTable from "../../components/table/DirectSellingTable";
import TrackTicketsTable from "../../components/table/TrackTicketsTable";
import { Grid, Button } from "@material-ui/core";
import CustomTextField from "../../components/TextField/CustomTextField";
import "./Details.css";
import TestVscan from "../../components/table/TestVscan";
import Header from "../../components/header/Header";
import Dashboard from "../../components/dashboard/Dashboard";
import ManagerAgentTable from "../../components/table/ManagerAgentTable";
import ActivationForm from "../../components/form/ActivationForm";
import DevicesTable from "../../components/table/DevicesTable";
import TrackTicketsModal from "../../components/modal/TrackTicketsModal";
import TicketModal from "../../components/modal/TicketModal";

const data = {
  agentOne: [
    {
      sno: 1,
      agentName: "XYZ",
      agentCode: "0987",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "ABC",
      noOfScans: 20,
    },
    {
      sno: 2,
      agentName: "XYZ",
      agentCode: "0988",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "ABC",
      noOfScans: 20,
    },
    {
      sno: 3,
      agentName: "XYZ",
      agentCode: "0989",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "ABC",
      noOfScans: 20,
    },
    {
      sno: 4,
      agentName: "XYZ",
      agentCode: "0986",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "ABC",
      noOfScans: 20,
    },
  ],
  agentTwo: [
    {
      sno: 1,
      agentName: "ABC",
      agentCode: "0987",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEF",
      noOfScans: 20,
    },
    {
      sno: 2,
      agentName: "ABC",
      agentCode: "0988",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEF",
      noOfScans: 20,
    },
    {
      sno: 3,
      agentName: "ABC",
      agentCode: "0989",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEF",
      noOfScans: 20,
    },
    {
      sno: 4,
      agentName: "ABC",
      agentCode: "0986",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEF",
      noOfScans: 20,
    },
  ],
  agentThree: [
    {
      sno: 1,
      agentName: "ABCD",
      agentCode: "0987",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEFG",
      noOfScans: 20,
    },
    {
      sno: 2,
      agentName: "ABCD",
      agentCode: "0988",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEFG",
      noOfScans: 20,
    },
    {
      sno: 3,
      agentName: "ABCD",
      agentCode: "0989",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEFG",
      noOfScans: 20,
    },
    {
      sno: 4,
      agentName: "ABCD",
      agentCode: "0986",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "DEFG",
      noOfScans: 20,
    },
  ],
  agentFour: [
    {
      sno: 1,
      agentName: "DEF",
      agentCode: "0987",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "GHI",
      noOfScans: 20,
    },
    {
      sno: 2,
      agentName: "DEF",
      agentCode: "0988",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "GHI",
      noOfScans: 20,
    },
    {
      sno: 3,
      agentName: "DEF",
      agentCode: "0989",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "GHI",
      noOfScans: 20,
    },
    {
      sno: 4,
      agentName: "DEF",
      agentCode: "0986",
      imeiNumber: "876543210",
      deviceActivationDate: "23/06/2021",
      garageName: "GHI",
      noOfScans: 20,
    },
  ],
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={props.box} p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100vh",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "20vw",
    height: "100vh",
  },
  tab: {
    color: "#2d7d72",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#3d8a94",
    color: "white",
    "&:hover": {
      backgroundColor: "#3d8a94",
    },
  },
  tabPanel: {
    margin: "auto",
  },
  imeiActivationTab: {
    width: "100%",
  },
  newBtnDiv: {
    margin: "1rem 0px",
    textAlign: "right",
    position: "absolute",
    top: "5rem",
    left: "90vw",
  },
  newBtn: {
    backgroundColor: "#3d8a94",
    color: "white",
    "&:hover": {
      backgroundColor: "#3d8a94",
    },
  },
}));

export default function Details() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [agent, setAgent] = useState("");
  const [row, setRow] = useState();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    imei: "",
    issueType: "",
    description: "",
    additionalComments: "",
    ticketRaisedBy: "",
  });
  const [ticketDetails, setTicketDetails] = useState({
    ticketNumber: "",
    imeiNumber: "",
    issueType: "",
    description: "",
    additionalComments: "",
  });

  const [openTicketModal, setOpenTicketModal] = useState(false);

  const onChange = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClick = (prop) => () => {
    setAgent(prop);
    setRow(
      prop === "agent_one"
        ? data.agentOne
        : prop === "agent_two"
        ? data.agentTwo
        : prop === "agent_three"
        ? data.agentThree
        : data.agentFour
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClose = () => {
    setOpen(false);
  };

  const submitBtnClickHandler = () => {};

  const cancelBtnClickHandler = () => {
    setOpen(false);
  };

  const newBtnClickHandler = () => {
    setOpen(true);
  };

  const ticketClickHandler = (ticketNumber) => {
    setOpenTicketModal(true);
    setTicketDetails({ ...ticketDetails, ticketNumber: ticketNumber });
  };

  const onTicketDetailsChange = () => {};

  const onTicketModalClose = () => {
    setOpenTicketModal(false);
  };

  const cancelTicketModal = () => {
    setOpenTicketModal(false);
  };

  return (
    <>
      <Header />
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="details tabs"
          className={classes.tabs}
        >
          <Tab className={classes.tab} label="Devices" {...a11yProps(0)} />
          <Tab
            className={classes.tab}
            label="Direct Selling Agent"
            {...a11yProps(1)}
          />
          <Tab
            className={classes.tab}
            label="Managers Dashboard"
            {...a11yProps(2)}
          />
          <Tab
            className={classes.tab}
            label="IMEI Activation"
            {...a11yProps(3)}
          />
          <Tab className={classes.tab} label="Test Device" {...a11yProps(4)} />
          <Tab className={classes.tab} label="Tickets" {...a11yProps(5)} />
        </Tabs>
        <TabPanel
          className={classes.tabPanel}
          style={{ width: "80%" }}
          value={value}
          index={0}
        >
          <Grid
            container
            justifyContent="center"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="imei-field">
                <div className="label">
                  <label>IMEI NUMBER : </label>
                </div>
                <div className="field">
                  <CustomTextField placeholder={"Enter IMEI Number"} />
                </div>
                <div>
                  <Button
                    className={classes.btn}
                    size="medium"
                    variant="contained"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
          <DevicesTable />
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={1}>
          <Grid container justifyContent="center">
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="imei-field">
                <div className="label">
                  <label>IMEI NUMBER : </label>
                </div>
                <div className="field">
                  <CustomTextField placeholder={"Enter IMEI Number"} />
                </div>
              </div>
              <div>
                <Button
                  className={classes.btn}
                  size="medium"
                  variant="contained"
                >
                  Search
                </Button>
              </div>
            </Grid>
          </Grid>
          <DirectSellingTable />
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={2}>
          <Dashboard handleClick={handleClick} agent={agent} />
          <div className={"agent-table-div"}>
            {agent !== "" ? <ManagerAgentTable rows={row} /> : ""}
          </div>
        </TabPanel>
        <TabPanel
          box={classes.imeiActivationTab}
          value={value}
          className={classes.tabPanel}
          index={3}
        >
          <ActivationForm />
        </TabPanel>
        <TabPanel
          style={{ width: "80%" }}
          className={classes.tabPanel}
          value={value}
          index={4}
        >
          <TestVscan />
        </TabPanel>
        <TabPanel className={classes.tabPanel} value={value} index={5}>
          <div className={classes.newBtnDiv}>
            <Button
              onClick={newBtnClickHandler}
              className={classes.newBtn}
              variant="contained"
            >
              New
            </Button>
          </div>
          <Grid container justifyContent="center">
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="ticket-div">
                <div className="label">
                  <label>TICKET NUMBER : </label>
                </div>
                <div className="field">
                  <CustomTextField placeholder={"Ticket Number"} />
                </div>
                <div>
                  <Button
                    className={classes.btn}
                    size="medium"
                    variant="contained"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
          <TrackTicketsTable ticketClickHandler={ticketClickHandler} />
          <TrackTicketsModal
            values={values}
            onChange={onChange}
            open={open}
            close={onClose}
            submitClickHandler={submitBtnClickHandler}
            cancelClickHandler={cancelBtnClickHandler}
          />
          <TicketModal
            open={openTicketModal}
            close={onTicketModalClose}
            values={ticketDetails}
            onChange={onTicketDetailsChange}
            cancelClickHandler={cancelTicketModal}
          />
        </TabPanel>
      </div>
    </>
  );
}

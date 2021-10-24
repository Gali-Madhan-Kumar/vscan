import { Grid } from "@material-ui/core";
import React from "react";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";

const Dashboard = (props) => {
  return (
    <Grid container justifyContent="center">
      <Grid style={{ display: "flex", justifyContent: "center" }} item lg={12}>
        <Chip
          style={{ backgroundColor: "#3d8a94" }}
          label="Manager"
          color="primary"
          icon={<FaceIcon />}
        />
      </Grid>
      <Grid
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
        item
        lg={12}
      >
        <Chip
          onClick={props.handleClick("agent_one")}
          style={{
            margin: "0px 2rem",
            backgroundColor: props.agent === "agent_one" ? "#3d8a94" : "",
            color: props.agent === "agent_one" ? "white" : "",
          }}
          clickable
          label="Agent 1"
          icon={
            <FaceIcon
              style={{ color: props.agent === "agent_one" ? "white" : "" }}
            />
          }
          variant={props.agent === "agent_one" ? "contained" : "outlined"}
        />
        <Chip
          clickable
          onClick={props.handleClick("agent_two")}
          style={{
            margin: "0px 2rem",
            backgroundColor: props.agent === "agent_two" ? "#3d8a94" : "",
            color: props.agent === "agent_two" ? "white" : "",
          }}
          label="Agent 2"
          variant={props.agent === "agent_two" ? "contained" : "outlined"}
          icon={
            <FaceIcon
              style={{ color: props.agent === "agent_two" ? "white" : "" }}
            />
          }
        />
        <Chip
          onClick={props.handleClick("agent_three")}
          style={{
            margin: "0px 2rem",
            backgroundColor: props.agent === "agent_three" ? "#3d8a94" : "",
            color: props.agent === "agent_three" ? "white" : "",
          }}
          label="Agent 3"
          icon={
            <FaceIcon
              style={{ color: props.agent === "agent_three" ? "white" : "" }}
            />
          }
          clickable
          variant={props.agent === "agent_three" ? "contained" : "outlined"}
        />
        <Chip
          onClick={props.handleClick("agent_four")}
          style={{
            margin: "0px 2rem",
            backgroundColor: props.agent === "agent_four" ? "#3d8a94" : "",
            color: props.agent === "agent_four" ? "white" : "",
          }}
          icon={
            <FaceIcon
              style={{ color: props.agent === "agent_four" ? "white" : "" }}
            />
          }
          clickable
          variant={props.agent === "agent_four" ? "contained" : "outlined"}
          label="Agent 4"
        />
      </Grid>
    </Grid>
  );
};

export default Dashboard;

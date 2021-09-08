import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { IconButton, Typography } from "@material-ui/core"

import "./Header.css";

import vehitoLogo from "../../assets/images/vehitoLogo.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
    fontSize: "medium",
    fontWeight: 700,
  },
  appBar: {
    backgroundColor: "dimgray", 
    boxShadow: "none",
  }
}));

export default function Header() {
  const classes = useStyles();


  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img className="company-logo" src={vehitoLogo} alt="company_logo" />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            VScan
          </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

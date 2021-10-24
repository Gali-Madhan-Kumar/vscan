import vehitoLogo from "../../assets/images/vehitoLogo.png";
import "./Header.css";
import { useHistory } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import CustomModal from "../modal/CustomModal";
import AvatarDropdownMenu from "../menu/AvatarDropdownMenu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "block",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  btns: {
    textTransform: "capitalize",
  },
}));

export default function Header(props) {
  let history = useHistory();
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [open, setOpen] = React.useState(false);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logoutBtnOnClickHandler = () => {
    setOpen(true);
  };

  const yesBtnClickHandler = () => {
    sessionStorage.clear();
    history.push("/");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mobileMenuId = "menu";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {sessionStorage.getItem("isLoggedIn") ? (
        <div>
          <MenuItem onClick={logoutBtnOnClickHandler}>
            <p>Logout</p>
          </MenuItem>
        </div>
      ) : (
        ""
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{ backgroundColor: "dimgray", boxShadow: "none" }}
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
            Vehito Controller
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {sessionStorage.getItem("isLoggedIn") ? (
              <div style={{ display: "flex" }}>
                <AvatarDropdownMenu logout={logoutBtnOnClickHandler} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      <CustomModal
        message={"Are You sure Do you want to logout?"}
        open={open}
        handleClose={handleClose}
        yesBtnClick={yesBtnClickHandler}
        noBtnClick={handleClose}
      />
    </div>
  );
}

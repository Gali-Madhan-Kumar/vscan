import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "92%",
    },
  },
}));

export default function CustomTextField(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        label={props.label}
        variant="outlined"
        onChange={props.onChange}
      />
    </form>
  );
}

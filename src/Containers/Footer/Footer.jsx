import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Footer({ backgroundColor }) {
  const classes = useStyles();
  const getFullDate = new Date().getFullYear();
  return (
    <div className={classes.root} style={{ backgroundColor }}>
      <span>&copy;{getFullDate} CV.AL</span>
      <span>Beta version 1.0</span>
    </div>
  );
}

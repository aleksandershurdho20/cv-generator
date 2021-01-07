import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const useclasses = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  },
  cvFields: {
    marginBottom: 15,
  },
}));
export default function ExtraInformation() {
  const classes = useclasses();

  return (
    <>
      <Grid item md={4} className="animate__fadeInDown">
        <div>
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Data e Lindjes"
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Patenta"
            variant="outlined"
            fullWidth
          />
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Komebsia"
            variant="outlined"
            fullWidth
          />
        </div>
      </Grid>

      <Grid item md={4} className="animate__fadeInDown">
        <div>
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Vendi i Lindjes"
            variant="outlined"
            fullWidth
          />
          <InputLabel id="demo-simple-select-label">Gjinia</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            style={{ marginBottom: 15 }}
          >
            <MenuItem value={10}>Mashkull</MenuItem>
            <MenuItem value={30}>Femer</MenuItem>
          </Select>
          <TextField
            className={classes.cvFields}
            id="outlined-basic"
            label="Statusi Martesor"
            variant="outlined"
            fullWidth
          />
        </div>
      </Grid>
    </>
  );
}

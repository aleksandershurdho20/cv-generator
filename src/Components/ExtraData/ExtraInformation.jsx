import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React from "react";

// const useclasses = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow:
//       " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
//   },
//   cvFields: {
//     marginBottom: 15,
//   },
// }));
export default function ExtraInformation({ cvData, handleCVFields }) {

  console.log(cvData, "cv props");
  return (
    <>
      <Grid item md={4} className="animate__fadeInDown">
        <div>
          <TextField
            // className={classes.cvFields}
            id="outlined-basic"
            label="Data e Lindjes"
            variant="outlined"
            fullWidth
            name="dataElindjes"
            value={cvData.dataElindjes}
            onChange={handleCVFields}
          />
          <TextField
            // className={classes.cvFields}
            id="outlined-basic"
            label="Patenta"
            variant="outlined"
            fullWidth
            name="Patenta"
            value={cvData.Patenta}
            onChange={handleCVFields}
          />
          <TextField
            // className={classes.cvFields}
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
            // className={classes.cvFields}
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
            // className={classes.cvFields}
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

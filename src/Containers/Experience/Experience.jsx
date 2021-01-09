import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WorkIcon from "@material-ui/icons/Work";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Container from "@material-ui/core/Container";
import { SpeakerNotesOffOutlined } from "@material-ui/icons";
import InputLabel from "@material-ui/core/InputLabel";
import Edukimi from "../../Components/Edukimi/Edukimi";
import TextField from "@material-ui/core/TextField";
import "./Experience.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Experience(props) {
  console.log(props, "prorpor");
  const currentYear = new Date().getUTCFullYear();
  const years = Array(currentYear - (currentYear - 20))
    .fill("")
    .map((v, idx) => currentYear - idx);
  const classes = useStyles();
  const monthNames = [
    "Janar",
    "Shkurt",
    "Mars",
    "Prill",
    "Maj",
    "Qershor",
    "Korrik",
    "Gusht",
    "Shtator",
    "Tetor",
    "Nentor",
    "Dhjetor",
  ];
  return (
    <div className={classes.root}>
      <Container>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <WorkIcon />
            <span>Eksperienca</span>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid container spacing={2}>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Pozicioni"
                    variant="outlined"
                    name="pozicioni"
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <TextField
                    id="outlined-basic"
                    label="Qyteti"
                    variant="outlined"
                    name="qyteti"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={12} style={{ marginTop: 15 }}>
                  <TextField
                    id="outlined-basic"
                    label="Kompania"
                    variant="outlined"
                    name="qyteti"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ marginTop: 10 }}
                  >
                    Data e fillimit
                  </InputLabel>

                  <select className="select">
                    {monthNames.map((data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    ))}
                  </select>
                  <select className="select" style={{ marginLeft: 20 }}>
                    {years.map((data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    ))}
                  </select>
                </Grid>
                <Grid item md={6}>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ marginTop: 10 }}
                  >
                    Data e mbarimit
                  </InputLabel>

                  <select className="select">
                    {monthNames.map((data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    ))}
                  </select>
                  <select className="select" style={{ marginLeft: 20 }}>
                    {years.map((data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    ))}
                  </select>
                </Grid>
              </Grid>
              <Grid container>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginTop: 10 }}
                >
                  Pershkrimi
                </InputLabel>
                <Grid item md={12}>
                  <textarea
                    id="outlined-basic"
                    className="textarea-description"
                  />
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>{" "}
        <Edukimi />
      </Container>
    </div>
  );
}

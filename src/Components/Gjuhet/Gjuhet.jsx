import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PublicIcon from "@material-ui/icons/Public";
import React from "react";
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

export default function Gjuhet({ languageKnowledges, addMoreLanguages }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion style={{ marginTop: 15 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <PublicIcon />
          <span style={{ paddingLeft: 10 }}>Njohuri Gjuhesore</span>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid container spacing={2}>
              {languageKnowledges.length > 0 &&
                languageKnowledges.map((data, index) => (
                  <>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="Gjuha  "
                        variant="outlined"
                        value={data.gjuha}
                        name="diploma"
                        fullWidth
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <select
                        className="select"
                        style={{ marginTop: 0, width: "60%" }}
                        name="muajiFillimit"
                        value={data.niveli}
                      >
                        <option>Shum mire</option>
                        <option>Mire</option>
                        <option>Keq</option>
                      </select>
                    </Grid>
                  </>
                ))}
              <button className="extra-info-btn" onClick={addMoreLanguages}>
                Shto Njohuri
              </button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
}

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PublicIcon from "@material-ui/icons/Public";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import "./Gjuhet.scss";
import React from "react";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(1),
    background: "rgba(0, 0, 0, 0.04)",
  },
}));

export default function Gjuhet({
  languageKnowledges,
  addMoreLanguages,
  deleteAddedLanguages,
  handleLangaugeFields,
}) {
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
                        name="gjuha"
                        onChange={(value) => handleLangaugeFields(value, index)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <select
                        className="select"
                        style={{ marginTop: 0, width: "60%" }}
                        name="niveli"
                        value={data.niveli}
                        onChange={(value) => handleLangaugeFields(value, index)}
                      >
                        <option>Shum mire</option>
                        <option>Mire</option>
                        <option>Keq</option>
                      </select>

                      {index !== 0 && (
                        <IconButton
                          aria-label="delete"
                          onClick={(index) => deleteAddedLanguages(index)}
                          className={classes.button}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
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

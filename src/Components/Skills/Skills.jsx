import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideoLabelIcon from "@material-ui/icons/VideoLabel";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import "./Skills.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Skills({
  handleLangaugeFields,
  skills,
  handleSkillsFields,
  addSkillFields,
  removeSkills,
}) {
  const classes = useStyles();

  return (
    <div className="skills-container">
      <Accordion style={{ marginTop: 15 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <VideoLabelIcon />
          <span style={{ paddingLeft: 10 }}>Aftesi Profesionale</span>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {skills.length > 0 &&
              skills.map((data, index) => (
                <Grid item md={12} style={{ marginTop: 15 }}>
                  <TextField
                    id="outlined-basic"
                    label="Njohuri"
                    variant="outlined"
                    value={data.njohuri}
                    name="njohuri"
                    onChange={(value) => handleSkillsFields(value, index)}
                    fullWidth
                  />
                  {index !== 0 && (
                    <IconButton
                      aria-label="delete"
                      onClick={(index) => removeSkills(index)}
                      className={classes.button}
                    >
                      <DeleteIcon />
                    </IconButton>
                  )}
                </Grid>
              ))}

            <button className="skills-btn" onClick={addSkillFields}>
              Shto Njohuri
            </button>
          </Grid>
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
}

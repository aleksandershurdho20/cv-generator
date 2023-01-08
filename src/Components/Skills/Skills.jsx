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
import { useDispatch, useSelector } from "react-redux";
import { cvDataState,
  addSkillFields,
  removeSkillFields,
  handleChangeSkillsField,
} from "../../redux/slices/createCv";
import "./Skills.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    background: "rgba(0, 0, 0, 0.04)",
    marginLeft: 10,
  },
  input: {
    width: "50%",
  },
}));

export default function Skills(
) {
  const state = useSelector(cvDataState)

  const {njohuri} =state
  const dispatch = useDispatch()
  const classes = useStyles();

  const handleSkillsFields=(e,index) =>{
    const {name,value}=e.target
    dispatch(handleChangeSkillsField({index,name,value}))
  }
  const addSkillsFields = () => dispatch(addSkillFields())
  const removeSkills=(index) => dispatch(removeSkillFields(index))
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
            {njohuri.length > 0 &&
              njohuri.map((data, index) => (
                <Grid item md={12} style={{ marginTop: 15 }}>
                  <TextField
                    id="outlined-basic"
                    label="Njohuri"
                    variant="outlined"
                    value={data.title}
                    name="title"
                    onChange={(value) => handleSkillsFields(value, index)}
                    className={classes.input}
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

            <button className="skills-btn" onClick={addSkillsFields}>
              Shto Njohuri
            </button>
          </Grid>
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
}

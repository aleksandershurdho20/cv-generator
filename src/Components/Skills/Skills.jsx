import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from "react-redux";
import { cvDataState,
  addSkillFields,
  removeSkillFields,
  handleChangeSkillsField,
} from "../../redux/slices/createCv";
import "./Skills.scss";


export default function Skills(
) {
  const state = useSelector(cvDataState)

  const {njohuri} =state
  const dispatch = useDispatch()

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
                    sx={{
                      width:"50%"
                    }}
                  />
                  {index !== 0 && (
                    <IconButton
                      aria-label="delete"
                      onClick={(index) => removeSkills(index)}
                      sx={
                        {
                          background: "rgba(0, 0, 0, 0.04)",
                          marginLeft: 10,
                        }
                      }
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

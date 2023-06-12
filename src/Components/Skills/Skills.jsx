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
import { TransitionGroup } from 'react-transition-group';

import { useDispatch, useSelector } from "react-redux";
import { 
  addSkillFields,
  removeSkillFields,
  handleChangeSkillsField,
} from "../../redux/slices/User";
import "./Skills.scss";
import { resetFormFields } from 'redux/slices/cvFieldsError';


export default function Skills(
) {
  const state = useSelector((state) => state.userSlice.userInfo.userProfileId);

  const {skills} =state
  const { skill} = useSelector((state) => state.cvFieldsError);
  const dispatch = useDispatch()
  console.log(skill,"sk")
  const handleSkillsFields=(e,index) =>{
    const {name,value}=e.target
    dispatch(handleChangeSkillsField({index,name,value}))
    
    if(skill){
      dispatch(resetFormFields({key:skill[index],params:{index,key:"skill"}}))

  }
  }
  const addSkillsFields = () => dispatch(addSkillFields())
  const removeSkills=(index) => dispatch(removeSkillFields({index}))
  
  const getFieldErrorMessage = (i) =>{
    if(typeof skill === "object"){
        return skill[i]
    }

}
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
          <TransitionGroup>

            <Grid container>
              {skills?.length > 0 &&
                skills.map((data, index) => (
                      <Grid item md={12} style={{ marginTop: 15 }} >
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
                          error={ getFieldErrorMessage(index) ? true : false}
                          helperText={getFieldErrorMessage(index)}
                        />
                        {index !== 0 && (
                          <IconButton
                            aria-label="delete"
                            onClick={() => removeSkills(index)}
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
          </TransitionGroup>
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
}

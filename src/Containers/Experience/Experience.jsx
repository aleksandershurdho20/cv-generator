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
import Gjuhet from "../../Components/Gjuhet";
import Skills from "../../Components/Skills/Index";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { cvDataState,handleChangeExperienceFields,
  addExperienceFields,
  removeExperienceDataFields
} from "../../redux/slices/createCv";
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
  experienceWrapper: {
    width: "100%",
  },
}));

export default function Experience() {

  const state = useSelector(cvDataState)
  const dispatch = useDispatch()
  const {eksperienca}= state

  const handleExperienceFields = (e, index) => {
    const { name, value } = e.target;
    dispatch(handleChangeExperienceFields({index,name,value}))
 
  };
  const handleAddExperienceFields = () =>{
    dispatch(addExperienceFields())
    
  }
  const removeExperienceFields = (index) =>{
    dispatch(removeExperienceDataFields(index))
  }
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
            <span style={{ paddingLeft: 10 }}>Eksperienca</span>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              {eksperienca &&
                eksperienca.map((data, index) => (
                  <div key={index} className={classes.experienceWrapper}>
                    <Grid container spacing={2}>
                      <Grid item md={6} sm={12} xs={12}>
                        <TextField
                          id="outlined-basic"
                          label="Pozicioni"
                          variant="outlined"
                          name="pozicioni"
                          value={data.pozicioni}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
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
                          value={data.qyteti}
                          // onChange={props.handleCVFields}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item md={12} style={{ marginTop: 15 }}>
                        <TextField
                          id="outlined-basic"
                          label="Kompania"
                          variant="outlined"
                          name="kompania"
                          fullWidth
                          value={data.kompania}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item md={6} sm={12} xs={12}>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ marginTop: 10 }}
                        >
                          Data e fillimit
                        </InputLabel>

                        <select
                          className="select"
                          name="muajiFillimit"
                          value={data.muajiFillimit}
                          // onChange={props.handleCVFields}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                        >
                          {monthNames.map((value, index) => (
                            <option value={value} key={index}>
                              {value}
                            </option>
                          ))}
                        </select>
                        <select
                          className="select"
                          style={{ marginLeft: 20 }}
                          name="dataEFillimi"
                          value={data.dataEFillimi}
                          // onChange={props.handleCVFields}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                        >
                          {years.map((value, index) => (
                            <option value={value} key={index}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ marginTop: 10 }}
                        >
                          Data e mbarimit
                        </InputLabel>

                        <select
                          className="select"
                          name="muajiMbarimit"
                          value={data.muajiMbarimit}
                          // onChange={props.handleCVFields}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                        >
                          {monthNames.map((value, index) => (
                            <option value={value} key={index}>
                              {value}
                            </option>
                          ))}
                        </select>
                        <select
                          className="select"
                          style={{ marginLeft: 20 }}
                          name="dataEmbarimit"
                          value={data.dataEmbarimit}
                          // onChange={props.handleCVFields}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                        >
                          {years.map((data, index) => (
                            <option value={data} key={index}>
                              {data}
                            </option>
                          ))}
                        </select>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item md={12}>
                        <InputLabel
                          id="demo-simple-select-label"
                          style={{ marginTop: 10 }}
                        >
                          Pershkrimi
                        </InputLabel>
                        <textarea
                          id="outlined-basic"
                          className="textarea-description"
                          name="pershkrimi"
                          value={data.pershkrimi}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid container justify="center">
                      {index !== 0 && (
                        <IconButton
                          aria-label="delete"
                          onClick={() => removeExperienceFields(index)}
                          className={classes.button}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </Grid>
                  </div>
                ))}
              <button
                className="extra-info-btn"
                onClick={handleAddExperienceFields}
              >
                Shto Eksperienca
              </button>
            </Grid>
          </AccordionDetails>
        </Accordion>{" "}
        <Edukimi  />
        <Gjuhet/>
        <Skills/>
        
    
      </Container>
    </div>
  );
}

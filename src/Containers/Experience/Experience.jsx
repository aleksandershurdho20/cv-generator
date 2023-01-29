import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WorkIcon from "@material-ui/icons/Work";
import { useDispatch, useSelector } from "react-redux";
import { monthNames, years } from "utils/PdfGenerator/generateDate";
import Edukimi from "../../Components/Edukimi/Edukimi";
import Gjuhet from "../../Components/Gjuhet";
import Skills from "../../Components/Skills/Index";
import {
  addExperienceFields, cvDataState, handleChangeExperienceFields, removeExperienceDataFields
} from "../../redux/slices/createCv";
import "./Experience.scss";
import { cvFieldsState,resetFormFields } from "redux/slices/cvFieldsError";

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
  const {dataEFillimi,pozicioni,kompania} = useSelector(cvFieldsState)

  const {eksperienca}= state
  

  const handleExperienceFields = (e, index) => {
    const { name, value } = e.target;
    dispatch(handleChangeExperienceFields({index,name,value}))
    dispatch(resetFormFields({key:name}))

  };
  const handleAddExperienceFields = () =>{
    dispatch(addExperienceFields())
    
  }
  const removeExperienceFields = (index) =>{
    dispatch(removeExperienceDataFields(index))
  }
  
  const classes = useStyles();
  
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
                          label="Pozicioni*"
                          variant="outlined"
                          name="pozicioni"
                          value={data.pozicioni}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                          error={pozicioni? true : false}
                          helperText={pozicioni}
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
                          label="Kompania*"
                          variant="outlined"
                          name="kompania"
                          fullWidth
                          value={data.kompania}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                          error={kompania? true : false}
                          helperText={kompania}
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
                      {dataEFillimi && <span>{dataEFillimi}</span>}

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
                    <Grid container justifyContent="center">
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

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkIcon from "@mui/icons-material/Work";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { monthNames, years } from "utils/PdfGenerator/generateDate";
import Edukimi from "../../Components/Edukimi/Edukimi";
import Gjuhet from "../../Components/Gjuhet";
import Skills from "../../Components/Skills/Index";
import {
  addExperienceFields,
  cvDataState,
  handleChangeExperienceFields,
  removeExperienceDataFields,
} from "../../redux/slices/User";
import "./Experience.scss";
import { cvFieldsState, resetFormFields } from "redux/slices/cvFieldsError";

export default function Experience() {
  const state = useSelector((state) => state.userSlice.userInfo.userProfileId);
  const dispatch = useDispatch();
  const { start_date, position, company } = useSelector(cvFieldsState);
  const { experience } = state;
  const handleExperienceFields = (e, index) => {
    const { name, value } = e.target;
    dispatch(handleChangeExperienceFields({ index, name, value }));
    dispatch(resetFormFields({ key: name }));
  };
  const handleAddExperienceFields = () => {
    dispatch(addExperienceFields());
  };
  const removeExperienceFields = (index) => {
    dispatch(removeExperienceDataFields(index));
  };

  return (
    <Box flexGrow="1">
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
              {experience &&
                experience.map((data, index) => (
                  <Box key={index} width="100%">
                    <Grid container spacing={2}>
                      <Grid item md={6} sm={12} xs={12}>
                        <TextField
                          id="outlined-basic"
                          label="Pozicioni*"
                          variant="outlined"
                          name="position"
                          value={data.position}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                          error={position ? true : false}
                          helperText={position}
                          fullWidth
                        />
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                        <TextField
                          id="outlined-basic"
                          label="Kompania*"
                          variant="outlined"
                          name="company"
                          fullWidth
                          value={data.company}
                          onChange={(value) =>
                            handleExperienceFields(value, index)
                          }
                          error={company ? true : false}
                          helperText={company}
                        />
                      </Grid>
                    </Grid>
                    {/* <Grid container>
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
                    </Grid> */}
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
                          name="month_start_date"
                          value={data.month_start_date}
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
                          name="start_date"
                          value={data.start_date}
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
                          name="month_end_date"
                          value={data.month_end_date}
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
                          name="end_date"
                          value={data.end_date}
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
                      {start_date && <span>{start_date}</span>}
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
                          name="description"
                          value={data.description}
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
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </Grid>
                  </Box>
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
        <Edukimi />
        <Gjuhet />
        <Skills />
      </Container>
    </Box>
  );
}

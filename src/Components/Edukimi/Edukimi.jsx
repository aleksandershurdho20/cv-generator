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
import SchoolIcon from "@material-ui/icons/School";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
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

export default function Edukimi(props) {
  const {
    diploma,
    universiteti,
    educationQyteti,
    educationMuajiFillimit,
    educationDataeFillimit,
    educationMuajiMbarimit,
    educationDataeMbarimit,
    educationPershkrimi,
    edukimi,
  } = props;
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
      <Accordion style={{ marginTop: 15 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <SchoolIcon />
          <span style={{ paddingLeft: 10 }}>Edukimi</span>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            {edukimi &&
              edukimi.map((data, index) => (
                <div key={index} style={{ width: "100%" }}>
                  <Grid container spacing={2}>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="Diploma/Titulli i kualifikimit  "
                        variant="outlined"
                        name="diploma"
                        value={data.diploma}
                        // onChange={props.handleCVFields}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
                        }
                        fullWidth
                      />
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <TextField
                        id="outlined-basic"
                        label="Universiteti"
                        variant="outlined"
                        name="universiteti"
                        value={data.universiteti}
                        // onChange={props.handleCVFields}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
                        }
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item md={12} style={{ marginTop: 15 }}>
                      <TextField
                        id="outlined-basic"
                        label="Qyteti"
                        variant="outlined"
                        name="educationQyteti"
                        value={data.educationQyteti}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
                        }
                        // onChange={props.handleCVFields}
                        fullWidth
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
                        name="educationMuajiFillimit"
                        value={data.educationMuajiFillimit}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
                        }
                        // onChange={props.handleCVFields}
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
                        name="educationDataeFillimit"
                        value={data.educationDataeFillimit}
                        // onChange={props.handleCVFields}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
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
                        name="educationMuajiMbarimit"
                        value={data.educationMuajiMbarimit}
                        // onChange={props.handleCVFields}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
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
                        name="educationDataeMbarimit"
                        value={data.educationDataeMbarimit}
                        // onChange={props.handleCVFields}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
                        }
                      >
                        {years.map((value, index) => (
                          <option value={value} key={index}>
                            {value}
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
                        name="educationPershkrimi"
                        value={data.educationPershkrimi}
                        // onChange={props.handleCVFields}
                        onChange={(value) =>
                          props.handleEducationFields(value, index)
                        }
                        id="outlined-basic"
                        className="textarea-description"
                      />
                    </Grid>
                  </Grid>
                  <Grid container justify="center">
                    {index !== 0 && (
                      <IconButton
                        aria-label="delete"
                        onClick={() => props.removeEducationFields(index)}
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
              onClick={props.handleDuplicateEducation}
            >
              Shto Njohuri
            </button>
          </Grid>
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
}

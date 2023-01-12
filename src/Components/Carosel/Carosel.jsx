import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Slide from "@material-ui/core/Slide";
import Snackbar from "@material-ui/core/Snackbar";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FaceIcon from "@material-ui/icons/Face";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useRef, useState } from "react";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../Components/Modal/Modal";
import Experience from "../../Containers/Experience/Experience";
import Footer from "../../Containers/Footer/Footer";
import { changeCvData, cvDataState } from "../../redux/slices/createCv";
import Doc from "../../utils/PdfGenerator/DocService";
import TemplateList from "../SelectTemplates/TemplateList";
import "./Carosel.scss";
function getSteps() {
  return ["Informacioni Personal", "Eksperienca", "Zgjidh Formatin e CV"];
}

const useclasses = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  },
  cvFields: {
    marginBottom: 15,
  },
}));

export default function SimpleTabs(props) {
  
  const [value, setValue] = React.useState(0);
  const classes = useclasses();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activateExtraInfo, setActivateExtraInfo] = useState(false);
  const steps = getSteps();
  const [files, setFiles] = useState([]);
  const [displayUploadedPhoto, setDisplayUploadedPhoto] = useState("");
  const [fileName, setFileName] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [errorrMessage, setErrorrMessage] = useState("");
  const [display, setDisplay] = useState(false);
  
  const state = useSelector(cvDataState)
  const dispatch = useDispatch()
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [validateName, setValidateName] = useState("");
  const [validateSurname, setValidateSurname] = useState("");
  const ref = useRef();
  const bodyRef = useRef();
  const createPdfs = () => {
    if (!bodyRef.current) {
      setDisplay(true);
      setErrorrMessage("Ju lutem zgjidhni nje template!");
    }
    createPdf(bodyRef.current);
    // setDisplay(false);
  };
  const [imageFiles, setImageFiles] = useState("");
  const handleCVFields = (e) => {
    const { name, value } = e.target;
  
    dispatch(changeCvData({
      ...state,
      key:name,value})
    )
    setValidateName("");
    setValidateSurname("");
  };
  const handleNext = () => {
    if (!state.emer) {
      setValidateName("Emri nuk mund te jete bosh !");
      setActiveStep(0);
    } else if (!state.mbiemer) {
      setValidateSurname("Mbiemri nuk mund te jete bosh !");
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  async function handleFiles(e, success, failure) {
    let headers = new Headers();
    headers.append("Accept", "Application/JSON");
    setLoading(true);
    let formdata = new FormData();

    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "ngarko");

    const preview = URL.createObjectURL(e.target.files[0]);
    if (preview) {
      setImageFiles(preview);
      setLoading(false);
    }
  }
 

  const createPdf = (html) => Doc.createPdf(html);

  return (
    <div className={classes.root}>
      <Modal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        modalTitle="Ngarko Foto"
        handleFiles={handleFiles}
      />

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 1 && (
        <Experience/>
      )}
      {activeStep === 2 && (
        <TemplateList
          bodyRef={bodyRef}
          imageFiles={imageFiles}
          displayCV={props.displayCV}
        />
      )}

      {activeStep === 0 && (
        <Container style={{ marginTop: 10 }}>
          <Grid container spacing={3}>
            <Grid item md={4} sm={12} xs={12}>
              <InputLabel id="demo-simple-select-label">Ngarko</InputLabel>

              <div className="avatar-wrapper">
                {imageFiles.length > 0 ? (
                  <>
                    <img src={imageFiles} />
                    <a onClick={() => setImageFiles("")}>Fshi</a>
                  </>
                ) : (
                  <div className="avatar-wrapper" onClick={handleClickOpen}>
                    <FaceIcon className="avatar-center" />
                    <span>Shto Fotografi</span>
                  </div>
                )}
              </div>
              {/* {imageFiles.length > 0 && (
                <a onClick={() => setImageFiles("")}>Fshi</a>
              )} */}
            </Grid>
            <Grid item md={4}>
              <div>
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Emer"
                  variant="outlined"
                  error={validateName}
                  name="emer"
                  value={state.emer}
                  onChange={handleCVFields}
                  fullWidth
                  helperText={validateName}
                />
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={state.email}
                  onChange={handleCVFields}
                />
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Adresa"
                  variant="outlined"
                  name="adresa"
                  value={state.adresa}
                  onChange={handleCVFields}
                  fullWidth
                />
              </div>
            </Grid>

            <Grid item md={4}>
              <div>
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Mbiemer"
                  variant="outlined"
                  fullWidth
                  name="mbiemer"
                  error={validateSurname}
                  helperText={validateSurname}
                  value={state.mbiemer}
                  onChange={handleCVFields}
                />
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Telefon  "
                  fullWidth
                  variant="outlined"
                  name="telefon"
                  value={state.telefon}
                  onChange={handleCVFields}
                />
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Qyteti"
                  variant="outlined"
                  fullWidth
                  name="qyteti"
                  value={state.qyteti}
                  onChange={handleCVFields}
                />
              </div>
            </Grid>

            <Divider />
          </Grid>
        </Container>
      )}
      <div className="step-btns">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.backButton}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className="step-btn"
          style={activeStep === 2 ? { display: "none" } : { display: "inline" }}
        >
          Next
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="step-btn"
          style={activeStep !== 2 ? { display: "none" } : { display: "inline" }}
          onClick={createPdfs}
        >
          Submit
        </Button>
        <Snackbar open={display} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={() => setDisplay(false)} severity="error">
            {errorrMessage}
          </Alert>
        </Snackbar>
      </div>

      <Footer backgroundColor={`#FAFAFA`} />
    </div>
  );
}

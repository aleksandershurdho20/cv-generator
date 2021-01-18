import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import CvTemplateLeftSidebar from "../../Containers/CreateCV/CvTemplateLeftSidebar";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import ExtraInformation from "../ExtraData/ExtraInformation";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FaceIcon from "@material-ui/icons/Face";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Modal from "../../Components/Modal/Modal";
import Experience from "../../Containers/Experience/Experience";
import "./Carosel.scss";
import Footer from "../../Containers/Footer/Footer";
import TemplateList from "../SelectTemplates/TemplateList";
import CV from "react-cv";
import Pdf from "react-to-pdf";
import DownloadLink from "react-download-link";
import Doc from "../../utils/PdfGenerator/DocService";
import PdfContainer from "../../Components/Pdf/PdfContainer";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
function getSteps() {
  return ["Informacioni Personal", "Eksperienca", "Zgjidh Formatin e CV"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Informacioni Personal";
    case 1:
      return "Eksperienca";
    case 2:
      return "Zgjidh Formatin e CV";
    default:
      return;
  }
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

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useclasses();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activateExtraInfo, setActivateExtraInfo] = useState(false);
  const steps = getSteps();
  const [files, setFiles] = useState([]);
  const [displayUploadedPhoto, setDisplayUploadedPhoto] = useState("");
  const [fileName, setFileName] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [cvData, setCvData] = useState({
    emer: "",
    mbiemer: "",
    email: "",
    telefon: "",
    adresa: "",
    qyteti: "",
    dataElindjes: "",
    vendiILindejs: "",
    Patenta: "",
    Gjinia: "",
    Kombesia: "",
    statusiMartesor: "",
    pozicioni: "",
    qytetiPuna: "",
    kompania: "",
    dataEFillimi: "",
    muajiFillimit: "",
    muajiMbarimit: "",
    dataEmbarimit: "",
    pershkrimi: "",
    diploma: "",
    universiteti: "",
    educationQyteti: "",
    educationDataeFillimit: "",
    educationDataeMbarimit: "",
    educationMuajiFillimit: "",
    educationMuajiMbarimit: "",
    educationPershkrimi: "",
  });
  const [languageKnowledges, setLanguageKnowledges] = useState([
    {
      gjuha: "",
      niveli: "",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      njohuri: "",
    },
  ]);
  const handleSkillsFields = (e, index) => {
    const { name, value } = e.target;
    let tempArr = [...skills];
    tempArr[index][name] = value;
    setSkills(tempArr);
  };
  const addSkillFields = () => {
    setSkills([...skills, { njohuri: "" }]);
  };
  const removeSkills = (index) => {
    let tempArr = [...skills];
    tempArr.splice(index, 1);
    setSkills(tempArr);
  };
  const [validateName, setValidateName] = useState("");
  const [validateSurname, setValidateSurname] = useState("");

  const handleLangaugeFields = (e, index) => {
    const { name, value } = e.target;
    let tempArr = [...languageKnowledges];
    tempArr[index][name] = value;
    setLanguageKnowledges(tempArr);
    console.log(tempArr, "temp");
  };

  const addMoreLanguages = () => {
    setLanguageKnowledges([...languageKnowledges, { gjuha: "", niveli: "" }]);
  };
  const deleteAddedLanguages = (index) => {
    let tempArr = [...languageKnowledges];
    tempArr.splice(index, 1);
    console.log(`deleted`);
    setLanguageKnowledges(tempArr);
  };

  const ref = useRef();
  const bodyRef = useRef();
  const createPdfs = () => createPdf(bodyRef.current);
  const [imageFiles, setImageFiles] = useState("");
  const handleCVFields = (e) => {
    const { name, value } = e.target;
    setCvData({
      ...cvData,
      [name]: value,
    });
    setValidateName("");
    setValidateSurname("");
  };
  const handleNext = () => {
    if (!cvData.emer) {
      setValidateName("Emri nuk mund te jete bosh !");
      setActiveStep(0);
    } else if (!cvData.mbiemer) {
      setValidateSurname("Mbiemri nuk mund te jete bosh !");
      setActiveStep(0);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleFiles = async (e) => {
    // setFiles(files);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ngarko");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/cval/image/upload",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },

        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImageFiles(file.secure_url);
  };
  // const datas = files.map((data) => data);
  // setDisplayUploadedPhoto(datas);

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
      <Container style={{ marginTop: 20 }}>
        <h3 style={{ fontWeight: "500", marginLeft: "8%" }}>
          {getStepContent(activeStep)}
        </h3>
        <Divider />
      </Container>
      {/* {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}>
            All steps completed
          </Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <div>
          <Container style={{ marginTop: 20 }}>
            <h3 style={{ fontWeight: "500", marginLeft: "8%" }}>
              {getStepContent(activeStep)}
            </h3>
            <Divider />
          </Container>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      )} */}
      {activeStep === 1 && (
        <Experience
          {...cvData}
          handleCVFields={handleCVFields}
          languageKnowledges={languageKnowledges}
          addMoreLanguages={addMoreLanguages}
          deleteAddedLanguages={deleteAddedLanguages}
          handleLangaugeFields={handleLangaugeFields}
          skills={skills}
          handleSkillsFields={handleSkillsFields}
          addSkillFields={addSkillFields}
          removeSkills={removeSkills}
        />
      )}
      {activeStep === 2 && <TemplateList />}

      {activeStep === 0 && (
        <Container style={{ marginTop: 10 }}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <InputLabel id="demo-simple-select-label">Ngarko</InputLabel>

              <div className="avatar-wrapper" onClick={handleClickOpen}>
                {imageFiles.length > 0 ? (
                  <img src={imageFiles} />
                ) : (
                  <>
                    <FaceIcon className="avatar-center" />
                    <span>Shto Fotografi</span>
                  </>
                )}
              </div>
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
                  value={cvData.emer}
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
                  value={cvData.email}
                  onChange={handleCVFields}
                />
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Adresa"
                  variant="outlined"
                  name="adresa"
                  value={cvData.adresa}
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
                  value={cvData.mbiemer}
                  onChange={handleCVFields}
                />
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Telefon  "
                  fullWidth
                  variant="outlined"
                  name="telefon"
                  value={cvData.telefon}
                  onChange={handleCVFields}
                />
                <TextField
                  className={classes.cvFields}
                  id="outlined-basic"
                  label="Qyteti"
                  variant="outlined"
                  fullWidth
                  name="qyteti"
                  value={cvData.qyteti}
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
          style={activeStep === 2 ? { display: "none" } : { display: "inline" }}
        >
          Next
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={activeStep !== 2 ? { display: "none" } : { display: "inline" }}
          onClick={createPdfs}
        >
          Submit
        </Button>
      </div>

      <div ref={bodyRef}>
        <CV
          personalData={{
            name: cvData.emer,
            title: cvData.pozicioni,
            image: "https://bulma.io/images/placeholders/128x128.png",
            contacts: [
              { type: "email", value: cvData.email },
              { type: "phone", value: cvData.telefon },
              { type: "location", value: cvData.qyteti },
            ],
          }}
          sections={[
            {
              type: "experiences-list",
              title: "Eksperienca",
              icon: "archive",
              items: [
                {
                  title: cvData.pozicioni,
                  company: cvData.kompania,
                  description: cvData.pershkrimi,
                  datesBetween: `${cvData.muajiFillimit} ${cvData.dataEFillimi} - ${cvData.muajiMbarimit} ${cvData.dataEmbarimit} `,
                },
              ],
            },
            {
              type: "common-list",
              title: "Edukimi",
              icon: "graduation",
              items: [
                {
                  title: cvData.diploma,
                  authority: cvData.universiteti,
                  rightSide: `${cvData.educationDataeFillimit} ${cvData.educationMuajiFillimit} - ${cvData.educationDataeMbarimit} ${cvData.educationMuajiMbarimit}`,
                },
              ],
            },
            {
              type: "common-list",
              title: "Njohuri Gjuhesore",
              icon: "language",
              items: languageKnowledges.map((data) => {
                return {
                  authority: data.gjuha,
                  authorityMeta: data.niveli,
                };
              }),
            },
            {
              type: "tag-list",
              title: "Aftesi Profesionale",
              icon: "rocket",
              items: skills.map((skill) => skill.njohuri),
            },
          ]}
          branding={true} // or false to hide it.
        />
      </div>

      <Footer backgroundColor={`#FAFAFA`} />
    </div>
  );
}

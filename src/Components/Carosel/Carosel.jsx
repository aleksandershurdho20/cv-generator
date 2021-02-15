import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Stepper from "@material-ui/core/Stepper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FaceIcon from "@material-ui/icons/Face";
import React, { useRef, useState } from "react";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import CV from "react-cv";
import Modal from "../../Components/Modal/Modal";
import Experience from "../../Containers/Experience/Experience";
import Footer from "../../Containers/Footer/Footer";
import Doc from "../../utils/PdfGenerator/DocService";
import TemplateList from "../SelectTemplates/TemplateList";
import "./Carosel.scss";
import TemplateOne from "../SelectTemplates/CVTemplates/TemplateOne";
import Skeleton from "@material-ui/lab/Skeleton";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import MuiAlert from "@material-ui/lab/Alert";

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
    profili: "",
    eksperienca: [
      {
        kompania: "",
        dataEFillimi: "",
        muajiFillimit: "",
        muajiMbarimit: "",
        dataEmbarimit: "",
        pershkrimi: "",
      },
    ],
    edukimi: [
      {
        diploma: "",
        universiteti: "",
        educationQyteti: "",
        educationDataeFillimit: "",
        educationDataeMbarimit: "",
        educationMuajiFillimit: "",
        educationMuajiMbarimit: "",
        educationPershkrimi: "",
      },
    ],
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

  const handleExperienceFields = (e, index) => {
    const { name, value } = e.target;
    let tempArr = [...cvData.eksperienca];
    tempArr[index][name] = value;
    console.log(tempArr);
    debugger;
    setCvData({
      ...cvData,
      eksperienca: tempArr,
    });
  };
  const duplicateExperienceFields = () => {
    setCvData({
      ...cvData,
      eksperienca: [
        ...cvData.eksperienca,
        {
          pozicioni: "",
          qyteti: "",
          kompania: "",
          dataEFillimi: "",
          muajiFillimit: "",
          muajiMbarimit: "",
          dataEmbarimit: "",
          pershkrimi: "",
        },
      ],
    });
  };
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const removeExperienceFields = (index) => {
    const tempArr = [...cvData.eksperienca];
    tempArr.splice(index, 1);
    setCvData({
      ...cvData,
      eksperienca: tempArr,
    });
  };
  const [loading, setLoading] = useState(false);
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

  const handleDuplicateEducation = () => {
    setCvData({
      ...cvData,
      edukimi: [
        ...cvData.edukimi,
        {
          diploma: "",
          universiteti: "",
          educationQyteti: "",
          educationDataeFillimit: "",
          educationDataeMbarimit: "",
          educationMuajiFillimit: "",
          educationMuajiMbarimit: "",
          educationPershkrimi: "",
        },
      ],
    });
  };
  const handleEducationFields = (e, index) => {
    const { name, value } = e.target;
    let tempArr = [...cvData.edukimi];
    tempArr[index][name] = value;
    console.log(tempArr);
    debugger;
    setCvData({
      ...cvData,
      edukimi: tempArr,
    });
  };
  const removeEducationFields = (index) => {
    const tempArr = [...cvData.edukimi];
    tempArr.splice(index, 1);
    setCvData({
      ...cvData,
      edukimi: tempArr,
    });
  };
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
    // let req = new Request("https://api.cloudinary.com/v1_1/cval/image/upload", {
    //   method: "POST",
    //   headers,
    //   mode: "cors",
    //   body: formdata,
    // });

    // fetch(req)
    //   .then((res) => res.json())
    //   .then((data) => setImageFiles(data.secure_url));
    // .then((data) => success(data.data.url))
    // .catch((err) => failure(err.message));
  }
  // const handleFiles = async (e) => {
  //   // setFiles(files);
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "ngarko");
  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/cval/image/upload",
  //     {
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       mode: "cors",

  //       method: "POST",
  //       body: data,
  //     }
  //   );
  //   const file = await res.json();
  //   setImageFiles(file.secure_url);
  // };
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
          duplicateExperienceFields={duplicateExperienceFields}
          languageKnowledges={languageKnowledges}
          addMoreLanguages={addMoreLanguages}
          deleteAddedLanguages={deleteAddedLanguages}
          handleLangaugeFields={handleLangaugeFields}
          skills={skills}
          handleSkillsFields={handleSkillsFields}
          addSkillFields={addSkillFields}
          removeSkills={removeSkills}
          handleExperienceFields={handleExperienceFields}
          removeExperienceFields={removeExperienceFields}
          handleDuplicateEducation={handleDuplicateEducation}
          handleEducationFields={handleEducationFields}
          removeEducationFields={removeEducationFields}
        />
      )}
      {activeStep === 2 && (
        <TemplateList
          bodyRef={bodyRef}
          {...cvData}
          skills={skills}
          languageKnowledges={languageKnowledges}
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
        <Snackbar open={display} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={() => setDisplay(false)} severity="error">
            {errorrMessage}
          </Alert>
        </Snackbar>
      </div>

      {/* <div ref={bodyRef}>
        <CV
          personalData={{
            name: cvData.emer,
            title: cvData.pozicioni,
            image: imageFiles,
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
        <TemplateOne {...cvData} skills={skills} />
      </div>
 */}
      <Footer backgroundColor={`#FAFAFA`} />
    </div>
  );
}

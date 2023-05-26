import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import InformacioniPersonal from "Components/InformacioniPersonal";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cvFieldsState,
  goToPreviousStep,
  validateFormFields,
} from "redux/slices/cvFieldsError";
import Experience from "../../Containers/Experience/Experience";
import Footer from "../../Containers/Footer/Footer";
import { cvDataState } from "../../redux/slices/createCv";
import Box from "@mui/material/Box";

import Doc from "../../utils/PdfGenerator/DocService";
import TemplateList from "../SelectTemplates/TemplateList";
import "./Carosel.scss";
import { api } from "utils/api/api";
import { toast } from "react-toastify";
function getSteps() {
  return ["Informacioni Personal", "Eksperienca", "Zgjidh Formatin e CV"];
}

export default function SimpleTabs() {
  const steps = getSteps();
  const { userInfo } = useSelector((state) => state.userSlice);

  const [errorrMessage, setErrorrMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const state = useSelector((state) => state.userSlice.userInfo.userProfileId);
  const { activeStep } = useSelector(cvFieldsState);
  const dispatch = useDispatch();

  const isInEditMode = state?._id ? "Modifiko" : "Krijo"
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

  const handleNext = () => {
    dispatch(validateFormFields({ fields: state }));
  };
  console.log(useSelector((state) => state.userSlice),'state')
  const handleBack = () => {
    dispatch(goToPreviousStep());
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  console.log(state,'state')
  const handleCreate = () =>{
    if(isInEditMode === "Modifiko"){
      api.put(`/profile/${userInfo?._id}`,state).then(res =>{
        toast.success("Profili u modifikua me sukses!")
      }).catch(err =>err)
    }
    else{
      console.log("should be here")
      const params = {...state,user: userInfo?._id}
      console.log(params,'params')
      api
      .post("profile/create", params)
      .then((res) => {
        toast.success("Profili u krijua me sukses!")

      })
      .catch((err) => console.log("errko"));
    }

    }
  const createPdf = (html) => Doc.createPdf(html);

  return (
    <Box
      flexGrow="1"
      boxShadow=" 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)"
      backgroundColor="#FFF"
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 1 && <Experience />}
      {activeStep === 2 && (
        <TemplateList bodyRef={bodyRef} imageFiles={imageFiles} />
      )}

      {activeStep === 0 && <InformacioniPersonal />}
      <div className="step-btns">
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          style={{ color: "#000" }}
        >
          Back
        </Button>
        {activeStep === 1 ?   <Button
          variant="contained"
          color="primary"
          className="step-btn"
          onClick={handleCreate}
        >
          {isInEditMode}
        </Button> :     <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          className="step-btn"

        >
          Next
        </Button>}
     
       
        {/* <Snackbar open={display} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={() => setDisplay(false)} severity="error">
            {errorrMessage}
          </Alert>
        </Snackbar> */}
      </div>
      <Footer backgroundColor={`#FAFAFA`} />
    </Box>
  );
}

import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import InformacioniPersonal from "Components/InformacioniPersonal";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cvFieldsState,
  goToPreviousStep,
  validateFormFields,
} from "redux/slices/cvFieldsError";
import Experience from "../../Containers/Experience/Experience";
import Footer from "../../Containers/Footer/Footer";
import Box from "@mui/material/Box";

import TemplateList from "../SelectTemplates/TemplateList";
import "./Carosel.scss";
import { api } from "utils/api/api";
import { toast } from "react-toastify";
import { validateUserProfileFields } from "helpers/validateUserProfileFields";

function getSteps() {
  return ["Informacioni Personal", "Eksperienca"];
}

export default function SimpleTabs() {
  const steps = getSteps();
  const { userInfo } = useSelector((state) => state.userSlice);


  const state = useSelector((state) => state.userSlice.userInfo.userProfileId);

  const { activeStep,start_date,
    month_start_date,
    month_end_date,
    position } = useSelector((state) => state.cvFieldsError);
    
  const dispatch = useDispatch();
  const isInEditMode = state?._id ? "Modifiko" : "Krijo"
  const bodyRef = useRef();


  const handleNext = () => {
    dispatch(validateFormFields({ fields: state }));
  };
  console.log(useSelector((state) => state.userSlice),'state')
  const handleBack = () => {
    dispatch(goToPreviousStep());
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleCreate = () =>{
    dispatch(validateFormFields({ fields: state }));
    console.log(state,'state')
    if(!validateUserProfileFields(state)) return;
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
      {/* {activeStep === 2 && (
        <TemplateList bodyRef={bodyRef}  />
      )} */}

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

import React from "react";
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

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <img
    src="path-to-img"
    onDragStart={handleDragStart}
    className="yours-custom-class"
  />,
  <img
    src="path-to-img"
    onDragStart={handleDragStart}
    className="yours-custom-class"
  />,
  <img
    src="path-to-img"
    onDragStart={handleDragStart}
    className="yours-custom-class"
  />,
];
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
      return "Unknown stepIndex";
  }
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      " 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  },
}));

export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  return (
    <div className={classes.root}>
      {/* <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="CV Europass" {...a11yProps(0)} />
          <Tab label="Cv e Modifikuar" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        CV Europass
      </TabPanel>
      <TabPanel value={value} index={1}>
       

        <AliceCarousel mouseTracking items={items} />
      </TabPanel> */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}>
            All steps completed
          </Typography>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <div>
          <Container>
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
      )}
      {activeStep === 0 && (
        <Container>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Emer"
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Emer"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Adresa"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>

            <Grid item md={4}>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Mbiemer"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Telefon  "
                  fullWidth
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Qyteti"
                  variant="outlined"
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
}

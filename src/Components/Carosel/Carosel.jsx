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
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
        Cv e Modifikuar
        <div className="sidenav">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <div className="main">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <Divider variant="middle" />
          <h3 style={{ padding: 15 }}>Eksperienca</h3>
          <Divider variant="middle" />
          <div className="experience-wrapper">
            <div className="experience-hisotry">2010 - 2020</div>
            <div className="experience-description">
              Senior Developer
              <ul>
                <li>Java</li>
                <li>Php</li>
                <li>css</li>
                <li>ok</li>
              </ul>
            </div>
          </div>
          <Divider variant="middle" />
          <h3 style={{ padding: 15 }}>Edukimi</h3>
          <Divider variant="middle" />
        </div>
        {/* <AliceCarousel mouseTracking items={items} /> */}
      </TabPanel>
    </div>
  );
}

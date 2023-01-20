import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SchoolIcon from "@material-ui/icons/School";
import EdukimiFormFields from "./EdukimiFormFields";
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

export default function Edukimi() {
  const classes = useStyles();

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
          <EdukimiFormFields/>
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
}

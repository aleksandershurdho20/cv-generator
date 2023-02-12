import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import EdukimiFormFields from "./EdukimiFormFields";
import Box from '@mui/material/Box';



export default function Edukimi() {

  return (
    <Box
      flexGrow="1"
    >
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
    </Box>
  );
}

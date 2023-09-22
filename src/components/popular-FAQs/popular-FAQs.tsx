import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionStyle, Questions } from "./popular-FAQs.styles.ts";
import { questions } from "./popular-FAQs-info.ts";

export const PopularFaQs = () => {
  return (
    <div>
      {
        questions.map(item => (
          <Accordion key={item.id} sx={AccordionStyle}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Questions>{item.question}</Questions>
            </AccordionSummary>
            
            <AccordionDetails>
              <Typography>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      }
    
    </div>
  );
}

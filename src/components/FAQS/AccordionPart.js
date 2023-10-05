import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionPart() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is a TEDx talk?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A TEDx talk is a locally organized event that closely follows the format and principles of TED talks. These events serve as platforms for speakers to share their innovative ideas, personal stories, or areas of expertise with the goal of inspiring and informing the audience. TEDx talks aim to foster discussions and spread knowledge in a manner consistent with the broader TED mission.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I attend a TEDx event?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          To attend a TEDx event, you can start by visiting the official TEDx website and searching for upcoming events in your local area or areas you are interested in. Most TEDx events are open to the public, and they often offer tickets for purchase. Some events may also provide livestream options for those unable to attend in person, making it accessible to a global audience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can anyone become a TEDx speaker?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, TEDx events welcome a diverse range of speakers from various backgrounds and experiences. While TEDx organizers often invite speakers based on their unique perspectives and ideas, many events also accept speaker applications from individuals who believe they have compelling stories or insights to share. This inclusivity is a fundamental aspect of TEDx's mission to celebrate diverse voices.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Are TEDx talks affiliated with TED?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          TEDx talks are independently organized events that operate under a free license granted by TED. While TEDx events adhere to TED's format and guidelines, they are organized and hosted by local communities worldwide. TEDx events are not directly affiliated with the global TED organization but share the same spirit of spreading ideas and knowledge.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How can I watch TEDx talks online?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You can enjoy TEDx talks online through various platforms. The official TEDx YouTube channel is a popular option, featuring a vast library of talks covering a wide range of topics. Additionally, you can explore TEDx talks on the TED website, where they are grouped by themes and subjects. These talks are accessible to a global audience and offer a wealth of insights, innovations, and inspiring stories from speakers worldwide.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';



export const FAQ = (props) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  

    return(
        <div>
            <strong>FREQUENTLY ASKED QUESTIONS</strong>

            {/* image of map */}
            <div className="map__picture">
                <img src="src/assets/map-pic.png" alt="" />
            </div>

            {/* accordion for FAQ */}
            <div>
            <Accordion open={open} toggle={toggle}>
             <AccordionItem>
                <AccordionHeader targetId="1">Where can I park?</AccordionHeader>
                <AccordionBody accordionId="1">
                    <strong>Great Question! </strong>
                    There is free parking all along the street (Front Street) of the venue. There is an overflow lot located at the end of Front Street, as well.
                 </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="2">Can I bring a bag?</AccordionHeader>
                <AccordionBody accordionId="2">
                    <strong>Yes! </strong>
                    Small bags are allowed.
                    However, drugs, weapons, and other contraband are prohibited. You are subject to a sudden search if we think you are at risk of violating any of these conditions.
                </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                <AccordionHeader targetId="3">Is there re-entry?</AccordionHeader>
                <AccordionBody accordionId="3">
                 <strong>Typically, yes!</strong>
                    We allow re-entry on a show by show basis. Ask on your way in and they will let you know if re-entry is allowed for the evening.
                </AccordionBody>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    )
}

// export default FAQ;

    
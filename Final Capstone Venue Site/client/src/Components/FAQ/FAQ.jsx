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
            <strong>Where to find us!</strong>

            {/* image of map */}
            <div>
            {/* <h2>Where to find us!</h2> */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.0843492919594!2d-79.4996511242955!3d39.150063100000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884ac9bc0cd4336b%3A0x96ad20cd4238857b!2s220%20WV-32%2C%20Thomas%2C%20WV%2026292!5e0!3m2!1sen!2sus!4v1729020964426!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
           

            
            {/* accordion for FAQ */}
            <div>
              <h2>Frequently Asked Questions</h2>
            </div>
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

    
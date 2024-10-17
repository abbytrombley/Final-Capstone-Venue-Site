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
                <AccordionHeader targetId="1">Parking</AccordionHeader>
                <AccordionBody accordionId="1">
                    <strong>Parking </strong>
                    There is free parking all along the street (Front Street) of the venue. There is an overflow lot located at the end of Front Street, as well.
                 </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="2">Bag Policy</AccordionHeader>
                <AccordionBody accordionId="2">
                    <strong>Yes, you can bring a bag! </strong>
                    Small bags are allowed.
                    However, drugs, weapons, and other contraband are prohibited. You are subject to a sudden search if we think you are at risk of violating any of these conditions.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">Re-Entry Policy</AccordionHeader>
                <AccordionBody accordionId="3">
                 <strong>Re-entry? Typically, yes!</strong>
                    We allow re-entry on a show by show basis. Ask on your way in and they will let you know if re-entry is allowed for the evening.
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="4">Accessibility</AccordionHeader>
                <AccordionBody accordionId="4">
                <strong>Arrival & Accessible entrances: </strong>
                The main entrance to Summit Soundstage is accessible. Guests with Accessibility needs do not need to wait in the General Admission lines; they may check in at the main entrance security podium for assistance. Unfortunately, the mezzanine balcony is only accessible by staircase.
                 </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="5">What am I NOT allowed to bring in?</AccordionHeader>
                <AccordionBody accordionId="5">
                <strong>The following items are prohibited:</strong>
          
                    No guns, knives, weapons, pepper spray, projectiles of any kind, spikes of any kind, or any other item that could be used to inflict harm
                    Replicas of any type of weapon are NOT permitted
                    No drugs or drug paraphernalia, illegal substances of any kind
                    No outside food or drinks
                    No personal video cameras, Go-Pros, selfie sticks, drones, masks or laser pointers
                    No professional audio, video, or audio recording equipment – (including detachable lenses, tripods, zooms or commercial use rigs) without a photo pass
                    No professional audio, video, or audio recording equipment – (including detachable lenses, tripods, zooms or commercial use rigs) without a photo pass
                    No professional audio, video, or audio recording equipment – (including detachable lenses, tripods, zooms or commercial use rigs) without a photo pass
                    No unsealed liquids or gels of any kind
                    No jewelry or clothing that could inflict harm, including spikes of any kind
                    No stuffed animals or toys of any kind
                    **Please note that the list of prohibited items is subject to change. The venue reserves the right to make any necessary adjustments to these protocols to ensure the safety of the tour, artist, and guests.
                 </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="6">What are the box office hours?</AccordionHeader>
                <AccordionBody accordionId="6">
                <strong>Box Office: </strong>
                Our box office is located on 4th Avenue and is open Monday, Wednesday, and Friday from 12-4pm, and 2 hours prior to door time on show days. Please note: Our box office is cashless. 
                Tickets obtained from unauthorized sources may be invalid, refunded, lost, stolen or counterfeit, and if so are void and therefore not valid for entry. We recommend purchasing tickets directly via our box office, Ticketmaster or Live Nation only, and cannot guarantee or validate the authenticity of any third-party tickets.
                 </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="6">Where can I pick up my Will Call tickets?</AccordionHeader>
                <AccordionBody accordionId="6">
                <strong>Will Call: </strong>
                Will call tickets are released on the day of show. Please see box office hours listed above. A government issued photo ID (of the original purchaser) is required to release will call tickets. If the doors are open, so is will call. 
                If you have a meet and greet check-in time, you can also pick them up then. Even if you’re on the artist’s guestlist, you’ll need to wait until door time.
                 </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="6">What are ID requirements?</AccordionHeader>
                <AccordionBody accordionId="6">
                <strong>Requirements: </strong>
                For any age-restricted shows, a physical valid government ID must be presented for entry. Digital and paper IDs WILL NOT be accepted. 
                For international IDs, we will accept government issued passports. Mexican consular ID cards will also be accepted. We also accept any US issued passport card or permanent resident card.
                 </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader targetId="3">Can I smoke?</AccordionHeader>
                <AccordionBody accordionId="3">
                 <strong>This is a non-smoking facility. </strong>
                 The only place you may smoke is outside on the patio.
                </AccordionBody>
              </AccordionItem>
            
            </Accordion>
            </div>
        </div>
    )
}

// export default FAQ;

    
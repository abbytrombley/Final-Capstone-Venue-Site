//Purpose: HomePage displays what is first seen when on site, carousel of images, events calendar


import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,

} from 'reactstrap';
import './HomePage.css'; // Import your CSS
import { GuestCalendar } from '../Events/GuestEvents';
import { useEffect } from 'react';



const items = [
  {
    src: 'https://i0.wp.com/listensd.com/wp-content/uploads/2019/10/casbah222.jpg?fit=600%2C400&ssl=1',
    key: 1,
  },
  {
    src: 'https://whyy.org/wp-content/uploads/2024/09/4the_war_on_drugs_philly_mann_center_18092024.jpg',
    key: 2,
  },
  {
    src: 'https://americanahighways.org/wp-content/uploads/2019/10/DSCF0024.jpeg',
    key: 3,
  },
 {
   src: 'https://redefined.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/04/01060842/VundabarFeat1_CreditYaziFerrufino.jpg',
    key: 4,
 },
 {
  src: 'https://fulltimeaesthetic.com/wp-content/uploads/2023/03/Big-Thief-Emilio-Herce-3-1-23-web-9.jpg',
   key: 5,
},
{
  src: 'https://i.pinimg.com/474x/db/64/48/db64480cdb14146df821d3f6603b1ab5.jpg',
   key: 6,
},
{
  src: 'https://cdn.prod.website-files.com/6590575acec6558ecc0b6176/65930ebc65c352402a423d09_sierraband.webp',
   key: 7,
},
{
  src: 'https://i.pinimg.com/564x/1b/9a/30/1b9a308a02a6cadc20998c4b60ee850e.jpg',
   key: 8,
}
];

export const HomePage = ({cart, setCart}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="carousel-image" src={item.src} alt={`Slide ${item.key}`} />
       
      </CarouselItem>
    );
  });




  useEffect(() => {
    document.body.style.backgroundImage = `url(https://i.pinimg.com/474x/2d/76/47/2d76478455feeda973eb295263b2d0dc.jpg)`
  } , [])







  return (
    <div>
      <div className="carousel-container">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>

      <div>
        <GuestCalendar cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}















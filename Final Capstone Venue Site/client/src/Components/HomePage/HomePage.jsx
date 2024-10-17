//Purpose: HomePage displays what is first seen when on site, carousel of images, events calendar


import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import './HomePage.css'; // Import your CSS
import { GuestCalendar } from '../Events/GuestEvents';



const items = [
  {
    src: 'https://i0.wp.com/listensd.com/wp-content/uploads/2019/10/casbah222.jpg?fit=600%2C400&ssl=1',
    key: 1,
  },
  {
    src: 'https://i0.wp.com/listensd.com/wp-content/uploads/2019/10/winstons_ob_t640.jpg?fit=640%2C425&ssl=1',
    key: 2,
  },
  {
    src: 'https://www.liveinlimbo.com/wp-content/uploads/2022/08/FranzFerdinand_20220818_3-1140x694.jpg',
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
  src: 'https://i0.wp.com/fulltimeaesthetic.com/wp-content/uploads/2023/03/Buck-Meek-Emilio-Herce-3-1-23-web-20.jpg?resize=1024%2C683&ssl=1',
   key: 6,
}
];

function HomePage(args) {
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
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <div className="carousel-container">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
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
        <GuestCalendar />
      </div>
    </div>
  );
}

export default HomePage;














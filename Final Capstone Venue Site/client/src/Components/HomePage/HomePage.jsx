//Purpose: HomePage displays what is first seen when on site, carousel of images, events calendar
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://i0.wp.com/listensd.com/wp-content/uploads/2019/10/casbah222.jpg?fit=600%2C400&ssl=1',
    // src: 'https://soperth.com.au/wp-content/uploads/2021/07/183623051_5961614467183799_2685049322971647351_n.jpg',
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://i0.wp.com/listensd.com/wp-content/uploads/2019/10/winstons_ob_t640.jpg?fit=640%2C425&ssl=1',
    // altText: 'Slide 2',
    // caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://cdn-ackdk.nitrocdn.com/qBqlBsrVHtEChvtyScIAsePuRQiQAuol/assets/images/optimized/rev-2db06b6/www.canaanvalleyhalfmarathon.com/wp-content/uploads/2021/11/SunriseEarlySpring-768x432.jpg',
    // altText: 'Slide 3',
    // caption: 'Slide 3',
    key: 3,
  },
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
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
    <div className="picture_size">
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
      This is where my calendar will load
    </div>




    </div>
  );
}

export default HomePage;



















// import React from "react";

// export default function HomePage() {
//   return (
//     <span style={{
//       position: "fixed",
//       left: 0,
//       right: 0,
//       top: "50%",
//       marginTop: "-0.5rem",
//       textAlign: "center",
//     }}>This is my homepage</span>
//   );
// }
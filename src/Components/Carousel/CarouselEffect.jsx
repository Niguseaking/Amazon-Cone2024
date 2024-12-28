
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// // https://www.npmjs.com/package/react-responsive-carousel  install


// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import { img } from './img/Data';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// function CarouselEffect() {
//   return (
//     <div>
//       <Carousel
//         autoplay={true}
//         infiniteLoop={true}
//         showIndicators={false}
//         showThumbs={false}
//       >
//         {img.map((imageItemLink, index) => (
//           <img key={index} src={imageItemLink} alt={`Slide ${index + 1}`} />
//         ))}
//       </Carousel>
//       <div className={ClassNames.hero__img}></div>
//     </div>
//   );
// }

// export default CarouselEffect;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { img } from './img/Data';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => (
          <div key={index}>
            <img src={imageItemLink} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      <div className="hero__img"></div>
    </div>
  );
}

export default CarouselEffect;

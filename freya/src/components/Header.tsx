import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';
import 'animate.css';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from 'react';

function Header() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <header>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative bg-header_1 w-full h-custom bg-center bg-cover flex items-end justify-between">
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent"></div>
            <div
              className={`ms-44 mb-20 text-white z-10 ${activeSlide === 0 ? 'animate__animated animate__fadeInLeft' : ''
                }`}
            >
              <h3 className="uppercase text-custom">AvePoint Richmond</h3>
              <h1 className="text-5xl">More livable spaces</h1>
            </div>
            <div
              className={`me-44 mb-20 text-white border p-2 z-10 ${activeSlide === 0 ? 'animate__animated animate__fadeInRight' : ''
                }`}
            >
              <button>VIEW CASE STUDY</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-header_2 w-full h-custom bg-center bg-cover flex items-end justify-between">
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent"></div>
            <div
              className={`ms-44 mb-20 text-white z-10 ${activeSlide === 1 ? 'animate__animated animate__fadeInLeft' : ''
                }`}
            >
              <h3 className="uppercase text-custom">French Valley</h3>
              <h1 className="text-5xl">Luxurious Apartment</h1>
            </div>
            <div
              className={`me-44 mb-20 text-white border p-2 z-10 ${activeSlide === 1 ? 'animate__animated animate__fadeInRight' : ''
                }`}
            >
              <button>VIEW CASE STUDY</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative bg-header_3 w-full h-custom bg-center bg-cover flex items-end justify-between">
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent"></div>
            <div
              className={`ms-44 mb-20 text-white z-10 ${activeSlide === 2 ? 'animate__animated animate__fadeInLeft' : ''
                }`}
            >
              <h3 className="uppercase text-custom">Upper Chesterfield</h3>
              <h1 className="text-5xl">Sorption Marking Studio</h1>
            </div>
            <div
              className={`me-44 mb-20 text-white border p-2 z-10 ${activeSlide === 2 ? 'animate__animated animate__fadeInRight' : ''
                }`}
            >
              <button>VIEW CASE STUDY</button> 
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Header;

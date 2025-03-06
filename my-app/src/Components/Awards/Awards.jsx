import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Awards.css';

// Import award images

const Awards = () => {
  const awards = [
    {
      image: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-1.png',
      title: "ASIAN REAL ESTATE LEADERSHIP AWARD",
      description: "INNOVATIVE PROJECT OF THE YEAR 2021 - WADHWA PRISTINE"
    },
    {
      image: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-2.png',
      title: "13 REALTY+ CONCLAVE & EXCELLENCE AWARDS, 2021",
      description: "DEVELOPER OF THE YEAR RESIDENTIAL"
    },
    {
      image: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-3.png',
      title: "TIMES REAL ESTATE CONCLAVE & AWARDS 2021",
      description: "ICONIC TOWNSHIP PROJECT - THE WADHWA WISE CITY"
    },
    {
      image: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-1.png',
      title: "ASIAN REAL ESTATE LEADERSHIP AWARD",
      description: "INNOVATIVE PROJECT OF THE YEAR 2021 - WADHWA PRISTINE"
    },
    {
      image: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-2.png',
      title: "13 REALTY+ CONCLAVE & EXCELLENCE AWARDS, 2021",
      description: "DEVELOPER OF THE YEAR RESIDENTIAL"
    },
    {
      image: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/05/aw-3.png',
      title: "TIMES REAL ESTATE CONCLAVE & AWARDS 2021",
      description: "ICONIC TOWNSHIP PROJECT - THE WADHWA WISE CITY"
    }
  ];

  return (
    <div className="awards-section">
      <div className="awards-header">
        <h1 className="awards-title">AWARDS</h1>
        <p className="awards-subtitle">OUR ACCOLADES OVER THE YEARS</p>
      </div>
      
      <div className="awards-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="awards-swiper"
        >
          {awards.map((award, index) => (
            <SwiperSlide key={index}>
              <div className="award-card">
                <div className="award-border">
                  <div className="award-image-container">
                    <img src={award.image} alt={award.title} className="award-image" />
                  </div>
                  <h3 className="award-title">{award.title}</h3>
                  <p className="award-description">{award.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Awards;

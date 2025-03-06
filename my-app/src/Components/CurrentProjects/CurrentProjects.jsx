import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './CurrentProjects.css';

const projects = [
  {
    id: 1,
    name: 'ATMOSPHERE O2',
    location: 'GMLR, MULUND WEST',
    image: 'https://www.thewadhwagroup.com/wp-content/uploads/2024/10/tulip-appartments.jpg',
  },
  {
    id: 2,
    name: 'MAGNOLIA',
    location: 'PANVEL',
    image: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/o2-list2.jpg',
  },
  {
    id: 3,
    name: 'VENUE 52',
    location: 'KHAR WEST',
    image: 'https://www.thewadhwagroup.com/wp-content/uploads/2024/05/venue-52.jpg',
  },
  {
    id: 4,
    name: 'THE HAVEN',
    location: 'PANVEL',
    image: 'https://www.thewadhwagroup.com/wp-content/uploads/2024/05/The-Haven.jpg',
  },
  {
  id: 5,
  name: 'THE RESERVE',
  location: 'PANVEL',
  image: 'https://www.thewadhwagroup.com/wp-content/uploads/2024/09/New-Project-21.jpg',
}
  
];

const NextArrow = ({ className, onClick }) => (
  <button 
    className={`${className} custom-arrow custom-next`} 
    onClick={onClick}
    aria-label="Next"
  >
    <span className="arrow-icon">❯</span>
  </button>
);

const PrevArrow = ({ className, onClick }) => (
  <button 
    className={`${className} custom-arrow custom-prev`} 
    onClick={onClick}
    aria-label="Previous"
  >
    <span className="arrow-icon">❮</span>
  </button>
);

const CurrentProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  };

  return (
    <section className="current-projects">
      <div className="container">
        <h2 className="section-title">CURRENT PROJECTS</h2>
        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="project-slide">
              <div className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p>{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CurrentProjects;

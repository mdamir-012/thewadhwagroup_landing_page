import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            mainImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner1.jpg',
            sideImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner1-a.png',
            projectName: 'MAGNOLIA, PANVEL'
        },
        {
            mainImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner2.jpg',
            sideImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner2-a.png',
            projectName: 'TW GARDENS, KANDIVALI EAST'
        },
        {
          mainImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner3.jpg',
          sideImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner3-a.png',
          projectName: 'TW GARDENS, KANDIVALI EAST'
      },
      {
        mainImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner4.jpg',
        sideImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner4-a.png',
        projectName: 'ATMOSPHERE, MULUND WEST'
      },
      {
        mainImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner5.jpg',
        sideImage: 'https://www.thewadhwagroup.com/wp-content/uploads/2021/07/home-banner5-a.png',
        projectName: 'MAGNOLIA, PANVEL'
    },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="hero">
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                        <div 
                            className="slide-main-image"
                            style={{ backgroundImage: `url(${slide.mainImage})` }}
                        />
                        <div 
                            className="slide-side-image"
                            style={{ backgroundImage: `url(${slide.sideImage})` }}
                        />
                        <div className="diagonal-divider" />
                        <div className="slide-content">
                            <h1 className="main-title">
                                LANDMARKS PLANNED
                                <br />
                                WITH PASSION
                            </h1>
                            <div className="subtitle">
                                <span>TRANSFORMING MUMBAI'S SKYLINE</span>
                                <br />
                                <span>SINCE 1969</span>
                            </div>
                            <div className="project-name">
                                {slide.projectName}
                            </div>
                        </div>
                    </div>
                ))}
                <div className="scroll-indicator">
                    <svg viewBox="0 0 24 24" width="40" height="40">
                        <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                    </svg>
                </div>
                <div className="slider-navigation">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
                <div className="side-navigation">
                    <button 
                        className="nav-arrow prev"
                        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                        </svg>
                    </button>
                    <button 
                        className="nav-arrow next"
                        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero; 
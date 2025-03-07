import React, { useState } from 'react';
import './Testimonials.css';

const testimonialData = [
    {
        id: 1,
        quote: "It is very clear that they are very transparent. We Enjoy working with them. The Matching of the company DNA with that of the Promotor leads to excellent project execution and customer centricity.",
        name: "KHUSHRU JIJINA",
        designation: "MANAGING DIRECTOR OF FUND MANAGEMENT, PIRAMAL ENTERPRISES LTD.",
        image: "https://www.thewadhwagroup.com/wp-content/uploads/2020/04/testimonial1.png"
    },
    {
        id: 2,
        quote: "Passion, dedication, devotion yet different - all are synonyms to The Wadhwa Group.",
        name: "ANUJ PURI",
        designation: "Former Chairman & Country Head, Jones Lang LaSalle, India	",
        image: "https://www.thewadhwagroup.com/wp-content/uploads/2020/04/testimonial2.png"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
        );
    };

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">TESTIMONIALS</h2>
            <div className="testimonials-container">
                <button className="nav-button prev" onClick={prevSlide}>
                    <span>&#8249;</span>
                </button>
                
                <div className="testimonial-content">
                    <p className="testimonial-quote">
                        "{testimonialData[currentIndex].quote}"
                    </p>
                    <div className="testimonial-author">
                        <div className="author-image">
                            <img 
                                src={testimonialData[currentIndex].image} 
                                alt={testimonialData[currentIndex].name}
                            />
                        </div>
                        <h3 className="author-name">{testimonialData[currentIndex].name}</h3>
                        <p className="author-designation">{testimonialData[currentIndex].designation}</p>
                    </div>
                </div>

                <button className="nav-button next" onClick={nextSlide}>
                    <span>&#8250;</span>
                </button>
            </div>
        </section>
    );
};

export default Testimonials; 
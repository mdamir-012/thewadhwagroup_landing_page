import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="about-us-section">
            <div className="about-us-content">
                <p className="about-legacy">
                    With a rich legacy spanning decades, <span className="company-name">The Wadhwa Group</span> has emerged as one of the top builders in Mumbai. Our commitment to excellence, coupled with a passion for innovation, has led us to create luxurious projects that redefine urban living.
                </p>

                <p className="about-description">
                    As prominent builders in Mumbai, we take pride in our journey of developing residential, commercial, and township projects that reflect our unwavering dedication to quality and customer satisfaction.
                </p>

                <p className="about-description">
                    At <span className="company-name">The Wadhwa Group</span>, our name is synonymous with trust, quality, and luxury. We understand that a home is not just a structure; it's where dreams take shape and memories are made. This belief drives us to create spaces that resonate with your lifestyle and aspirations.
                </p>

                <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
                    <p className="about-description">
                        As top builders in Mumbai, we believe in delivering more than just buildings; we provide lifestyles. Our ongoing projects, such as <span className="project-name">Wadhwa Wise City</span>, <span className="project-name">Atmosphere O2</span>, <span className="project-name">TW Gardens</span>, <span className="project-name">Magnolia</span> and <span className="project-name">Venue52</span> are testaments to our vision. Each project bears the hallmark of our commitment to excellence and dedication to crafting spaces that offer the perfect blend of comfort and sophistication.
                    </p>

                    <p className="about-description">
                        When you choose <span className="company-name">The Wadhwa Group</span>, you choose more than just a home; you choose a legacy of trust, innovation, and luxury. With us, you're not just buying a property; you're investing in a lifestyle.
                    </p>

                    <p className="about-description">
                        Explore our ongoing projects, and let us help you find the perfect space that resonates with your dreams and aspirations. Discover why <span className="company-name">The Wadhwa Group</span> stands out as one of the top builders in Mumbai, where luxury meets excellence.
                    </p>

                    <p className="about-description">
                        Experience the difference with <span className="company-name">The Wadhwa Group</span> – where every project is a masterpiece and every home is a dream fulfilled.
                    </p>
                </div>

                <button className="read-more-btn" onClick={toggleReadMore}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </section>
    );
};

export default AboutUs; 
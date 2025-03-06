import React, { useEffect, useState } from 'react';
import './Navbar.css';

/**
 * Navbar Component
 * A responsive navigation bar for The Wadhwa Group website
 * Features:
 * - Responsive design for mobile and desktop
 * - Sticky navigation
 * - Hamburger menu for mobile
 * - Smooth scroll functionality
 * - Dynamic background on scroll
 */
const Navbar = () => {
    // State for mobile menu and scroll position
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Left Navigation Links */}
                    <div className={`nav-links left ${isMenuOpen ? 'active' : ''}`}>
                        <div className="search-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                            </svg>
                        </div>
                        <a href="/" className="nav-link">HOME</a>
                        <a href="/about" className="nav-link">ABOUT US</a>
                        <a href="/design" className="nav-link">DESIGN</a>
                    </div>

                    {/* Center Logo */}
                    <div className="logo">
                        <a href="/" className="logo-link">
                            <img src="https://www.thewadhwagroup.com/wp-content/uploads/2025/02/TWG-LOGO-white.png" alt="The Wadhwa Group" />
                            <div className="logo-text">Landmarks planned with passion</div>
                        </a>
                    </div>

                    {/* Right Navigation Links */}
                    <div className={`nav-links right ${isMenuOpen ? 'active' : ''}`}>
                        <a href="/residential" className="nav-link">RESIDENTIAL</a>
                        <a href="/commercial" className="nav-link">COMMERCIAL</a>
                        <a href="/township" className="nav-link">TOWNSHIP</a>
                        <a href="/redevelopment" className="nav-link">REDEVELOPMENT</a>
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar; 
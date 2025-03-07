import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>CONTACT</h3>
          <div className={styles.contactInfo}>
            <div className={styles.companyName}>The Wadhwa Group</div>
            <a href="mailto:enquiry@thewadhwagroup.com" className={styles.email}>
              <span>Email:</span> enquiry@thewadhwagroup.com
            </a>
            <div className={styles.tollFree}>
              <span>Toll Free:</span> 1800 209 6669
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3>OUR PROJECTS</h3>
          <div className={styles.projectLinks}>
            <a href="/residential">Residential</a>
            <a href="/projects/tw-gardens">TW Gardens</a>
            <a href="/projects/atmosphere-o2">Atmosphere O2</a>
            <a href="/projects/wise-city">Wadhwa Wise City</a>
            <a href="/projects/magnolia">Magnolia</a>
            <a href="/projects/the-haven">The Haven</a>
          </div>
        </div>

        <div className={styles.section}>
          <h3>USEFUL LINKS</h3>
          <div className={styles.usefulLinks}>
            <a href="/flats-for-sale-in-panvel">Flats for sale in panvel</a>
            <a href="/new-projects-in-panvel">New projects in panvel</a>
            <a href="/1-2-bhk-in-panvel">1 and 2 bhk in panvel</a>
            <a href="/2-3-bhk-in-mulund">2 and 3 bhk in mulund</a>
            <a href="/new-projects-in-mulund">New projects in mulund</a>
            <a href="/2-3-bhk-in-kandivali-east">2 and 3 bhk flat in kandivali east</a>
          </div>
        </div>

        <div className={styles.section}>
          <h3>ENQUIRE</h3>
          <form className={styles.enquireForm}>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
            />
            <input
              type="tel"
              placeholder="Mobile"
              className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>
              <HiArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
        <div className={styles.copyright}>
          COPYRIGHT © 2024. THE WADHWA GROUP. ALL RIGHTS RESERVED
        </div>
        <div className={styles.links}>
          <a href="/disclaimer">DISCLAIMER</a>
          <span>|</span>
          <a href="/privacy-policy">PRIVACY POLICY</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
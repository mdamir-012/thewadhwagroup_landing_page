import React, { useState } from 'react';
import styles from './RequestCallBack.module.css';

const RequestCallBack = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    date: '',
    interestedProjects: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className={styles.requestCallBack}>
      <div className={styles.container}>
        <h2 className={styles.title}>REQUEST CALL BACK</h2>
        <p className={styles.subtitle}>PLEASE FILL YOUR DETAILS BELOW</p>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <select
              name="interestedProjects"
              value={formData.interestedProjects}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Interested Projects</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="township">Township</option>
              <option value="redevelopment">Redevelopment</option>
            </select>
          </div>

          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className={styles.textarea}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default RequestCallBack; 
import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';

const RequestTool = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    toolName: '',
    toolDescription: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://toolboxpress-backend.onrender.com/request-tool', formData);
      if (response.status === 201) {
        setSubmissionStatus('success');
        setFormData({
           name: '',
    email: '',
    toolName: '',
    toolDescription: ''
          
        });
        console.log('Tool request submitted successfully!');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error submitting tool request:', error);
    }
  };

  const styles = {
    formContainer: {
      maxWidth: '600px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
    },
    label: {
      display: 'block',
      margin: '10px 0',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      boxSizing: 'border-box',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px',
      background: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    successMessage: {
      color: 'green',
    },
    errorMessage: {
      color: 'red',
    },
  };

  return (
    <>
      <Header />
      <main >
        <div className='container my-5' style={styles.formContainer}>
        <img src="logo.png" alt="" className="img-thumbnail" />
        <h1>Request a Tool</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Contact Information</legend>
            <label style={styles.label}>
              Name:
              <input
                style={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
            <label style={styles.label}>
              Email:
              <input
                style={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Tool Information</legend>
            <label style={styles.label}>
              Tool Name:
              <input
                style={styles.input}
                type="text"
                name="toolName"
                value={formData.toolName}
                onChange={handleInputChange}
                required
              />
            </label>
            <label style={styles.label}>
              Tool Description:
              <textarea
                style={styles.textarea}
                name="toolDescription"
                value={formData.toolDescription}
                onChange={handleInputChange}
                required
              />
            </label>
          </fieldset>

          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>

        {submissionStatus === 'success' && (
          <p style={styles.successMessage}>Tool request submitted successfully!</p>
        )}
        {submissionStatus === 'error' && (
          <p style={styles.errorMessage}>Error submitting tool request. Please try again.</p>
        )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RequestTool;

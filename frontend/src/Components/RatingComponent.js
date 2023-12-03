import React, { useState,useEffect } from 'react';
import Rating from 'react-rating';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
const AverageRatingComponent = () => {
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  const fetchAverageRating = async () => {
    try {
      const currentUrl = window.location.pathname;
      const response = await axios.get('/get-average-rating', {
        params: {
          currentUrl,
        },
      });
  
      setAverageRating(response.data.averageRating);
      setRatingCount(response.data.count);
    } catch (error) {
      console.error('Error fetching average rating:', error);
    }
  };
  

  useEffect(() => {
    // Fetch average rating and count when the component mounts
    fetchAverageRating();
  }, []);
  const getColor = () => {
    // Choose colors based on the average rating (customize as needed)
    if (averageRating >= 4) {
      return 'green';
    } else if (averageRating >= 3) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const ratingStyle = {
    display: 'inline-block',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: getColor(),
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <div className="container-fluid mt-4">
      <div className="mb-3">
       
          Average Rating:{' '}
          <span style={ratingStyle}>{averageRating}</span> (from {ratingCount} ratings)
       
      </div>
    </div>
  );
 
};
const RatingComponent = () => {
  const [rating, setRating] = useState(1);
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const currentUrl = window.location.pathname;

      await axios.post('/submit-feedback', {
        rating,
        feedback,
        url: currentUrl,
      });

      // Update modal message and show modal
      setModalMessage('Feedback submitted successfully!');
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleCloseModal = () => {
    // Close modal and reset state
    setShowModal(false);
    setModalMessage('');
  };
  const starStyle = {
    color: 'orange', // Set the color of the full star to gold
    marginRight: '5px', // Adjust as needed
  };
  return (
    <div className="container mt-4 mb-3">
      <h2>Provide your feedback</h2>
      <AverageRatingComponent/>
      <div className="mb-3">
        <label className="mr-2">Rating:</label>
       

    <Rating
      initialRating={rating}
      emptySymbol={<i className="far fa-star" style={starStyle}></i>}
      fullSymbol={<i className="fas fa-star" style={starStyle}></i>}
      onChange={handleRatingChange}
    />
  
      </div>
      <div className="mb-3">
        <label>Feedback:</label>
        <textarea
          className="form-control"
          value={feedback}
          onChange={handleFeedbackChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Feedback
      </button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Feedback Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RatingComponent;
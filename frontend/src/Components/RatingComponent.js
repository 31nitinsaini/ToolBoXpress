import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

const ShareIcons = ({ url }) => (
  <div style={styles.shareIconsContainer}>
    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" style={styles.shareIcon}>
      <i className="fab fa-twitter"></i>
    </a>
    <a href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" style={styles.shareIcon}>
      <i className="fab fa-linkedin"></i>
    </a>
    <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" style={styles.shareIcon}>
      <i className="fab fa-whatsapp"></i>
    </a>
  </div>
);

const styles = {
  shareIconsContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Align to the right end of the container
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px', // Add margin at the bottom
  },
  shareIcon: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '24px',
    marginLeft: '10px', // Add margin to each icon
    transition: 'color 0.3s ease-in-out',
  },
};

const AverageRatingComponent = ({ showModal }) => {
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  const fetchAverageRating = async () => {
    try {
      const currentUrl = window.location.pathname;
      const response = await axios.get('https://toolboxpress-backend.onrender.com/get-average-rating', {
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
    fetchAverageRating();
  }, [showModal]);

  const getColor = () => {
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
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(checkIfFavorite());
  }, []);

  const checkIfFavorite = () => {
    const currentUrl = window.location.pathname;
    const favorites = localStorage.getItem('favorites');
    return favorites && favorites.includes(currentUrl);
  };

  const toggleFavorite = () => {
    const currentUrl = window.location.pathname;
    const favorites = localStorage.getItem('favorites');
    const favoriteList = favorites ? favorites.split(',') : [];

    if (favoriteList.includes(currentUrl)) {
      const updatedFavorites = favoriteList.filter((url) => url !== currentUrl);
      localStorage.setItem('favorites', updatedFavorites.join(','));
      setIsFavorite(false);
    } else {
      favoriteList.push(currentUrl);
      localStorage.setItem('favorites', favoriteList.join(','));
      setIsFavorite(true);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const currentUrl = window.location.pathname;

      await axios.post('https://toolboxpress-backend.onrender.com/submit-feedback', {
        rating,
        feedback,
        url: currentUrl,
      });

      setModalMessage('Feedback submitted successfully!');
      setShowModal(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  const starStyle = {
    color: 'orange',
    marginRight: '5px',
  };

  const currentUrl = window.location.href;

  return (
    <div className="container mt-4 mb-3">
      <ShareIcons url={currentUrl} />

      <button
        className={`btn ${isFavorite ? 'btn-secondary' : 'btn-primary'} my-2`}
        onClick={toggleFavorite}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <h2>Provide your feedback</h2>
      <AverageRatingComponent showModal={showModal} />
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

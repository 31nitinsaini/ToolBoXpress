import React, { useState, useEffect } from 'react';
import { Toast, Button } from 'react-bootstrap';
import Rating from 'react-rating';

const questions = [
    'Rate our website overall:',
    'Rate the user interface:',
    'Rate the variety of tools:',
    'Rate the ease of use:',
];

const FeedbackToast = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [ratings, setRatings] = useState({
        overall: 0,
        userInterface: 0,
        toolVariety: 0,
        easeOfUse: 0,
    });


    const onClose = () => {
        setIsToastVisible(false);
    };

    const handleRatingChange = (value) => {
        setRatings((prev) => ({
            ...prev,
            [getRatingKey(currentQuestion)]: value,
        }));
    };

    // Add a helper function to get the rating key based on the current question index
    const getRatingKey = (index) => {
        switch (index) {
            case 0:
                return 'overall';
            case 1:
                return 'userInterface';
            case 2:
                return 'toolVariety';
            case 3:
                return 'easeOfUse';
            default:
                return '';
        }
    };


    const handleSubmit = async () => {
        try {
            // If there are more questions, move to the next question
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                // Send feedback to the server
                await fetch('/website-feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(ratings),
                });
                localStorage.setItem('isFeedbackSubmiited', true);
                // Close the toast if all questions are answered
                onClose();
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };


    useEffect(() => {
        // Check if the toast has been shown today
        const lastShownDate = localStorage.getItem('feedbackToastLastShown');
        const isFeedbackSubmiited = localStorage.getItem('isFeedbackSubmiited');
        const today = new Date().toLocaleDateString();

        if (!lastShownDate || lastShownDate !== today) {
            // If not shown today, set the flag and show the toast
            setIsToastVisible(true);
            localStorage.setItem('feedbackToastLastShown', today);
        }
        if (!isFeedbackSubmiited) {
            setIsToastVisible(true);
        }
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <Toast show={isToastVisible} onClose={onClose} style={{ position: 'fixed', bottom: '20px', right: '20px', minWidth: '300px' }}>
            <Toast.Header>
                <strong className="me-auto">Feedback</strong>
            </Toast.Header>
            <Toast.Body>
                <form>
                    <div className="mb-3">
                        <p style={{ fontSize: '22px' }}>{questions[currentQuestion]}</p>
                        <Rating
                            style={{ fontSize: '22px' }}
                            initialRating={ratings[getRatingKey(currentQuestion)]}
                            onChange={(value) => handleRatingChange(value)}
                            emptySymbol={<span className="rating-icon">&#9711;</span>}
                            fullSymbol={<span className="rating-icon">&#11044;</span>}
                        />
                    </div>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="sm" onClick={handleSubmit}>
                            {currentQuestion < questions.length - 1 ? 'Next' : 'Submit Feedback'}
                        </Button>
                        <Button variant="secondary" size="sm" onClick={onClose}>
                            Close
                        </Button>
                    </div>
                </form>
            </Toast.Body>
        </Toast>
    );
};

export default FeedbackToast;

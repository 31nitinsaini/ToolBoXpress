import React, { useState,useEffect } from 'react';

const PollSection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
      const questions = document.querySelectorAll('.poll-question');
      const prevButton = document.getElementById('prevQuestion');
      const nextButton = document.getElementById('nextQuestion');
      const submitButton = document.getElementById('submitPoll');
  
      function showQuestion(questionIndex) {
        questions.forEach((question, index) => {
          if (index === questionIndex) {
            question.style.display = 'block';
          } else {
            question.style.display = 'none';
          }
        });
  
        prevButton.disabled = questionIndex === 0;
        nextButton.disabled = !questions[questionIndex].querySelector('input:checked');
  
        if (questionIndex === questions.length - 1) {
          nextButton.style.display = 'none';
          submitButton.style.display = 'block';
        } else {
          nextButton.style.display = 'block';
          submitButton.style.display = 'none';
        }
      }
  
      showQuestion(currentQuestion);
  
      prevButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
          setCurrentQuestion(currentQuestion - 1);
          showQuestion(currentQuestion - 1);
        }
      });
  
      nextButton.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          showQuestion(currentQuestion + 1);
        }
      });
  
      // Additional code to update Next button state when an option is selected
      questions.forEach((question, index) => {
        const options = question.querySelectorAll('input[type="radio"]');
        options.forEach((option) => {
          option.addEventListener('change', () => {
            nextButton.disabled = !questions[currentQuestion].querySelector('input:checked');
          });
        });
      });
  
    }, [currentQuestion]);

    return (
        <>
              <div className="user-polls-section">
                <h2>Join the Conversation</h2>
                <p>Take part in our polls and surveys to share your insights and opinions about tools and industry trends.
                </p>
                <div className="poll-container">
                    <div className="poll-question" data-question="Question 1">
                        <h3>Question 1</h3>
                        <div className="poll-options">
                            <div className="poll-option" data-option="Option 1.1">
                                <label>
                                    <input type="radio" name="poll1" defaultValue="Option 1.1" />
                                    Option 1.1
                                </label>
                            </div>
                            <div className="poll-option" data-option="Option 1.2">
                                <label>
                                    <input type="radio" name="poll1" defaultValue="Option 1.2" />
                                    Option 1.2
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="poll-question" data-question="Question 2">
                        <h3>Question 2</h3>
                        <div className="poll-options">
                            <div className="poll-option" data-option="Option 2.1">
                                <label>
                                    <input type="radio" name="poll2" defaultValue="Option 2.1" />
                                    Option 2.1
                                </label>
                            </div>
                            <div className="poll-option" data-option="Option 2.2">
                                <label>
                                    <input type="radio" name="poll2" defaultValue="Option 2.2" />
                                    Option 2.2
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="poll-question" data-question="Question 3">
                        <h3>Question 3</h3>
                        <div className="poll-options">
                            <div className="poll-option" data-option="Option 3.1">
                                <label>
                                    <input type="radio" name="poll3" defaultValue="Option 3.1" />
                                    Option 3.1
                                </label>
                            </div>
                            <div className="poll-option" data-option="Option 3.2">
                                <label>
                                    <input type="radio" name="poll3" defaultValue="Option 3.2" />
                                    Option 3.2
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="poll-question" data-question="Question 4">
                        <h3>Question 4</h3>
                        <div className="poll-options">
                            <div className="poll-option" data-option="Option 4.1">
                                <label>
                                    <input type="radio" name="poll4" defaultValue="Option 4.1" />
                                    Option 4.1
                                </label>
                            </div>
                            <div className="poll-option" data-option="Option 4.2">
                                <label>
                                    <input type="radio" name="poll4" defaultValue="Option 4.2" />
                                    Option 4.2
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="poll-controls">
                    <div className="button-container">
                        <button id="prevQuestion" disabled>Prev</button>
                        <button id="nextQuestion">Next</button>
                        <button id="submitPoll" style={{ display: 'none' }}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PollSection
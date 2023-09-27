import React, { useState,useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Header/>
            <main>
                <HeroSection />
                <MainSection />
                <AboutSection />
                <PollSection />
            </main>
            <Footer />
        </>
    )
}
const HeroSection = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <h1 className="hero-heading">Welcome to ToolboXpress</h1>
                            <p className="hero-subheading">Discover a world of tools and solutions for all your needs.</p>
                            <a href="#" className="btn btn-hero">Explore Now</a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

const MainSection = () => {
    return (
        <>
            <section className="main-section">
                <div className="container">
                    <div className="tool-overview">
                        <div className="tool">
                            
                            <h2>Text Toolbox</h2>
                            <p>Format, edit, and manipulate text with ease. Our tools include a rich text editor, word
                                count, and text transformation functions.
                            </p>
                            <a href="tool1.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            
                            <h2>PDF Powerhouse</h2>
                            <p>Manage PDF files effortlessly. Convert, merge, compress, and secure your PDFs, all in one
                                place.
                            </p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                        
                            <h2> Image Wizardry</h2>
                            <p>Enhance, resize, and convert images with our suite of image manipulation tools. Create
                                stunning visuals in minutes.</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2>Social Media Assistance</h2>
                            <p> Download Instagram and YouTube content, from posts to videos, and manage your social media
                                presence effortlessly.</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2>File Conversion Magic</h2>
                            <p>Convert documents, images, audio, and more to different formats, catering to all your media
                                needs.</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2>Coding Tools</h2>
                            <p> Beautify your code, convert JSON to XML, and perform other code-related tasks with our
                                coding utilities</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2> Privacy and Security</h2>
                            <p> Protect your data with our secure tools, including password generation and encryption
                                utilities</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2> Time and Productivity</h2>
                            <p>Stay organized and efficient with time zone converters, calculators, and
                                productivity-enhancing features.</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2>Travel and Exploration</h2>
                            <p>Plan your travels, calculate distances, and explore the world with our travel and geography
                                tools</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2>Health and Lifestyle</h2>
                            <p>Stay fit and healthy with calculators, BMI trackers, and lifestyle management utilities.</p>
                            <a href="tool2.html"> <i className="fas fa-arrow-right" />
                            </a>
                        </div>
                        <div className="tool">
                            <h2>Environmental Consciousness</h2>
                            <p>Calculate and reduce your carbon footprint with our eco-friendly tools and tips.</p>
                            <a href="tool2.html"><i className="fas fa-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
const AboutSection = () => {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>About Us</h2>
                            <p>Welcome to ToolboXpress!</p>
                            <p>At ToolboXpress, we are passionate about providing you with a comprehensive collection
                                of tools to meet your needs. Whether you're a professional tradesperson or a DIY enthusiast,
                                our
                                mission is to
                                make your projects easier and more efficient by offering a wide range of high-quality tools.
                            </p>
                            <p>Our team of experts carefully curates and reviews each tool we feature, ensuring that you
                                have access to the best
                                products on the market. We understand that having the right tool can make all the
                                difference, and we're here to
                                help you find the perfect fit for your project.</p>
                            <p>From power tools to hand tools, from woodworking to automotive, ToolboXpress has you
                                covered. Explore our
                                website, discover the tools you need, and make your projects a success with
                                ToolboXpress.</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src="https://via.placeholder.com/400x300" alt="About Us" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
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
export default Home
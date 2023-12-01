import React, { useState,useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import PollSection from '../Components/PollSection';
import Helmet from 'react-helmet';
const Home = () => {
    

    return (
        <>
            <Header/>
            <Helmet>
                <title>ToolboXpress - Your Utility Store</title>
                <meta name="description" content="Explore a variety of online utility tools at ToolboXpress, your one-stop utility store. Find text manipulation tools, file converters, coding utilities, and more." />
                <meta name="keywords" content="utility store, online tools, text manipulation, file conversion, coding tools, utility website" />
                <meta name="author" content="Your Name" />

                {/* Open Graph meta tags for social media sharing */}
                <meta property="og:title" content="ToolboXpress - Your Utility Store" />
                <meta property="og:description" content="Explore a variety of online utility tools at ToolboXpress, your one-stop utility store. Find text manipulation tools, file converters, coding utilities, and more." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />

                {/* Twitter Card meta tags for Twitter sharing */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="ToolboXpress - Your Utility Store" />
                <meta name="twitter:description" content="Explore a variety of online utility tools at ToolboXpress, your one-stop utility store. Find text manipulation tools, file converters, coding utilities, and more." />

                {/* Canonical URL to specify the preferred version of a page */}
                <link rel="canonical" href={window.location.href} />

                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

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

export default Home
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Helmet from 'react-helmet';

const AboutUs = () => {
    return (
        <>
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
            <Header />
            <main>
                <AboutUsContainer />
            </main>
            <Footer />
        </>
    )
}
const AboutUsContainer = () => {
    return (

        <>
            <style dangerouslySetInnerHTML={{ __html: "\n        /* Add your CSS styles here */\n        .about-container {\n            max-width: 800px;\n            margin: 20px auto;\n            padding: 20px;\n            background-color: #fff;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n    " }} />

            <div className="about-container">
                <img src="logo.png" alt="" className="img-thumbnail" />
                <h2>Welcome to ToolboXpress!</h2>
                <p>At ToolboXpress, we are passionate about providing you with a comprehensive collection of tools to meet your needs. Whether you're a professional tradesperson or a DIY enthusiast, our mission is to make your projects easier and more efficient by offering a wide range of high-quality tools.</p>
                <p>Our journey began in 2010 when a group of tool enthusiasts came together with a shared vision. Over the years, we have grown into a trusted resource for tool users worldwide. We take pride in our commitment to innovation and quality, and we're constantly researching and testing new tools to ensure we offer the latest and most reliable options for our customers.</p>
                <p>At ToolboXpress, we believe that everyone should have access to the right tools to bring their ideas to life. That's why we're dedicated to providing tools that are not only reliable but also affordable. We understand the value of hard work and the satisfaction of completing a project, and we're here to support you every step of the way.</p>
                <p>From power tools to hand tools, from woodworking to automotive, ToolboXpress has you covered. Explore our website, discover the tools you need, and make your projects a success with ToolboXpress.</p>
                <h3>Our Commitment</h3>
                <p>At ToolboXpress, we are committed to:</p>
                <ul>
                    <li>Providing top-quality tools for all your needs.</li>
                    <li>Helping you make informed decisions with our expert reviews.</li>
                    <li>Supporting your projects and making them more efficient.</li>
                    <li>Continuously updating our product catalog to stay ahead of industry trends.</li>
                    <li>Offering exceptional customer service to assist you at every step.</li>
                </ul>
                <h3>Contact Us</h3>
                <p>If you have any questions or need assistance, feel free to <a href="contact.html">contact us</a>. We're here to assist you!</p>
            </div>

        </>
    )
}
export default AboutUs
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <main>
                <PrivacyPolicyContainer />
            </main>
            <Footer />
        </>
    ) 
}
const PrivacyPolicyContainer = () => {
    return (

        <>
            <style dangerouslySetInnerHTML={{ __html: "\n        /* Add your CSS styles here */\n        .privacy-container {\n            max-width: 800px;\n            margin: 20px auto;\n            padding: 20px;\n            background-color: #fff;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n    " }} />

            <div className="privacy-container">

                <h2>Last Updated: [Date]</h2>
                <p>Welcome to ToolboXpress ("we", "our", or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect the information you provide to us when using our website, located at [URL] (the "Service").</p>
                <h2>1. Information We Collect</h2>
                <p><strong>1.1. Information You Provide:</strong> We may collect personal information that you voluntarily submit when using the Service. This may include, but is not limited to, your name, email address, and any other information you provide through forms, surveys, or other interactions with the Service.</p>
                <p><strong>1.2. Automatically Collected Information:</strong> We may collect certain information automatically when you visit our website, such as your IP address, browser type, device information, and usage data. This information is collected using cookies and similar technologies.</p>
                <h2>2. How We Use Your Information</h2>
                <p><strong>2.1. Provide and Maintain the Service:</strong> We use your information to operate, maintain, and improve the Service.</p>
                <p><strong>2.2. Communicate with You:</strong> We may use your email address to send you important updates, newsletters, and marketing information. You may opt-out of these communications at any time.</p>
                <p><strong>2.3. Analytics:</strong> We may use third-party analytics tools to understand how users interact with our website and improve our services.</p>
                <h2>3. Sharing Your Information</h2>
                <p>We do not sell or rent your personal information to third parties. However, we may share your information with:</p>
                <ul>
                    <li>Service providers and partners who assist us in providing the Service.</li>
                    <li>Legal authorities when required by law or to protect our rights and interests.</li>
                    <li>Affiliates and successors in the event of a merger, acquisition, or sale of all or part of our assets.</li>
                </ul>
                <h2>4. Security</h2>
                <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet is entirely secure, and we cannot guarantee the security of your information.</p>
                <h2>5. Your Choices</h2>
                <p>You may update or delete your personal information by contacting us. You can also unsubscribe from marketing communications using the provided opt-out instructions.</p>
                <h2>6. Children's Privacy</h2>
                <p>The Service is not intended for children under the age of 13. We do not knowingly collect or maintain personal information from children.</p>
                <h2>7. Changes to this Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through the Service or by other means.</p>
                <h2>8. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [Email Address].</p>
                <h2>9. Additional Information</h2>
                <h3>9.1. Cookies</h3>
                <p>We use cookies to enhance your experience on our website. Cookies are small files that your web browser places on your device's storage to collect information about your activities on our website. You can manage or disable cookies in your browser settings.</p>
                <h3>9.2. Third-Party Links</h3>
                <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We recommend reviewing their privacy policies before providing any personal information.</p>

            </div>

        </>
    )
}
export default PrivacyPolicy
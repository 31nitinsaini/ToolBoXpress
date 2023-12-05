import React, { useState, useEffect } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Helmet from 'react-helmet';
import { Container, Typography, Card, CardContent, List, ListItem, Link, TextField } from '@mui/material';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Home = () => {
    return (
        <>
            <Header />
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
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
const TopToolsSection = ({ topTools }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: topTools.length,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const handleCardClick = (url) => {
        window.open(url, '_blank'); // Open the URL in a new tab
    };
    return (
        <div className="top-tools-section mb-5 mx-4">
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                Top Tools
            </Typography>
            <Slider {...sliderSettings}>
                {topTools.map((tool) => (
                    <div key={tool.url} onClick={() => handleCardClick(tool.url)}>
                        <Card className='m-2'>
                            <CardContent>
                                <Typography variant="body1" color="text.primary">
                                    {tool.label}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Rating: {tool.rating}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
const MainSection = () => {
    const toolsConfig = [
        {
            title: 'Text Manipulation Tool',
            dropdown: 'text',
            items: [
              { to: '/text-manipulation/lower-to-upper', label: 'Convert Lower to Upper' },
              { to: '/text-manipulation/upper-to-lower', label: 'Convert Upper to Lower' },
              { to: '/text-manipulation/remove-space', label: 'Remove Space' },
              { to: '/text-manipulation/text-count', label: 'Text Count' },
              { to: '/text-manipulation/reverse-text', label: 'Reverse Text' },
              { to: '/text-manipulation/replace-Words', label: 'Replace Text' },
              { to: '/text-manipulation/text-to-speech', label: 'Text to Speech' },
              { to: '/text-manipulation/text-encryption', label: 'Text Encryption' },
              { to: '/text-manipulation/text-decryption', label: 'Text Decryption' },
              { to: '/text-manipulation/morse-code', label: 'Morse Code' },
              { to: '/text-manipulation/lorem-genrator', label: 'Lorem Generator' },
            ],
          },
          {
            title: 'Image Manipulation Tool',
            dropdown: 'image',
            items: [
              { to: '/ImageManipulation/image-resize', label: 'Resize Image' },
              { to: '/ImageManipulation/image-crop', label: 'Crop Image' },
              { to: '/ImageManipulation/image-rotate', label: 'Rotate Image' },
              { to: '/ImageManipulation/image-water-mark', label: 'Add Watermark' },
              { to: '/ImageManipulation/image-filter', label: 'Apply Image Filters' },
              { to: '/ImageManipulation/image-conversion', label: 'Image Format Conversion' },
            ],
          },
          {
            title: 'File Conversion Tool',
            dropdown: 'file',
            items: [
              { to: '/FileConversionTool/excel-to-pdf', label: 'Excel to PDF' },
              { to: '/FileConversionTool/image-to-pdf', label: 'Image to PDF' },
              { to: '/FileConversionTool/text-to-pdf', label: 'Text to PDF' },
              { to: '/FileConversionTool/pdf-merge', label: 'Merge PDF' },
              { to: '/FileConversionTool/pdf-split', label: 'Split PDF' },
            ],
          },
          {
            title: 'Coding Tools',
            dropdown: 'coding',
            items: [
              { to: '/CodingTool/html-formatter', label: 'HTML Formatter' },
              { to: '/CodingTool/code-editor', label: 'HTML Viewer' },
              { to: '/CodingTool/css-minifier', label: 'CSS Minifier' },
              { to: '/CodingTool/js-minifier', label: 'JavaScript Minifier' },
              { to: '/CodingTool/json-formatter', label: 'JSON Formatter' },
              { to: '/CodingTool/sql-editor', label: 'SQL Formatter' },
              { to: '/CodingTool/markdown-editor', label: 'Markdown Editor' },
              { to: '/CodingTool/code-snippet', label: 'Code Snippet Generator' },
            ],
          },
          {
            title: 'Utility',
            dropdown: 'utility',
            items: [
              { to: '/Utility/qr-code-genrator', label: 'QR code genrator' },
              { to: '/Utility/bar-code-genrator', label: 'Bar code generator' },
              { to: '/Utility/password-genrator', label: 'Password generator' },
              { to: '/Utility/color-picker', label: 'Color Picker' },
              { to: '/Utility/bmi-calculator', label: 'BMI Calculator' },
              { to: '/Utility/fd-calculator', label: 'FD Calculator' },
              { to: '/Utility/rd-calculator', label: 'RD Calculator' },

            ],
          },
          {
            title: 'Math & Calculator',
            dropdown: 'calculator',
            items: [
              { to: '/MathCalculator/basic-calc', label: 'Basic Calculator' },
              { to: '/MathCalculator/scientific-calculator', label: 'Scientific Calculator' },
              { to: '/MathCalculator/unit-converter', label: 'Unit Converter' },
              { to: '/MathCalculator/currency-converter', label: 'Currency Converter' },
              { to: '/MathCalculator/days-calculator', label: 'Days Calculator' },
              { to: '/MathCalculator/age-calculator', label: 'Age Calculator' },
              { to: '/MathCalculator/time-calculator', label: 'Time Calculator' },
            ],
          },
        {
            title: 'Hashing',
            dropdown: 'hashing',
            items: [
                { to: '/hashing/md5', label: 'MD5 Hash Generator' },
                { to: '/hashing/sha-256', label: 'SHA-256 Hash Generator' },
                { to: '/hashing/sha-512', label: 'SHA-512 Hash Generator' },
                { to: '/hashing/base64-encode', label: 'Base64 Encode' },
                { to: '/hashing/base64-decode', label: 'Base64 Decode' },
                { to: '/hashing/hmac-generator', label: 'HMAC Generator' },
                { to: '/hashing/bcrypt-generator', label: 'Bcrypt Hash Generator' },
                { to: '/hashing/salted-hash-generator', label: 'Salted Hash Generator' },
                { to: '/hashing/uuid-generator', label: 'UUID Generator' },
                { to: '/hashing/random-string-generator', label: 'Random String Generator' },
                { to: '/hashing/crc32-generator', label: 'CRC32 Generator' },
                { to: '/hashing/ripemd160-generator', label: 'RIPEMD-160 Hash Generator' },
            ],
        },
        {
            title: "Number Base Converters",
            items: [
              {
                to: "/number-base-converter/binary-to-decimal",
                label: "Binary To Decimal Converter"
              },
              {
                to: "/number-base-converter/binary-to-hex",
                label: "Binary To Hex Converter"
              },
              {
                to: "/number-base-converter/binary-to-octal",
                label: "Binary To Octal Converter"
              },
              {
                to: "/number-base-converter/decimal-to-binary",
                label: "Decimal To Binary Converter"
              },
              {
                to: "/number-base-converter/decimal-to-hex",
                label: "Decimal To Hex Converter"
              },
              {
                to: "/number-base-converter/decimal-to-octal",
                label: "Decimal To Octal Converter"
              },
              {
                to: "/number-base-converter/hex-to-binary",
                label: "Hex To Binary Converter"
              },
              {
                to: "/number-base-converter/hex-to-decimal",
                label: "Hex To Decimal Converter"
              },
              {
                to: "/number-base-converter/hex-to-octal",
                label: "Hex To Octal Converter"
              },
              {
                to: "/number-base-converter/octal-to-binary",
                label: "Octal To Binary Converter"
              },
              {
                to: "/number-base-converter/octal-to-decimal",
                label: "Octal To Decimal Converter"
              },
              {
                to: "/number-base-converter/octal-to-hex",
                label: "Octal To Hex Converter"
              }
            ]
          },
          
          
        {
            title: 'Binary Calculator',
            dropdown: 'binary-calculator',
            items: [
              { to: '/binary-calculator/sum', label: 'Binary Sum Calculator' },
              { to: '/binary-calculator/product', label: 'Binary Product Calculator' },
              { to: '/binary-calculator/bitwise-and', label: 'Binary Bitwise AND Calculator' },
              { to: '/binary-calculator/bitwise-nand', label: 'Binary Bitwise NAND Calculator' },
              { to: '/binary-calculator/bitwise-or', label: 'Binary Bitwise OR Calculator' },
              { to: '/binary-calculator/bitwise-nor', label: 'Binary Bitwise NOR Calculator' },
              { to: '/binary-calculator/bitwise-xor', label: 'Binary Bitwise XOR Calculator' },
              { to: '/binary-calculator/bitwise-xnor', label: 'Binary Bitwise XNOR Calculator' },
              { to: '/binary-calculator/bitwise-not', label: 'Binary Bitwise NOT Calculator' },
              { to: '/binary-calculator/bit-inverter', label: 'Binary Bit Inverter' },
              { to: '/binary-calculator/bit-reverser', label: 'Binary Bit Reverser' },
              { to: '/binary-calculator/number-rotator', label: 'Binary Number Rotator' },
              { to: '/binary-calculator/bit-rotator', label: 'Binary Bit Rotator' },
            ],
          },
        {
            title: 'Computer Graphics',
            dropdown: 'computer-graphics',
            items: [
              { to: '/computer-graphics/dda', label: 'DDA Algorithm ' },
              { to: '/computer-graphics/bresenham-line-algorithm', label: 'Bresenham Line Algorithm ' },
              { to: '/computer-graphics/bresenham-circle-algorithm', label: 'Bresenham Circle Algorithm ' },
              { to: '/computer-graphics/sutherland-line-cliping-algorithm', label: 'Cohen Sutherland Line Clipping Algorithm ' },
              { to: '/computer-graphics/cyrus-beck-line-cliping-algorithm', label: 'Cyrus Beck Line Clipping Algorithm ' },
            ],
          },

          {
            "title": "Operating System Algorithms",
            "dropdown": "os-algos",
            "items": [
                  { "to": "/operating-system-algo/fcfs", "label": "First-Come, First-Served (FCFS)" },
                  { "to": "/operating-system-algo/sjf", "label": "Shortest Job First (SJF)" },
                  { "to": "/operating-system-algo/rr", "label": "Round Robin (RR)" },
                  { "to": "/operating-system-algo/priority", "label": "Priority Scheduling" },
                  { "to": "/operating-system-algo/fifo", "label": "First-In, First-Out (FIFO)" },
                  { "to": "/operating-system-algo/lru", "label": "Least Recently Used (LRU)" },
                  { "to": "/operating-system-algo/optimal", "label": "Optimal Page Replacement" },
                ]
              },
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const [topTools, setTopTools] = useState([]);

    useEffect(() => {
        const fetchTopTools = async () => {
            try {
                const response = await axios.get('https://tool-bo-xpress.vercel.app/popular-tools');
                // Map over the topTools and attach labels from toolsConfig
                const toolsWithLabels = response.data.map((topTool) => {
                    const matchingTool = toolsConfig
                        .flatMap((toolGroup) => toolGroup.items)
                        .find((tool) => tool.to === topTool.url);
                    return { ...topTool, label: matchingTool?.label || '' };
                });
                setTopTools(toolsWithLabels);
            } catch (error) {
                console.error('Error fetching top tools:', error);
            }
        };
        fetchTopTools();
    }, []);

    const filteredTools = toolsConfig.filter((toolGroup) =>
        toolGroup.items.some((tool) => tool.label.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: ".tool-group {\n  margin-bottom: 20px;\n}\n\nh2 {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.tool-list {\n  list-style-type: none;\n  padding: 0;\n}\n\n.tool-list li {\n  margin-bottom: 8px;\n}\n\n.tool-list a {\n  text-decoration: none;\n  color: #333; /* Change the color as needed */\n  font-weight: bold;\n  font-size: 16px;\n  transition: color 0.3s ease-in-out;\n}\n\n.tool-list a:hover {\n  color: #007bff; /* Change the hover color as needed */\n}" }} />

            <section className="main-section">
                <TopToolsSection topTools={topTools} />
                <Container>
                    <TextField
                        label="Search Tools"
                        variant="outlined"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="tool-overview">
                        {filteredTools.length === 0 ? (
                            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                No tools found.
                            </Typography>
                        ) : (
                            filteredTools.map((toolGroup) => (
                                <Card key={toolGroup.title} sx={{ marginTop: 4, padding: 2 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
                                            {toolGroup.title}
                                        </Typography>
                                        <List sx={{ padding: 0 }}>
                                            {toolGroup.items.map((tool) => (
                                                <ListItem key={tool.to} sx={{ marginBottom: 1 }}>
                                                    <Link href={tool.to} variant="body1" color="primary">
                                                        {tool.label}
                                                    </Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            ))
                        )}
                    </div>
                </Container>
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
                            <img src="toolbox.png" alt="About Us" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const OptimalPageReplacement = () => {
  // State variables
  const [pages, setPages] = useState([3, 1, 2, 1, 6, 5, 1, 3]);
  const [capacity, setCapacity] = useState(3);
  const [pageFaults, setPageFaults] = useState(null);
  const [hitPercentage, setHitPercentage] = useState(null);
  const [missPercentage, setMissPercentage] = useState(null);
  const [pageTable, setPageTable] = useState([]);
  const [pageFrameTable, setPageFrameTable] = useState([]);

  // Function to handle page faults calculation
  const handlePageFaults = () => {
    const { pageFaults, hitPercentage, missPercentage, pageTable, pageFrameTable } = calculatePageFaults();
    setPageFaults(pageFaults);
    setHitPercentage(hitPercentage);
    setMissPercentage(missPercentage);
    setPageTable(pageTable);
    setPageFrameTable(pageFrameTable);
  };

  // Function to calculate page faults, hit/miss percentages, page table, and page frame replacement table
  const calculatePageFaults = () => {
    let cache = [];
    let page_faults = 0;
    let hits = 0;
    let pageTable = [];
    let pageFrameTable = [];

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];

      if (cache.includes(page)) {
        // Page is already in the cache (hit)
        hits++;
        pageTable.push({ page, status: 'Hit' });
      } else {
        // Page is not in the cache (miss)
        page_faults++;
        pageTable.push({ page, status: 'Page Fault' });

        if (cache.length < capacity) {
          // If there is space in the cache, add the page
          cache.push(page);
        } else {
          // If cache is full, find the page with the farthest future reference
          const futureReferences = pages.slice(i + 1);
          const farthestIndex = cache.reduce((maxIndex, item, currentIndex) => {
            const nextIndex = futureReferences.indexOf(item);
            return nextIndex > maxIndex ? nextIndex : maxIndex;
          }, -1);

          // Replace the page at farthestIndex with the current page
          cache[cache.indexOf(pages[farthestIndex])] = page;
        }
      }

      pageFrameTable.push([...cache]);
    }

    // Calculate hit and miss percentages
    const missPercentage = ((page_faults / pages.length) * 100).toFixed(2);
    const hitPercentage = ((hits / pages.length) * 100).toFixed(2);

    // Return calculated values
    return { pageFaults: page_faults, hitPercentage: hitPercentage, missPercentage: missPercentage, pageTable: pageTable, pageFrameTable: pageFrameTable };
  };

  return (
    <>
      <Helmet>
        <title>Optimal Page Replacement Algorithm - ToolBoXpress</title>
        <meta
          name="description"
          content="Learn and implement the Optimal Page Replacement algorithm with ToolboXpress. Visualize the process of managing page faults, hit percentage, and miss percentage."
        />
        <meta
          name="keywords"
          content="Optimal algorithm, page replacement, cache management, ToolboXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="Optimal Page Replacement Algorithm - ToolBoXpress" />
        <meta
          property="og:description"
          content="Learn and implement the Optimal Page Replacement algorithm with ToolboXpress. Visualize the process of managing page faults, hit percentage, and miss percentage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Optimal Page Replacement Algorithm - ToolBoXpress"
        />
        <meta
          name="twitter:description"
          content="Learn and implement the Optimal Page Replacement algorithm with ToolboXpress. Visualize the process of managing page faults, hit percentage, and miss percentage."
        />

        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <Header />
      <main>
        <div className='container my-5'>
          <div className='my-4'>
            <h2 className="mb-4">Optimal Page Replacement Algorithm</h2>
            <p>
              The Optimal Page Replacement Algorithm is a page replacement policy that selects the page that will not be used for the longest period of time in the future.
              This simulation helps you understand how the algorithm manages page faults based on a given sequence of page requests and the capacity of the page table.
            </p>
          </div>

          <div className="mb-3">
            <label>
              Enter the page sequence (separated by commas):
              <input
                className="form-control"
                type="text"
                value={pages.join(', ')}
                onChange={(e) => setPages(e.target.value.split(',').map((page) => Number(page.trim())))}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              Enter the capacity:
              <input
                className="form-control"
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
              />
            </label>
          </div>
          <button className="btn btn-primary mb-3" onClick={handlePageFaults}>
            Toggle Page Faults
          </button>
          <div className="mb-3">
            <h2>Page Faults and Hit/Miss Ratios</h2>
            <p>{`Page Faults: ${pageFaults !== null ? pageFaults : 'Click the button to calculate page faults.'}`}</p>
            <p>{`Hit Percentage: ${hitPercentage !== null ? hitPercentage + '%' : ''}`}</p>
            <p>{`Miss Percentage: ${missPercentage !== null ? missPercentage + '%' : ''}`}</p>
          </div>
          <div className="mb-3">
            <h2>Page Table</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  {pageTable.map((entry, index) => (
                    <th key={index}>Step {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {pageTable.map((entry, index) => (
                    <td key={index}>{entry.status === 'Hit' ? '✔' : '✘'}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mb-3">
            <h2>Page Frame Replacement Table</h2>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Step</th>
                  {Array.from({ length: capacity }, (_, index) => (
                    <th key={index}>Frame {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pageFrameTable.map((frames, step) => (
                  <tr key={step}>
                    <td>Step {step + 1}</td>
                    {frames.map((frame, index) => (
                      <td key={index}>{frame !== undefined ? frame : '-'}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default OptimalPageReplacement;

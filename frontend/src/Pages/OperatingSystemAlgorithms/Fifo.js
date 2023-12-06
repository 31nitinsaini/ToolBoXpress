import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Helmet } from 'react-helmet';
import RatingComponent from '../../Components/RatingComponent';

const FifoPageReplacement = () => {
  const [pages, setPages] = useState([7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]);
  const [capacity, setCapacity] = useState(4);
  const [pageFaults, setPageFaults] = useState(null);
  const [hitPercentage, setHitPercentage] = useState(null);
  const [missPercentage, setMissPercentage] = useState(null);
  const [pageTable, setPageTable] = useState([]);
  const [pageFrameTable, setPageFrameTable] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handlePageFaults = () => {
    const { pageFaults, hitPercentage, missPercentage, pageTable, pageFrameTable } = calculatePageFaults();
    setPageFaults(pageFaults);
    setHitPercentage(hitPercentage);
    setMissPercentage(missPercentage);
    setPageTable(pageTable);
    setPageFrameTable(pageFrameTable);
    setShowTable(true);
  };

  useEffect(() => {
    if (showTable) {
      handlePageFaults();
    }
  }, [showTable]);

  const calculatePageFaults = () => {
    let queue = [];
    let page_faults = 0;
    let hits = 0;
    let pageTable = [];
    let pageFrameTable = [];
    let lastRemovedIndex = 0;

    for (let i = 0; i < pages.length; i++) {
      if (queue.length < capacity) {
        if (!queue.includes(pages[i])) {
          queue.push(pages[i]);
          page_faults++;
          pageTable.push({ page: pages[i], status: 'Page Fault' });
        } else {
          hits++;
          pageTable.push({ page: pages[i], status: 'Hit' });
        }
      } else {
        if (!queue.includes(pages[i])) {
          let removedPage = queue[lastRemovedIndex];
          queue[lastRemovedIndex] = pages[i];
          lastRemovedIndex = (lastRemovedIndex + 1) % capacity;
          page_faults++;
          pageTable.push({ page: pages[i], status: 'Page Fault' });
        } else {
          hits++;
          pageTable.push({ page: pages[i], status: 'Hit' });
        }
      }

      pageFrameTable.push([...queue]);
    }

    const missPercentage = ((page_faults / pages.length) * 100).toFixed(2);
    const hitPercentage = ((hits / pages.length) * 100).toFixed(2);
    return { pageFaults: page_faults, hitPercentage: hitPercentage, missPercentage: missPercentage, pageTable: pageTable, pageFrameTable: pageFrameTable };
  };

  return (
    <>
      <Helmet>
        <title>FIFO Page Replacement Algorithm - ToolboXpress</title>
        <meta
          name="description"
          content="Learn and implement the First-In-First-Out (FIFO) page replacement algorithm with ToolboXpress. Understand the steps and visualize the process of managing page faults and cache hits."
        />
        <meta
          name="keywords"
          content="FIFO algorithm, page replacement, cache management, ToolboXpress"
        />
        <meta name="author" content="Your Name" />

        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content="FIFO Page Replacement Algorithm - ToolboXpress" />
        <meta
          property="og:description"
          content="Learn and implement the First-In-First-Out (FIFO) page replacement algorithm with ToolboXpress. Understand the steps and visualize the process of managing page faults and cache hits."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter Card meta tags for Twitter sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FIFO Page Replacement Algorithm - ToolboXpress"
        />
        <meta
          name="twitter:description"
          content="Learn and implement the First-In-First-Out (FIFO) page replacement algorithm with ToolboXpress. Understand the steps and visualize the process of managing page faults and cache hits."
        />

        {/* Canonical URL to specify the preferred version of a page */}
        <link rel="canonical" href={window.location.href} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <Header />
      <main className="px-5">
        <div className='container my-5'>
          <center>
            <h1 className="mb-4">FIFO Page Replacement Algorithm</h1>
            <p>
              Welcome to the ToolboXpress FIFO Page Replacement Algorithm tool. This tool helps you understand and implement the First-In-First-Out (FIFO) algorithm, a fundamental technique in managing page faults and optimizing cache performance. Explore the steps, visualize the process, and enhance your knowledge of cache management.
            </p>
          </center>
          <section className="my-5">
            <h4>Steps to Calculate FIFO</h4>
            <ol>
              <li>Initialize an empty queue (cache) and set the capacity (maximum number of pages the queue can hold).</li>
              <li>For each page reference in the sequence:
                <ul>
                  <li>If the page is not in the queue, add it to the queue and count it as a page fault.</li>
                  <li>If the page is already in the queue, count it as a hit.</li>
                  <li>If the queue is full, replace the oldest page in the queue with the new page.</li>
                </ul>
              </li>
              <li>Calculate hit percentage, miss percentage, and other relevant metrics based on the results.</li>
            </ol>
          </section>

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
          <button className="btn btn-primary mb-3" onClick={() => setShowTable(true)}>
            Toggle Page Faults
          </button>

          {showTable && (
            <div className="mb-3">
              <h2>Page Faults and Hit/Miss Ratios</h2>
              <p>{`Page Faults: ${pageFaults !== null ? pageFaults : 'Click the button to calculate page faults.'}`}</p>
              <p>{`Hit Percentage: ${hitPercentage !== null ? hitPercentage + '%' : ''}`}</p>
              <p>{`Miss Percentage: ${missPercentage !== null ? missPercentage + '%' : ''}`}</p>
            </div>
          )}

          {showTable && (
            <div className="mb-3">
              <h2>Page Table</h2>
              <table className="table">
                <thead>
                  <tr>
                    {pageTable.map((entry, index) => (
                      <th key={index}>{entry.page}</th>
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
          )}

          {showTable && (
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    {pageFrameTable.map((frames, index) => (
                      <th key={index}>Step {index + 1}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: capacity }, (_, rowIndex) => (
                    <tr key={rowIndex}>
                      {pageFrameTable.map((frames, colIndex) => (
                        <td key={colIndex}>{frames[rowIndex] !== undefined ? frames[rowIndex] : '-'}</td>
                      ))}
                    </tr>
                  )).reverse()}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default FifoPageReplacement;

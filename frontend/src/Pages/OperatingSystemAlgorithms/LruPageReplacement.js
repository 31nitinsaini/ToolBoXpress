import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const LruPageReplacement = () => {
  const [pages, setPages] = useState([7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]);
  const [capacity, setCapacity] = useState(4);
  const [pageFaults, setPageFaults] = useState(null);
  const [hitPercentage, setHitPercentage] = useState(null);
  const [missPercentage, setMissPercentage] = useState(null);
  const [pageTable, setPageTable] = useState([]);
  const [pageFrameTable, setPageFrameTable] = useState([]);

  const handlePageFaults = () => {
    const { pageFaults, hitPercentage, missPercentage, pageTable, pageFrameTable } = calculatePageFaults();
    setPageFaults(pageFaults);
    setHitPercentage(hitPercentage);
    setMissPercentage(missPercentage);
    setPageTable(pageTable);
    setPageFrameTable(pageFrameTable);
  };

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
        // Move the page to the front (most recently used)
        cache = [page, ...cache.filter((p) => p !== page)];
      } else {
        // Page is not in the cache (miss)
        page_faults++;
        pageTable.push({ page, status: 'Page Fault' });

        if (cache.length === capacity) {
          // Remove the least recently used page (last element)
          cache.pop();
        }
        // Add the new page to the front
        cache = [page, ...cache];
      }

      pageFrameTable.push([...cache]);
    }

    const missPercentage = ((page_faults / pages.length) * 100).toFixed(2);
    const hitPercentage = ((hits / pages.length) * 100).toFixed(2);
    return { pageFaults: page_faults, hitPercentage: hitPercentage, missPercentage: missPercentage, pageTable: pageTable, pageFrameTable: pageFrameTable };
  };

  return (
    <>
      <Header />
      <main className="px-4">
        <h1 className="mb-4">LRU Page Replacement Algorithm</h1>
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
        <div className="mb-3">
          <h2>Page Frame Replacement Table</h2>
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
              )).reverse()} {/* Reverse the order to fix the upside-down table */}
            </tbody>
          </table>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default LruPageReplacement;

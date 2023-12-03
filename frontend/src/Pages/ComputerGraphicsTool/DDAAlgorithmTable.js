import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const DDAAlgorithmTable = () => {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [pointsTable, setPointsTable] = useState([]);

  const calculateDDALine = () => {
    try {
      const x1Value = parseFloat(x1);
      const y1Value = parseFloat(y1);
      const x2Value = parseFloat(x2);
      const y2Value = parseFloat(y2);

      if (isNaN(x1Value) || isNaN(y1Value) || isNaN(x2Value) || isNaN(y2Value)) {
        alert('Please enter valid numeric coordinates.');
        return;
      }

      const dx = x2Value - x1Value;
      const dy = y2Value - y1Value;

      const steps = Math.max(Math.abs(dx), Math.abs(dy));
      const xIncrement = dx / steps;
      const yIncrement = dy / steps;

      const newPointsTable = [];

      for (let i = 0; i <= steps; i++) {
        const newX = Math.round(x1Value + i * xIncrement);
        const newY = Math.round(y1Value + i * yIncrement);
        newPointsTable.push({ x: newX, y: newY });
      }

      setPointsTable(newPointsTable);
    } catch (error) {
      console.error('Error calculating DDA line:', error);
      alert('An error occurred. Please check your input and try again.');
    }
  };

  return (
   
    <>
    <Header/>
    <main>
    <div className="container mt-5">
      <h2 className="mb-4">DDA Line Algorithm Table</h2>
      <div className="mb-3">
        <label htmlFor="x1" className="form-label">X1:</label>
        <input
          type="text"
          id="x1"
          className="form-control"
          value={x1}
          onChange={(e) => setX1(e.target.value)}
          placeholder="Enter X1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="y1" className="form-label">Y1:</label>
        <input
          type="text"
          id="y1"
          className="form-control"
          value={y1}
          onChange={(e) => setY1(e.target.value)}
          placeholder="Enter Y1"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="x2" className="form-label">X2:</label>
        <input
          type="text"
          id="x2"
          className="form-control"
          value={x2}
          onChange={(e) => setX2(e.target.value)}
          placeholder="Enter X2"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="y2" className="form-label">Y2:</label>
        <input
          type="text"
          id="y2"
          className="form-control"
          value={y2}
          onChange={(e) => setY2(e.target.value)}
          placeholder="Enter Y2"
        />
      </div>
      <button className="btn btn-primary" onClick={calculateDDALine}>Calculate Points</button>

      {pointsTable.length > 0 && (
        <div className="mt-3">
          <h3>Points Table:</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Point</th>
                <th scope="col">X</th>
                <th scope="col">Y</th>
              </tr>
            </thead>
            <tbody>
              {pointsTable.map((point, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{point.x}</td>
                  <td>{point.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </main>
    <RatingComponent/>
    <Footer/>
    </>
  );
};

export default DDAAlgorithmTable;

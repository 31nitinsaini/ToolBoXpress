import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const BresenhamAlgorithmTable = () => {
  const [x1, setX1] = useState('');
  const [y1, setY1] = useState('');
  const [x2, setX2] = useState('');
  const [y2, setY2] = useState('');
  const [pointsTable, setPointsTable] = useState([]);

  const calculateBresenhamLine = () => {
    try {
      const x1Value = parseInt(x1);
      const y1Value = parseInt(y1);
      const x2Value = parseInt(x2);
      const y2Value = parseInt(y2);

      if (isNaN(x1Value) || isNaN(y1Value) || isNaN(x2Value) || isNaN(y2Value)) {
        alert('Please enter valid numeric coordinates.');
        return;
      }

      const points = [];
      let dx = Math.abs(x2Value - x1Value);
      let dy = Math.abs(y2Value - y1Value);
      let slope = dy / dx;
      let x = x1Value;
      let y = y1Value;

      let p;

      if (slope <= 1) {
        p = 2 * dy - dx;
        while (x <= x2Value) {
          points.push({ x, y, p });
          x++;
          if (p < 0) {
            p += 2 * dy;
          } else {
            p += 2 * dy - 2 * dx;
            y++;
          }
        }
      } else {
        p = 2 * dx - dy;
        while (y <= y2Value) {
          points.push({ x, y, p });
          y++;
          if (p < 0) {
            p += 2 * dx;
          } else {
            p += 2 * dx - 2 * dy;
            x++;
          }
        }
      }

      setPointsTable(points);
    } catch (error) {
      console.error('Error calculating Bresenham line:', error);
      alert('An error occurred. Please check your input and try again.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Bresenham Line Algorithm Table - Your SEO Title</title>
        <meta
          name="description"
          content="Enter the coordinates (x1, y1, x2, y2) to calculate the points using the Bresenham Line Algorithm."
        />
      </Helmet>
      <Header />
      <main>
        <div className="container my-5">
          <center>
            <Typography variant="h2" gutterBottom>
              Bresenham Line Algorithm Table
            </Typography>
            <Typography variant="body1" paragraph>
  Enter the coordinates (x1, y1, x2, y2) to calculate the points using the Bresenham Line Algorithm.
</Typography>


          </center>
          <Typography variant="h5" gutterBottom>
  Bresenham Line Algorithm Steps:
</Typography>

<div style={{ margin: '20px 0' }}>
  <ol>
    <li>Identify the coordinates of the starting point (x1, y1) and the ending point (x2, y2).</li>
    <li>Calculate the differences: dx = |x2 - x1| and dy = |y2 - y1|.</li>
    <li>Determine the slope of the line: slope = dy / dx.</li>
    <li>Initialize the decision parameter (p) based on the slope.</li>
    <li>Iterate over the points and update the decision parameter to plot the line.</li>
  </ol>
</div>

          <div className="mb-3">
            <label htmlFor="x1" className="form-label">
              X1:
            </label>
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
            <label htmlFor="y1" className="form-label">
              Y1:
            </label>
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
            <label htmlFor="x2" className="form-label">
              X2:
            </label>
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
            <label htmlFor="y2" className="form-label">
              Y2:
            </label>
            <input
              type="text"
              id="y2"
              className="form-control"
              value={y2}
              onChange={(e) => setY2(e.target.value)}
              placeholder="Enter Y2"
            />
          </div>
          <button className="btn btn-primary" onClick={calculateBresenhamLine}>
            Calculate Points
          </button>

          {pointsTable.length > 0 && (
    <div className="mt-3">
      <Typography variant="h3">Points Table:</Typography>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Point</th>
            <th scope="col">X</th>
            <th scope="col">Y</th>
            <th scope="col">X+1</th>
            <th scope="col">Y+1</th>
            <th scope="col">P</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map((point, index) => {
            const nextPoint = pointsTable[index + 1];
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{point.x}</td>
                <td>{point.y}</td>
                <td>{nextPoint ? nextPoint.x : '-'}</td>
                <td>{nextPoint ? nextPoint.y : '-'}</td>
                <td>{point.p}</td>
              </tr>
            );
          })}
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

export default BresenhamAlgorithmTable;

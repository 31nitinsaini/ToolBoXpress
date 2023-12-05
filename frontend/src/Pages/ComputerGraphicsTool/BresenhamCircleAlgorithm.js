import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Typography } from '@mui/material';
import RatingComponent from '../../Components/RatingComponent';

const BresenhamCircleTool = () => {
  const [cx, setCx] = useState(10);
  const [cy, setCy] = useState(10);
  const [radius, setRadius] = useState(8);
  const [circleTable, setCircleTable] = useState([]);

  const drawCircle = () => {
    let table = [];

    let x = 0;
    let y = radius;
    let d = 3 - 2 * radius;

    while (x <= y) {
      let row = [x, y, cx + x, cy + y, cx - x, cy + y, cx + x, cy - y, cx - x, cy - y, cx + y, cy + x, cx - y, cy + x, cx + y, cy - x, cx - y, cy - x];

      table.push({ x, y, xc_x: cx - x, yc_y: cy - y });

      if (d < 0) {
        d = d + 4 * x + 6;
      } else {
        d = d + 4 * (x - y) + 10;
        y--;
      }

      x++;

      // Continue drawing until xc - x is equal to yc - y
      if (cx - x === cy - y) {
        break;
      }
    }

    setCircleTable(table);
  };

  return (
    <>
      <Helmet>
        <title>Bresenham's Circle Drawing Algorithm - Your SEO Title</title>
        <meta
          name="description"
          content="Enter the center coordinates (cx, cy) and radius to draw a circle using Bresenham's Circle Drawing Algorithm. Learn step-by-step how the algorithm works."
        />
      </Helmet>
      <Header />
      <main>
        <div className="container my-5">
          <center>
          <Typography variant="h2" className="mb-4">
            Bresenham's Circle Drawing Algorithm
          </Typography>
          <Typography variant="body1" paragraph>
            Enter the center coordinates (cx, cy) and radius to draw a circle using Bresenham's Circle Drawing Algorithm. Learn step-by-step how the algorithm works.
          </Typography>
          </center>

          <div style={{ margin: '20px 0' }}>
            <ol>
              <li>Identify the center coordinates (cx, cy) and the radius of the circle.</li>
              <li>Initialize variables: x = 0, y = radius, and decision parameter (d = 3 - 2 * radius).</li>
              <li>Iterate over the points and update the decision parameter to draw the circle.</li>
            </ol>
          </div>

          <div className="form-row mb-3">
            <div className="col-md-4">
              <label>Center X:</label>
              <input type="number" className="form-control" value={cx} onChange={(e) => setCx(parseInt(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Center Y:</label>
              <input type="number" className="form-control" value={cy} onChange={(e) => setCy(parseInt(e.target.value))} />
            </div>
            <div className="col-md-4">
              <label>Radius:</label>
              <input type="number" className="form-control" value={radius} onChange={(e) => setRadius(parseInt(e.target.value))} />
            </div>
          </div>
          <button className="btn btn-primary mb-3" onClick={drawCircle}>
            Draw Circle
          </button>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>x</th>
                  <th>y</th>
                  <th>xc - x</th>
                  <th>yc - y</th>
                </tr>
              </thead>
              <tbody>
                {circleTable.map((row, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{row.x}</td>
                    <td>{row.y}</td>
                    <td>{row.xc_x}</td>
                    <td>{row.yc_y}</td>
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

export default BresenhamCircleTool;

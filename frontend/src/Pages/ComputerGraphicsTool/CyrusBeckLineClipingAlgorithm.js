import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';
import { Helmet } from 'react-helmet';
import Typography from '@mui/material/Typography';

const CyrusBeckClippingTool = () => {
  const canvasRef = useRef(null);

  const [x1, setX1] = useState(50);
  const [y1, setY1] = useState(50);
  const [x2, setX2] = useState(150);
  const [y2, setY2] = useState(150);

  const [clipXmin, setClipXmin] = useState(50);
  const [clipYmin, setClipYmin] = useState(50);
  const [clipXmax, setClipXmax] = useState(200);
  const [clipYmax, setClipYmax] = useState(200);

  const canvasWidth = 400;
  const canvasHeight = 400;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the clipping window
    context.strokeRect(clipXmin, clipYmin, clipXmax - clipXmin, clipYmax - clipYmin);

    // Draw the original line
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }, [x1, y1, x2, y2, clipXmin, clipYmin, clipXmax, clipYmax]);

  const clipLineCyrusBeck = (context, x1, y1, x2, y2, clipXmin, clipYmin, clipXmax, clipYmax) => {
    const dx = x2 - x1;
    const dy = y2 - y1;

    const p1 = [-dx, -dy];
    const p2 = [dx, dy];

    const normals = [
      [0, -1],  // top
      [1, 0],   // right
      [0, 1],   // bottom
      [-1, 0],  // left
    ];

    let tEnter = 0;
    let tExit = 1;

    for (let i = 0; i < normals.length; i++) {
      const N = normals[i];
      const D = [x1 - clipXmin, clipYmin - y1];
      const num = N[0] * D[0] + N[1] * D[1];
      const den = N[0] * (p1[0] - p2[0]) + N[1] * (p1[1] - p2[1]);

      if (den === 0) {
        if (num < 0) {
          return;
        }
      } else {
        const t = -num / den;
        if (den > 0) {
          tEnter = Math.max(tEnter, t);
        } else {
          tExit = Math.min(tExit, t);
        }
      }
    }

    if (tEnter <= tExit) {
      const new_x1 = x1 + tEnter * p1[0];
      const new_y1 = y1 + tEnter * p1[1];
      const new_x2 = x1 + tExit * p1[0];
      const new_y2 = y1 + tExit * p1[1];

      // Draw the clipped line
      context.beginPath();
      context.moveTo(new_x1, new_y1);
      context.lineTo(new_x2, new_y2);
      context.strokeStyle = 'green';
      context.stroke();

      // Alert the new coordinates
      alert(`New Coordinates: (${new_x1}, ${new_y1}) to (${new_x2}, ${new_y2})`);
    }
  };

  const handleClipLine = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the clipping window
    context.strokeRect(clipXmin, clipYmin, clipXmax - clipXmin, clipYmax - clipYmin);

    // Draw the original line
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = 'black'; // Reset stroke style
    context.stroke();

    // Draw the clipped line using Cyrus-Beck algorithm
    clipLineCyrusBeck(context, x1, y1, x2, y2, clipXmin, clipYmin, clipXmax, clipYmax);
  };

  return (
    <>
      <Helmet>
        <title>Cyrus-Beck Clipping - ToolboXpress</title>
        <meta
          name="description"
          content="Use the Cyrus-Beck line clipping algorithm to clip a line segment against a rectangular clipping window. Enter line coordinates and clip window dimensions."
        />
      </Helmet>
      <Header />
      <main>
        <div className="container my-5">
          <center>
          <Typography variant="h2" className="mb-4">
            Cyrus-Beck Clipping
          </Typography>
          <Typography variant="body1" paragraph>
            Use the Cyrus-Beck line clipping algorithm to clip a line segment against a rectangular clipping window.
            Enter the coordinates of the line and dimensions of the clipping window below.
          </Typography>
          </center>

          <div className="row mt-4">
            <div className="col">
              <Typography variant="h4" gutterBottom>
                Steps for Cyrus-Beck Clipping Algorithm:
              </Typography>
              <ol>
                <li>Identify the coordinates of the line segment's endpoints (x1, y1) and (x2, y2).</li>
                <li>Define the rectangular clipping window by specifying its boundaries (Xmin, Ymin, Xmax, Ymax).</li>
                <li>Calculate the direction vector (dx, dy) of the line segment.</li>
                <li>Calculate the normal vectors of the clipping window.</li>
                <li>Compute the intersection points of the line with the window using the Cyrus-Beck algorithm.</li>
                <li>Draw the clipped line segment based on the computed intersection points.</li>
              </ol>
            </div>
          </div>


          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Line Coordinates:</label>
                <div className="row">
                  <div className="col">
                    <label>X1:</label>
                    <input type="number" className="form-control" value={x1} onChange={(e) => setX1(parseInt(e.target.value))} />
                  </div>
                  <div className="col">
                    <label>Y1:</label>
                    <input type="number" className="form-control" value={y1} onChange={(e) => setY1(parseInt(e.target.value))} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label>X2:</label>
                    <input type="number" className="form-control" value={x2} onChange={(e) => setX2(parseInt(e.target.value))} />
                  </div>
                  <div className="col">
                    <label>Y2:</label>
                    <input type="number" className="form-control" value={y2} onChange={(e) => setY2(parseInt(e.target.value))} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Clip Window:</label>
                <div className="row">
                  <div className="col">
                    <label>Xmin:</label>
                    <input type="number" className="form-control" value={clipXmin} onChange={(e) => setClipXmin(parseInt(e.target.value))} />
                  </div>
                  <div className="col">
                    <label>Ymin:</label>
                    <input type="number" className="form-control" value={clipYmin} onChange={(e) => setClipYmin(parseInt(e.target.value))} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label>Xmax:</label>
                    <input type="number" className="form-control" value={clipXmax} onChange={(e) => setClipXmax(parseInt(e.target.value))} />
                  </div>
                  <div className="col">
                    <label>Ymax:</label>
                    <input type="number" className="form-control" value={clipYmax} onChange={(e) => setClipYmax(parseInt(e.target.value))} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <button className="btn btn-primary" onClick={handleClipLine}>
                <span>Clip Line</span>
              </button>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border"></canvas>
            </div>
          </div>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default CyrusBeckClippingTool;

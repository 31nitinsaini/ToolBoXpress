import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const CyrusBeckLineClipingAlgorithm = () => {
  const canvasRef = useRef(null);
  const [line, setLine] = useState({ x1: 50, y1: 100, x2: 200, y2: 300 });
  const [clipWindow, setClipWindow] = useState({ xMin: 100, yMin: 150, xMax: 300, yMax: 250 });

  const updateLine = (key, value) => {
    setLine((prevLine) => ({ ...prevLine, [key]: value }));
  };

  const updateClipWindow = (key, value) => {
    setClipWindow((prevWindow) => ({ ...prevWindow, [key]: value }));
  };

  const cyrusBeckLineClip = () => {
    // Implement the Cyrus-Beck algorithm logic here
    // Modify the line coordinates based on the clipping window
    // This is a simplified example; you may need to adjust it based on your specific requirements
    const dx = line.x2 - line.x1;
    const dy = line.y2 - line.y1;

    const p1 = -dx;
    const p2 = dx;
    const p3 = -dy;
    const p4 = dy;

    const q1 = line.x1 - clipWindow.xMin;
    const q2 = clipWindow.xMax - line.x1;
    const q3 = line.y1 - clipWindow.yMin;
    const q4 = clipWindow.yMax - line.y1;

    const t1 = q1 / p1;
    const t2 = q2 / p2;
    const t3 = q3 / p3;
    const t4 = q4 / p4;

    const tIn = Math.max(0, Math.max(t1, t3));
    const tOut = Math.min(1, Math.min(t2, t4));

    if (tIn <= tOut) {
      const clippedX1 = line.x1 + tIn * dx;
      const clippedY1 = line.y1 + tIn * dy;
      const clippedX2 = line.x1 + tOut * dx;
      const clippedY2 = line.y1 + tOut * dy;

      // Update the line coordinates based on the clipping
      setLine({ x1: clippedX1, y1: clippedY1, x2: clippedX2, y2: clippedY2 });

      if (tIn === 0 && tOut === 1) {
        alert('The entire line is within the clipping window.');
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the clipping window
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.strokeRect(clipWindow.xMin, clipWindow.yMin, clipWindow.xMax - clipWindow.xMin, clipWindow.yMax - clipWindow.yMin);

    // Draw the original line
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();

    // Draw the clipped line
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x2, line.y2);
    ctx.stroke();
  }, [line, clipWindow]);

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
            <h2>Cyrus-Beck Line Clipping</h2>
            <p>
              Use the Cyrus-Beck algorithm to efficiently clip lines against a rectangular clipping window. Enter the coordinates of the line and dimensions of the clipping window below.
            </p>
          </center>
          <div className="col">
              <h3>Steps for Cyrus-Beck Line Clipping Algorithm Steps</h3>
              <ol>
                <li>Identify the coordinates of the line segment's endpoints: (x1, y1) and (x2, y2).</li>
                <li>Define the rectangular clipping window by specifying its boundaries: (XMin, YMin, XMax, YMax).</li>
                <li>Calculate the direction vector of the line: dx = x2 - x1, dy = y2 - y1.</li>
                <li>Calculate the parameters p1, p2, p3, p4, q1, q2, q3, and q4 as per the Cyrus-Beck algorithm.</li>
                <li>Calculate the values of t1, t2, t3, and t4.</li>
                <li>Determine the intersection points using the calculated t values.</li>
                <li>If tIn is less than or equal to tOut, update the line coordinates based on the intersection points.</li>
              </ol>
            </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="form-group">
                <label>Line Coordinates:</label>
                <div className="row">
                  <div className="col">
                    <label>X1:</label>
                    <input type="number" className="form-control" value={line.x1} onChange={(e) => updateLine('x1', parseInt(e.target.value, 10))} />
                  </div>
                  <div className="col">
                    <label>Y1:</label>
                    <input type="number" className="form-control" value={line.y1} onChange={(e) => updateLine('y1', parseInt(e.target.value, 10))} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label>X2:</label>
                    <input type="number" className="form-control" value={line.x2} onChange={(e) => updateLine('x2', parseInt(e.target.value, 10))} />
                  </div>
                  <div className="col">
                    <label>Y2:</label>
                    <input type="number" className="form-control" value={line.y2} onChange={(e) => updateLine('y2', parseInt(e.target.value, 10))} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Clip Window:</label>
                <div className="row">
                  <div className="col">
                    <label>XMin:</label>
                    <input type="number" className="form-control" value={clipWindow.xMin} onChange={(e) => updateClipWindow('xMin', parseInt(e.target.value, 10))} />
                  </div>
                  <div className="col">
                    <label>YMin:</label>
                    <input type="number" className="form-control" value={clipWindow.yMin} onChange={(e) => updateClipWindow('yMin', parseInt(e.target.value, 10))} />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col">
                    <label>XMax:</label>
                    <input type="number" className="form-control" value={clipWindow.xMax} onChange={(e) => updateClipWindow('xMax', parseInt(e.target.value, 10))} />
                  </div>
                  <div className="col">
                    <label>YMax:</label>
                    <input type="number" className="form-control" value={clipWindow.yMax} onChange={(e) => updateClipWindow('yMax', parseInt(e.target.value, 10))} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6">
              <canvas ref={canvasRef} width={400} height={400} style={{ border: '1px solid black' }} />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col">
              <button className="btn btn-primary" onClick={cyrusBeckLineClip}>
                Clip Line
              </button>
            </div>
          </div>
        </div>
      </main>
      <RatingComponent />
      <Footer />
    </>
  );
};

export default CyrusBeckLineClipingAlgorithm;

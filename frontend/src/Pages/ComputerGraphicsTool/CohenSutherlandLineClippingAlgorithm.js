import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const CohenSutherlandClipping = () => {
  const canvasRef = useRef(null);

  const [x1, setX1] = useState(50);
  const [y1, setY1] = useState(50);
  const [x2, setX2] = useState(150);
  const [y2, setY2] = useState(150);

  const [clipXmin, setClipXmin] = useState(50);
  const [clipYmin, setClipYmin] = useState(50);
  const [clipXmax, setClipXmax] = useState(200);
  const [clipYmax, setClipYmax] = useState(200);

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

    // Draw the clipped line
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = 'red';
    context.stroke();
  }, [x1, y1, x2, y2, clipXmin, clipYmin, clipXmax, clipYmax]);

  const clipLine = () => {
    let new_x1 = x1;
    let new_y1 = y1;
    let new_x2 = x2;
    let new_y2 = y2;

    // Cohen-Sutherland line clipping algorithm
    let code1 = calculateRegionCode(x1, y1);
    let code2 = calculateRegionCode(x2, y2);

    if ((code1 === 0) && (code2 === 0)) {
      alert("Line is completely inside the window!");
      return;
    }

    if ((code1 & code2) !== 0) {
      alert("Line is completely outside the window!");
      return;
    }

    let accept = false;

    while (true) {
      if ((code1 === 0) && (code2 === 0)) {
        accept = true;
        break;
      } else if ((code1 & code2) !== 0) {
        break;
      } else {
        let codeOutside = (code1 !== 0) ? code1 : code2;
        let x, y;

        if (codeOutside & 1) {
          x = clipXmin;
          y = y1 + ((y2 - y1) / (x2 - x1)) * (clipXmin - x1);
        } else if (codeOutside & 2) {
          x = clipXmax;
          y = y1 + ((y2 - y1) / (x2 - x1)) * (clipXmax - x1);
        } else if (codeOutside & 4) {
          y = clipYmin;
          x = x1 + ((x2 - x1) / (y2 - y1)) * (clipYmin - y1);
        } else if (codeOutside & 8) {
          y = clipYmax;
          x = x1 + ((x2 - x1) / (y2 - y1)) * (clipYmax - y1);
        }

        if (codeOutside === code1) {
          new_x1 = x;
          new_y1 = y;
          code1 = calculateRegionCode(new_x1, new_y1);
        } else {
          new_x2 = x;
          new_y2 = y;
          code2 = calculateRegionCode(new_x2, new_y2);
        }
      }
    }

    if (accept) {
      setX1(new_x1);
      setY1(new_y1);
      setX2(new_x2);
      setY2(new_y2);
    } else {
      alert("Line is completely outside the window!");
    }
  };

  const calculateRegionCode = (x, y) => {
    let code = 0;

    if (x < clipXmin) code |= 1;
    if (x > clipXmax) code |= 2;
    if (y < clipYmin) code |= 4;
    if (y > clipYmax) code |= 8;

    return code;
  };

  return (
  <>
  <Header/>
  <main>
  <div className="container mt-5">
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
          <canvas ref={canvasRef} width={300} height={300} style={{ border: '1px solid black' }} />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <button className="btn btn-primary" onClick={clipLine}>
            Clip Line
          </button>
        </div>
      </div>
    </div>
  </main>
  <RatingComponent/>
  <Footer/>
  </>
  );
};

export default CohenSutherlandClipping;

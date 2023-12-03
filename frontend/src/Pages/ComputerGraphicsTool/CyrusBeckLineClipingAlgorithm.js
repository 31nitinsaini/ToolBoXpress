import React, { useState, useEffect, useRef } from 'react';


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
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <label>Line Coordinates:</label>
          <div className="form-group">
            <label>X1:</label>
            <input type="number" className="form-control" value={x1} onChange={(e) => setX1(parseInt(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Y1:</label>
            <input type="number" className="form-control" value={y1} onChange={(e) => setY1(parseInt(e.target.value))} />
          </div>
          <div className="form-group">
            <label>X2:</label>
            <input type="number" className="form-control" value={x2} onChange={(e) => setX2(parseInt(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Y2:</label>
            <input type="number" className="form-control" value={y2} onChange={(e) => setY2(parseInt(e.target.value))} />
          </div>
        </div>
        <div className="col">
          <label>Clip Window:</label>
          <div className="form-group">
            <label>Xmin:</label>
            <input type="number" className="form-control" value={clipXmin} onChange={(e) => setClipXmin(parseInt(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Ymin:</label>
            <input type="number" className="form-control" value={clipYmin} onChange={(e) => setClipYmin(parseInt(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Xmax:</label>
            <input type="number" className="form-control" value={clipXmax} onChange={(e) => setClipXmax(parseInt(e.target.value))} />
          </div>
          <div className="form-group">
            <label>Ymax:</label>
            <input type="number" className="form-control" value={clipYmax} onChange={(e) => setClipYmax(parseInt(e.target.value))} />
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleClipLine}>
        <span>Clip Line</span>
      </button>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} className="border mt-3"></canvas>
    </div>
  );
};

export default CyrusBeckClippingTool;

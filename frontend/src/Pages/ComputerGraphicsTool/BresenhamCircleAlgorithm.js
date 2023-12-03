import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
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
    }

    setCircleTable(table);
  };

  return (
   <>
   <Header/>
   <main>
   <div className="container mt-4">
      <h2 className="mb-4">Bresenham's Circle Drawing Algorithm</h2>
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
   <RatingComponent/>
   <Footer/>
   </>
  );
};

export default BresenhamCircleTool;

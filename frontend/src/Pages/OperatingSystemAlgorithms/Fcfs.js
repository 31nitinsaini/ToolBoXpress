import React, { useState } from 'react';

const FCFSAlgorithmCalculator = () => {
  const [arrivalTimes, setArrivalTimes] = useState('');
  const [burstTimes, setBurstTimes] = useState('');
  const [ganttChart, setGanttChart] = useState([]);
  const [averageTurnaroundTime, setAverageTurnaroundTime] = useState('');
  const [averageWaitingTime, setAverageWaitingTime] = useState('');
  const [processTable, setProcessTable] = useState([]);

  const fcfs = (arrivalTimeList, burstTimeList) => {
    const processes = arrivalTimeList.map((_, index) => ({ job: (index + 10).toString(36).toUpperCase(), at: arrivalTimeList[index], bt: burstTimeList[index] }));

    const processTableData = [];
        const ganttChartData = [];

    let currentTime = 1;

    for (const process of processes) {
      const index = processes.indexOf(process);
      const burstTime = process.bt;
      ganttChartData.push({
        process:process.job,
        startTime: currentTime,
        endTime: currentTime + burstTime,
      });
      setGanttChart(ganttChartData);

      const completionTime = currentTime + burstTime;
      const turnaroundTime = completionTime - process.at;
      const waitingTime = turnaroundTime - process.bt;

      processTableData.push({
        process: process.job,
        arrivalTime: process.at,
        burstTime: process.bt,
        completionTime,
        turnaroundTime,
        waitingTime,
      });

      currentTime = completionTime;
    }

    const turnaroundTimes = processTableData.map((row) => row.turnaroundTime);
    const waitingTimes = processTableData.map((row) => row.waitingTime);

    const totalTurnaroundTime = turnaroundTimes.reduce((sum, time) => sum + time, 0);
    const totalWaitingTime = waitingTimes.reduce((sum, time) => sum + time, 0);

    setAverageTurnaroundTime((totalTurnaroundTime / processes.length).toFixed(2));
    setAverageWaitingTime((totalWaitingTime / processes.length).toFixed(2));
    setProcessTable(processTableData);
  };

  const handleCalculate = () => {
    const arrivalTimeList = arrivalTimes.split(',').map(Number);
    const burstTimeList = burstTimes.split(',').map(Number);

    fcfs(arrivalTimeList, burstTimeList);
  };

  return (
    <div className="container mt-4">
      <h1>First-Come-First-Serve (FCFS) Scheduling Algorithm Calculator</h1>
      <div className="row">
        <div className="col">
          <label>
            Arrival Times (comma-separated):
            <input
              type="text"
              className="form-control"
              value={arrivalTimes}
              onChange={(e) => setArrivalTimes(e.target.value)}
            />
          </label>
        </div>
        <div className="col">
          <label>
            Burst Times (comma-separated):
            <input
              type="text"
              className="form-control"
              value={burstTimes}
              onChange={(e) => setBurstTimes(e.target.value)}
            />
          </label>
        </div>
      </div>
      <button className="btn btn-primary mt-2" onClick={handleCalculate}>
        Calculate
      </button>

      <div className="mt-4">
        <h2>Gantt Chart</h2>
        <div className="d-flex">
          {ganttChart.map((entry, index) => (
            <div key={index} className="flex-grow-1 border text-center p-2">
              {entry.process}
              <br />
              {entry.startTime} - {entry.endTime}
            </div>
          ))}
        </div>
      </div>

      <h3>Average Turnaround Time: {averageTurnaroundTime}</h3>
      <h3>Average Waiting Time: {averageWaitingTime}</h3>

      <div className="mt-4">
        <h2>Process Table</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Process</th>
              <th>Arrival Time</th>
              <th>Burst Time</th>
              <th>Completion Time</th>
              <th>Turnaround Time</th>
              <th>Waiting Time</th>
            </tr>
          </thead>
          <tbody>
            {processTable.map((row, index) => (
              <tr key={index}>
                <td>{row.process}</td>
                <td>{row.arrivalTime}</td>
                <td>{row.burstTime}</td>
                <td>{row.completionTime}</td>
                <td>{row.turnaroundTime}</td>
                <td>{row.waitingTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default FCFSAlgorithmCalculator;
import React, { useState } from 'react';
import Header from '../../Components/Header';
import RatingComponent from '../../Components/RatingComponent';
import Footer from '../../Components/Footer';

const RoundRobinAlgorithmCalculator = () => {
  const [arrivalTimes, setArrivalTimes] = useState('');
  const [burstTimes, setBurstTimes] = useState('');
  const [timeQuantum, setTimeQuantum] = useState('');
  const [ganttChart, setGanttChart] = useState([]);
  const [averageTurnaroundTime, setAverageTurnaroundTime] = useState('');
  const [averageWaitingTime, setAverageWaitingTime] = useState('');
  const [processTable, setProcessTable] = useState([]);

  const handleCalculate = () => {
    const arrivalTimeList = arrivalTimes.split(',').map(Number);
    const burstTimeList = burstTimes.split(',').map(Number);
    const quantum = parseInt(timeQuantum, 10);

    const processes = Array.from({ length: arrivalTimeList.length }, (_, i) => String.fromCharCode(65 + i));

    let remainingBurstTimes = [...burstTimeList];
    let currentTime = 1;
    const ganttChartData = [];
    const processTableData = [];

    while (remainingBurstTimes.some((time) => time > 0)) {
      for (let i = 0; i < processes.length; i++) {
        const process = processes[i];
        const burstTime = remainingBurstTimes[i];

        if (burstTime > 0) {
          const executionTime = Math.min(quantum, burstTime);
          remainingBurstTimes[i] -= executionTime;

          ganttChartData.push({
            process,
            startTime: currentTime,
            endTime: currentTime + executionTime,
          });

          currentTime += executionTime;

          const completionTime = ganttChartData[ganttChartData.length - 1].endTime;
          const turnaroundTime = completionTime - arrivalTimeList[i];
          const waitingTime = turnaroundTime - burstTimeList[i];

          const existingRow = processTableData.find((row) => row.arrivalTime === arrivalTimeList[i]);
          if (existingRow) {
            existingRow.completionTime = completionTime;
            existingRow.turnaroundTime = turnaroundTime;
            existingRow.waitingTime = waitingTime;
          } else {
            processTableData.push({
              processes: [process],
              arrivalTime: arrivalTimeList[i],
              burstTime: burstTimeList[i],
              completionTime,
              turnaroundTime,
              waitingTime,
            });
          }
        }
      }
    }

    const completionTimes = ganttChartData.reduce((acc, entry) => {
      acc[entry.process] = entry.endTime;
      return acc;
    }, {});

    const turnaroundTimes = processes.map((process) => completionTimes[process]);
    const waitingTimes = processes.map((process, index) => turnaroundTimes[index] - burstTimeList[index]);

    const totalTurnaroundTime = turnaroundTimes.reduce((sum, time) => sum + time, 0);
    const totalWaitingTime = waitingTimes.reduce((sum, time) => sum + time, 0);

    setGanttChart(ganttChartData);
    setAverageTurnaroundTime((totalTurnaroundTime / processes.length).toFixed(2));
    setAverageWaitingTime((totalWaitingTime / processes.length).toFixed(2));
    setProcessTable(processTableData);
  };

  return (
    
    <>
    <Header/>
    <main>
    <div className="container mt-4">
      <h1>Round Robin Scheduling Algorithm Calculator</h1>
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
        <div className="col">
          <label>
            Time Quantum:
            <input
              type="number"
              className="form-control"
              value={timeQuantum}
              onChange={(e) => setTimeQuantum(e.target.value)}
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
              <th>Processes</th>
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
                <td>{row.processes.join(', ')}</td>
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
    </main>
    <RatingComponent/>
    <Footer/>
    </>
  );
};



export default RoundRobinAlgorithmCalculator;

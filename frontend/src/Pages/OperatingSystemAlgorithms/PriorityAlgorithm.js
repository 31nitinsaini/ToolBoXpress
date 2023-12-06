import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import RatingComponent from '../../Components/RatingComponent';

const PriorityAlgorithmCalculator = () => {
  // State variables
  const [arrivalTimes, setArrivalTimes] = useState('');
  const [burstTimes, setBurstTimes] = useState('');
  const [priorities, setPriorities] = useState('');

  const [ganttChart, setGanttChart] = useState([]);
  const [averageTurnaroundTime, setAverageTurnaroundTime] = useState(0);
  const [averageWaitingTime, setAverageWaitingTime] = useState(0);
  const [processTable, setProcessTable] = useState([]);

  // Function to handle calculation button click
  const handleCalculate = () => {
    try {
      // Parse and validate user inputs
      const parsedProcesses = parseProcesses(arrivalTimes, burstTimes, priorities);

      // Execute the scheduling algorithm
      const results = scheduleNonPreemptive(parsedProcesses);

      // Update state variables with results
      setGanttChart(results.ganttChart);
      setAverageTurnaroundTime(results.averageTurnaroundTime);
      setAverageWaitingTime(results.averageWaitingTime);
      setProcessTable(results.processTable);
    } catch (error) {
      alert(error.message); // Handle errors gracefully
    }
  };

  // Function to parse and validate user inputs
  const parseProcesses = (arrivalTimes, burstTimes, priorities) => {
    // Convert inputs to numbers and check for matching lengths
    const arrivalList = arrivalTimes.split(',').map(Number);
    const burstList = burstTimes.split(',').map(Number);
    const priorityList = priorities.split(',').map(Number);

    if (arrivalList.length !== burstList.length || arrivalList.length !== priorityList.length) {
      throw new Error('Input lists must have the same length.');
    }

    // Create process objects with additional calculated values
    return arrivalList.map((arrivalTime, index) => ({
      process: String.fromCharCode(65 + index),
      arrivalTime,
      burstTime: burstList[index],
      priority: priorityList[index],
      completionTime: 0,
      turnaroundTime: 0,
      waitingTime: 0,
    }));
  };

  // Function to schedule processes based on arrival time and then priority
  const scheduleNonPreemptive = (processes) => {
    // Sort processes by arrival time and then by priority (ascending)
    processes.sort((a, b) => {
      if (a.arrivalTime !== b.arrivalTime) {
        return a.arrivalTime - b.arrivalTime;
      }
      return a.priority - b.priority;
    });

    let currentTime = 0;

    const ganttChartData = [];
    const processTableData = [];

    // Simulate execution for each process
    for (const process of processes) {
      const completionTime = currentTime + process.burstTime;

      // Update process metrics based on completion time
      process.completionTime = completionTime;
      process.turnaroundTime = completionTime - process.arrivalTime;
      process.waitingTime = process.turnaroundTime - process.burstTime;

      // Add entry to Gantt chart
      ganttChartData.push({
        process: process.process,
        startTime: currentTime,
        endTime: completionTime,
      });

      // Add entry to process table
      processTableData.push({
        process: process.process,
        arrivalTime: process.arrivalTime,
        burstTime: process.burstTime,
        completionTime,
        turnaroundTime: process.turnaroundTime,
        waitingTime: process.waitingTime,
      });

      // Update current time
      currentTime = completionTime;
    }

    // Calculate and return average turnaround and waiting times
    const totalTurnaroundTime = processes.reduce((sum, process) => sum + process.turnaroundTime, 0);
    const totalWaitingTime = processes.reduce((sum, process) => sum + process.waitingTime, 0);

    return {
      ganttChart: ganttChartData,
      averageTurnaroundTime: totalTurnaroundTime / processes.length,
      averageWaitingTime: totalWaitingTime / processes.length,
      processTable: processTableData,
    };
  };

  return (
    <>
      <Helmet>
        <title>Priority Scheduling Algorithm Calculator</title>
        <meta
          name="description"
          content="Calculate average turnaround time, waiting time, and generate Gantt chart for Priority Scheduling Algorithm. Enter arrival times, burst times, and priorities."
        />
        <meta
          name="keywords"
          content="Priority Scheduling, CPU Scheduling, Process Scheduling, Gantt Chart, Algorithm Calculator"
        />
        <meta name="author" content="Your Name" />

        {/* Add more SEO-related meta tags as needed */}
      </Helmet>

      <Header />
     <main>
     <div className="container my-4">
        <h1>Priority Scheduling Algorithm Calculator</h1>
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
              Priorities (comma-separated):
              <input
                type="text"
                className="form-control"
                value={priorities}
                onChange={(e) => setPriorities(e.target.value)}
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

        <h3>Average Turnaround Time: {averageTurnaroundTime.toFixed(2)}</h3>
        <h3>Average Waiting Time: {averageWaitingTime.toFixed(2)}</h3>

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
     </main>
      <RatingComponent/>  
      <Footer />
    </>
  );
};

export default PriorityAlgorithmCalculator;

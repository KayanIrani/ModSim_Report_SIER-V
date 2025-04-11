
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Papa from 'papaparse';

// Chart.js component registration
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function ChartPanel({ file }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/Data/${file}`)
      .then(res => {
        if (!res.ok) throw new Error('File not found');
        return res.text();
      })
      .then(text => {
        const parsed = Papa.parse(text, { header: true, dynamicTyping: true });
        setData(parsed.data);
      })
      .catch(err => {
        console.error(err);
        setData([]); // Render fallback message
      });
  }, [file]);

  if (data === null) return <p>Loading...</p>;
  if (data.length === 0) return <p>Data not available for this scenario.</p>;

  const labels = data.map(row => row.Day);
  const infected = data.map(row => row.Infected);
  const vaccinated = data.map(row => row.Vaccinated);
  const willingness = data.map(row => row.Willingness);

  return (
    <div>
      <h3>Scenario: {file.replace('.csv', '')}</h3>
      <Line
        key={file} // Helps avoid canvas reuse error
        data={{
          labels,
          datasets: [
            { label: "Infected", data: infected, borderColor: 'red', fill: false },
            { label: "Vaccinated", data: vaccinated, borderColor: 'green', fill: false },
            { label: "Willingness", data: willingness, borderColor: 'blue', borderDash: [5, 5], fill: false },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Vaccine Hesitancy Simulation Results',
            },
          },
        }}
      />
    </div>
  );
}

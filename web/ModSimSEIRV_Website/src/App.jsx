import React, { useState } from 'react';
import SliderPanel from './SliderPanel';
import ChartPanel from './ChartPanel';
import { getScenarioFile } from './utils';

export default function App() {
  const [params, setParams] = useState({ a1: 10, a2: 5, a3: 5, a4: 5 });
  const file = getScenarioFile(params);

  return (
    <div style={{ padding: '2rem' }}>
      
      <h2>Vaccine Hesitancy Simulation Explorer</h2>
      <SliderPanel params={params} setParams={setParams} />
      <ChartPanel file={file} />
    </div>
  );
}


import React from 'react';

export default function SliderPanel({ params, setParams }) {
  const handleChange = (key) => (e) => {
    setParams({ ...params, [key]: parseInt(e.target.value) });
  };

  return (
    <div>
      {["a1", "a2", "a3", "a4"].map((key) => (
        <div key={key} style={{ marginBottom: "1rem" }}>
          <label>
            {key.toUpperCase()}: {params[key]}
          </label>
          <input
            type="range"
            min="0"
            max="15"
            step="1"
            value={params[key]}
            onChange={handleChange(key)}
          />
        </div>
      ))}
    </div>
  );
}

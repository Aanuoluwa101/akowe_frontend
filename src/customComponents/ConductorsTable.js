// ConductorsTable.js
import React, { useState } from 'react';
import '../css/ConductorsTable.css'; // Import the CSS file

const ConductorsTable = () => {
  const createEmptyConductor = () => ({
    id: Date.now(), // Use a unique identifier for the empty row
    rank: '',
    name: '',
    weekdays: false,
    sundays: false,
    readWeekdays: false,
    readSundays: false,
    preachWeekdays: false,
    preachSundays: false,
    include: false,
  });

  const [conductors, setConductors] = useState([
    //{ id: 1, rank: 'Pastor', name: 'John Doe', weekdays: false, sundays: false, readWeekdays: false, readSundays: false, preachWeekdays: false, preachSundays: false, include: false },
    createEmptyConductor(), // Add an empty row by default
  ]);

  const handleCheckboxChange = (id, field) => {
    setConductors(prevConductors => {
      return prevConductors.map(conductor => {
        if (conductor.id === id) {
          return { ...conductor, [field]: !conductor[field] };
        }
        return conductor;
      });
    });
  };

  const handleIncludeCheckboxChange = (id) => {
    setConductors(prevConductors => {
      return prevConductors.map(conductor => { 
        if (conductor.id === id) {
          return { ...conductor, include: !conductor.include };
        }
        return conductor;
      });
    });
  };

  const handleAddConductor = () => {
    const lastConductor = conductors[conductors.length - 1];

    if (lastConductor.rank !== '' && lastConductor.name !== '') {
      setConductors(prevConductors => [...prevConductors, createEmptyConductor()]);
    }
  };

  const handleInputChange = (id, field, event) => {
    const value = event.target.value;

    setConductors(prevConductors => {
      return prevConductors.map(conductor => {
        if (conductor.id === id) {
          return { ...conductor, [field]: value };
        }
        return conductor;
      });
    });
  };

  const ranks = ["", "Brother", "Evangelist", "Senior Evangelist"];

  
  return (
    <div>
      <table className="conductors-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Rank</th>
            <th>Name</th>
            <th>Can conduct on weekdays</th>
            <th>Can conduct on Sundays</th>
            <th>Can read on weekdays</th>
            <th>Can read on Sundays</th>
            <th>Can preach on weekdays</th>
            <th>Can preach on Sundays</th>
            <th>Include</th>
          </tr>
        </thead>
        <tbody>
          {conductors.map((conductor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {index === conductors.length - 1 ? (
                  <select value={conductor.rank} onChange={(e) => handleInputChange(conductor.id, 'rank', e)}>
                    {ranks.map((rank, i) => (
                      <option key={i} value={rank}>{rank}</option>
                    ))}
                  </select>
                ) : conductor.rank}
              </td>
              <td>{index === conductors.length - 1 ? <span contentEditable="true" onInput={(e) => handleInputChange(conductor.id, 'name', e)}>{conductor.name}</span> : conductor.name}</td>
              <td><input type="checkbox" checked={conductor.weekdays} onChange={() => handleCheckboxChange(conductor.id, 'weekdays')} /></td>
              <td><input type="checkbox" checked={conductor.sundays} onChange={() => handleCheckboxChange(conductor.id, 'sundays')} /></td>
              <td><input type="checkbox" checked={conductor.readWeekdays} onChange={() => handleCheckboxChange(conductor.id, 'readWeekdays')} /></td>
              <td><input type="checkbox" checked={conductor.readSundays} onChange={() => handleCheckboxChange(conductor.id, 'readSundays')} /></td>
              <td><input type="checkbox" checked={conductor.preachWeekdays} onChange={() => handleCheckboxChange(conductor.id, 'preachWeekdays')} /></td>
              <td><input type="checkbox" checked={conductor.preachSundays} onChange={() => handleCheckboxChange(conductor.id, 'preachSundays')} /></td>
              <td><input type="checkbox" checked={conductor.include} onChange={() => handleIncludeCheckboxChange(conductor.id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddConductor} disabled={conductors.slice(-1)[0].rank === '' || conductors.slice(-1)[0].name === ''}>Add Officiator</button>
    </div>
  );
};

export default ConductorsTable;

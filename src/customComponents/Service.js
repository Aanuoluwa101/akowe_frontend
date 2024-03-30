// Service.js
import React, { useState } from 'react';
import '../css/Service.css'; // Import the CSS file

const Service = ({ date, onClose }) => {
  const [conductor, setConductor] = useState('');
  const [firstLessonReader, setFirstLessonReader] = useState('');
  const [secondLessonReader, setSecondLessonReader] = useState('');
  const [sermoner, setSermoner] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission logic (e.g., save data)
    // ...

    // Close the service form
    onClose();
  };

  return (
    <div className="service-form">
      <h2>{date}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="conductor">Service Conductor:</label>
        <input
          type="text"
          id="conductor"
          value={conductor}
          onChange={(e) => setConductor(e.target.value)}
          required
        />

        <label htmlFor="firstLessonReader">First Lesson Reader:</label>
        <input
          type="text"
          id="firstLessonReader"
          value={firstLessonReader}
          onChange={(e) => setFirstLessonReader(e.target.value)}
          required
        />

        {date.includes('Sunday') && (
          <><label htmlFor="secondLessonReader">Second Lesson Reader:</label><input
                      type="text"
                      id="secondLessonReader"
                      value={secondLessonReader}
                      onChange={(e) => setSecondLessonReader(e.target.value)}
                      required /></>
        )}

        <label htmlFor="sermoner">Sermoner:</label>
        <input
          type="text"
          id="sermoner"
          value={sermoner}
          onChange={(e) => setSermoner(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Service;

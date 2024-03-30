// Calendar.js
import React from 'react';
import '../css/Calendar.css'; // Import the CSS file

const Calendar = () => {
  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getDayOfWeek = (day, month, year) => {
    return new Date(year, month, day).getDay();
  };

  const isSunday = (dayOfWeek) => {
    return dayOfWeek === 0;
  };

  const renderCalendar = (month, year) => {
    const totalDays = daysInMonth(month, year);
    const firstDay = getDayOfWeek(1, month, year);
    const calendarRows = [];

    let currentDay = 1;

    for (let row = 0; row < 6; row++) {
      const calendarCells = [];

      for (let col = 0; col < 7; col++) {
        if ((row === 0 && col < firstDay) || currentDay > totalDays) {
          calendarCells.push(<td key={col}></td>);
        } else {
          const cellClassName = isSunday(col) ? 'sunday' : '';
          calendarCells.push(<td key={col} className={cellClassName}>{currentDay}</td>);
          currentDay++;
        }
      }

      calendarRows.push(<tr key={row}>{calendarCells}</tr>);
    }

    return (
      <table className="calendar">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
    );
  };

  return (
    <div>
      <h2>Calendar</h2>
      {renderCalendar(2, 2024)} {/* Specify the month and year you want to display */}
    </div>
  );
};

export default Calendar;

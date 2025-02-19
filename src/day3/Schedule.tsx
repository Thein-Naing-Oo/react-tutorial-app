import React, { useState } from 'react';
import './Schedule.css'; // Import your CSS file

const Schedule = () => {
  const [timetableData, setTimetableData] = useState([
    { day: 'Monday', periods: [
      { time: '9:00 - 10:00', subject: 'Math', rowSpan: 1, colSpan: 1 },
      { time: '10:00 - 11:00', subject: 'Science', rowSpan: 1, colSpan: 1 },
      { time: '11:00 - 12:00', subject: 'Lunch', rowSpan: 2, colSpan: 1 }, // Example of row merge
      { time: '12:00 - 1:00', subject: '', rowSpan: 0, colSpan: 0 }, // Placeholder for merged cell
      { time: '1:00 - 2:00', subject: 'English', rowSpan: 1, colSpan: 2 }, // Example of column merge
      { time: '2:00 - 3:00', subject: '', rowSpan: 0, colSpan: 0 }, // Placeholder for merged cell
    ]},
    { day: 'Tuesday', periods: [
      { time: '9:00 - 10:00', subject: 'History', rowSpan: 1, colSpan: 1 },
      { time: '10:00 - 11:00', subject: 'Geography', rowSpan: 1, colSpan: 1 },
      { time: '11:00 - 12:00', subject: 'Art', rowSpan: 1, colSpan: 1 },
      { time: '12:00 - 1:00', subject: 'Music', rowSpan: 1, colSpan: 1 },
      { time: '1:00 - 2:00', subject: 'PE', rowSpan: 1, colSpan: 1 },
      { time: '2:00 - 3:00', subject: 'Coding', rowSpan: 1, colSpan: 1 },
    ]},
    // ... more days
  ]);

  return (
    <table className="timetable">
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        {timetableData.map((dayData) => (
          <React.Fragment key={dayData.day}>
            <tr>
              <td rowSpan={dayData.periods.length}>{dayData.day}</td>
              {dayData.periods.map((period, index) => {
                if(period.rowSpan === 0 || period.colSpan === 0) return null; // Skip rendering if it's a merged cell placeholder

                return (
                  <React.Fragment key={index}>
                    <td rowSpan={period.rowSpan} colSpan={period.colSpan}>{period.time}</td>
                    <td rowSpan={period.rowSpan} colSpan={period.colSpan}>{period.subject}</td>
                  </React.Fragment>
                );
              })}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default Schedule;
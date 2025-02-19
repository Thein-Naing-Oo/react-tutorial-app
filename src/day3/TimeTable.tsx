import React from 'react';
import './TimeTable.css';

const timetableData = [
    { day: 'Monday', time: '9:00 AM', subject: 'Math', rowSpan: 1, colSpan: 1 },
    { day: 'Monday', time: '10:00 AM', subject: 'Science', rowSpan: 1, colSpan: 1 },
    { day: 'Monday', time: '11:00 AM', subject: 'History', rowSpan: 2, colSpan: 1 }, // Merged row-wise
    { day: 'Tuesday', time: '9:00 AM', subject: 'English', rowSpan: 1, colSpan: 2 }, // Merged column-wise
    { day: 'Tuesday', time: '10:00 AM', subject: 'Physics', rowSpan: 1, colSpan: 1 },
    { day: 'Tuesday', time: '11:00 AM', subject: 'Chemistry', rowSpan: 1, colSpan: 1 },
    { day: 'Wednesday', time: '9:00 AM', subject: 'Biology', rowSpan: 1, colSpan: 1 },
    { day: 'Wednesday', time: '10:00 AM', subject: 'Geography', rowSpan: 1, colSpan: 1 },
    { day: 'Wednesday', time: '11:00 AM', subject: 'Art', rowSpan: 1, colSpan: 1 },
];

const days = ['Monday', 'Tuesday', 'Wednesday'];
const times = ['9:00 AM', '10:00 AM', '11:00 AM'];

const TimeTable = () => {
    return (
        <div className="timetable">
            <div className="header">Timetable</div>
            <div className="grid">
                {/* Render headers */}
                <div className="cell header">Day/Time</div>
                {times.map((time) => (
                    <div key={time} className="cell header">
                        {time}
                    </div>
                ))}

                {/* Render timetable data */}
                {days.map((day) => (
                    <React.Fragment key={day}>
                        <div className="cell header">{day}</div>
                        {times.map((time) => {
                            const event = timetableData.find((e) => e.day === day && e.time === time);
                            if (event) {
                                return (
                                    <div
                                        key={`${day}-${time}`}
                                        className="cell event"
                                        style={{
                                            gridRow: `span ${event.rowSpan}`,
                                            gridColumn: `span ${event.colSpan}`,
                                        }}
                                    >
                                        {event.subject}
                                    </div>
                                );
                            }
                            return <div key={`${day}-${time}`} className="cell"></div>;
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default TimeTable
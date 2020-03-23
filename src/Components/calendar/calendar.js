//TODO: make responsive & animate

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
    //state for current date
    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date)
    }
    return (
        <div className="calendar-page-container">
            <h3>Stay tuned for events following the apocalypse!</h3>
            <div className="player-wrapper">
                <Calendar
                    className="react-calendar"
                    onChange={onChange}
                    value={date}
                />
            </div>
        </div>)
}

export default CalendarView;
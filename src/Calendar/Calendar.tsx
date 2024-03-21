import React from 'react'
import './Calendar.css'

interface CalendarProps {
    year: number;
    month: number;
    onDateClick: (date: Date) => void;
}

//TODO: if click "className is before or next", change month

const Calendar: React.FC<CalendarProps> = ({year, month, onDateClick}) => {
    const days_n = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    const handleDateClick = (day: number) => {
        const selectedDate = new Date(year, month, day);
        onDateClick(selectedDate);
    }

    const display_header = (
        <div className="calendar-header">
            <div className="calendar-ym header">
                <a>{year}년 {month+1}월</a>
                <a className="calendar-next">
                    <a className="before"></a>
                    <a className="next"></a>
                </a>
            </div>
        </div>
    );

    const blanks = Array(firstDay).fill(null).map(() => (
        <a className="calendar-day empty"></a>
    ));

    const days = Array.from({length: days_n}, (_, index) => (
        <a className="calendar-day fill" onClick={() => handleDateClick(index + 1)}>
            <div>{index + 1}</div>
        </a>
    ));

    const full_days = [...blanks, ...days];
    const weeks = Array.from({length: Math.ceil(full_days.length / 7)}, (_, index) => (
        <div key={`week-${index}`} className="calendar-week day">
            {full_days.slice(index * 7, index * 7 + 7)}
        </div>
    ));

    return (
        <div className="Calendar">
            {display_header}
            <div className="calendar-week header">
                <a>일</a>
                <a>월</a>
                <a>화</a>
                <a>수</a>
                <a>목</a>
                <a>금</a>
                <a>토</a>
            </div>
            {weeks}
        </div>
    )
}

export default Calendar;
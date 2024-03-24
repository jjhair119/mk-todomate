import React, {useEffect, useState} from "react";
import Calendar from "./Calendar/Calendar.tsx";
import TodoList from "./todo/TodoList.tsx";
import "./App.css";
import LocalStorageUtil, {CalendarData, CalendarDate} from "./utils/LocalStorageUtil.ts";
import dayjs from "dayjs";

const App: React.FC = function () {
    const getDate = (): Date => {
        return new Date();
    }

    const nowDate = getDate();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();

    const [selectedDate, setDate] = useState<Date>(getDate());
    const [calendarData, setCalendarData] = useState<CalendarData>(LocalStorageUtil.GetCalendarData());
    const formattedSelectedDate = parseInt(dayjs(selectedDate).format("YYYYMMDD"));

    const handleDate = (date: Date) => {
        setDate(date);
    }

    useEffect(() => {
        LocalStorageUtil.SetCalendarData(calendarData);
        console.log(calendarData);
    }, [calendarData])

    return (
        <div className="App">
            <Calendar
                onDateClick={handleDate}
                year={nowYear}
                month={nowMonth}
            />
            <TodoList
                year={selectedDate.getFullYear()}
                month={selectedDate.getMonth()}
                day={selectedDate.getDate()}
                calendarDate={calendarData[formattedSelectedDate] || {todos: [], diary: "", emoji: ""}}
                setCalendarDate={(calendarDate:CalendarDate) => setCalendarData({
                    ...calendarData,
                    [formattedSelectedDate]: calendarDate,
                })}
            />
        </div>
    )
}

export default App

import React, {useState} from "react";
import Calendar from "./Calendar/Calendar.tsx";
import Todo from "./Todo/Todo.tsx";
import "./App.css";

const App: React.FC = function () {
    const getDate = (): Date => {
        return new Date();
    }

    const nowDate = getDate();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();

    const [selectDate, setDate] = useState<Date>(getDate());

    const handleDate = (date: Date) => {
        setDate(date);
    }

    return (
        <div className="App">
            <Calendar
                onDateClick={handleDate}
                year={nowYear}
                month={nowMonth}
            />
            <Todo
                year={selectDate.getFullYear()}
                month={selectDate.getMonth()}
                day={selectDate.getDate()}
            />
        </div>
    )
}

// function App() {
//
//     const date = new Date()
//     return (
//         <>
//             <Calendar year={date.getFullYear()} month={date.getMonth()}/>
//             <Todo year={date.getFullYear()} month={date.getMonth()} date={date.getDate()}/>
//         </>
//     )
// }

export default App

import React, {useState} from 'react'
import styled from "styled-components"
import {CalendarDate} from "../utils/LocalStorageUtil.ts";

interface TodoProps {
    year: number;
    month: number;
    day: number;
    calendarDate: CalendarDate;
    setCalendarDate: (calendarDate: CalendarDate) => void;
    // setCalendarDate: typeof LocalStorageUtil["SetCalendarDate"]; //SetCalendarDate의 파라미터 가져오깅
}

const AddTodoButton = styled.button`
    background: #ffc8cf;
`;

const TodoList: React.FC<TodoProps> = ({year, month, day, calendarDate, setCalendarDate}) => {

    const [todo, setTodo] = useState<string>('');
    const [enableTodoInput, setEnableTodoInput] = useState(false);

    const handleTodo = () => {
        setEnableTodoInput(true);
    }

    const onInputBlur = () => { //TodoList
        if (todo) {
            const newCalendarDate = {
                ...calendarDate,
                todos: calendarDate.todos.concat({
                    value: todo,
                    checked: false,
                    memo: ""
                })
            }
            setCalendarDate(newCalendarDate);
        }
        setEnableTodoInput(false);
    }

    return (
        <div className="Todo">
            {year}년 {month + 1}월 {day}일
            <div id="Todolist">
                <AddTodoButton onClick={handleTodo}>일반</AddTodoButton>
                {
                    enableTodoInput && <div onBlur={onInputBlur}>
                        <input type="checkbox"/>
                        <input autoFocus
                               type="text"
                               id="newTodo"
                               value={todo}
                               onChange={e => setTodo(e.target.value)}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default TodoList;
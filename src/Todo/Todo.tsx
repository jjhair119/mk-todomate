import React from 'react'

interface TodoProps {
    year: number;
    month: number;
    day: number;
}
const Todo:React.FC<TodoProps> = ({year,month,day}) => {
    return (
        <div>
            {year}년 {month+1}월 {day}일
        </div>
    )
}

export default Todo;
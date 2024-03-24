export default class LocalStorageUtil {
    static GetCalendarData(): CalendarData {
        //데이터 가져오기
        const calendarData = JSON.parse(localStorage.getItem('calendarData') ?? "{}") as CalendarData;
        return calendarData;
    }

    static SetCalendarData(data: CalendarData) {
        localStorage.setItem("calendarData", JSON.stringify(data))
    }
}

export interface CalendarData {
    [key: number]: CalendarDate
}

export interface CalendarDate {
    todos: Todo[]
    diary: string
    emoji: string
}

export interface Todo {
    value: string;
    checked: boolean;
    memo: string;
}
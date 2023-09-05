import moment from "moment";
import { useState } from "react";

const useCalendar = ({ monthObj = { } }) => {
    const [monthState, setMonthState] = useState({
        month: monthObj.month ?? moment().format('MM'),
        year: monthObj.year ?? moment().format('YYYY'),
    });

    const today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    const beginOffset = moment(monthState).startOf('month').day();
    const daysInMonth = moment(monthState).daysInMonth();
    const trailingDays = (7 - (beginOffset + daysInMonth) % 7) % 7;

    const dayArray = [...Array(Number(beginOffset)).fill({ date: '' })];
    for (let i = 1; i <= daysInMonth; i++) {
        dayArray.push({ date: i });
    }
    dayArray.push(...Array(Number(trailingDays)).fill({ date: '' }));

    const month = {
        ...monthState,
        today,
        month: moment(monthState).format("MMMM"),
        year: moment(monthState).format("YYYY"),
        days: dayArray
    };

    const nextMonth = () => {
        setMonthState(prevValue => moment(prevValue).add(1, 'month'))
    };

    const prevMonth = () => {
        setMonthState(prevValue => moment(prevValue).subtract(1, 'month'))
        
    };

    return { month, today, nextMonth, prevMonth };
}

export default useCalendar;
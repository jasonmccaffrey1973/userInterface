import { styled } from "styled-components"
import useCalendar from "../Application/Models/useCalendar"

const CalendarGrid = styled.ul`
display: grid;
grid-template-columns: repeat(7, 1fr);
width: 100%;
padding: 0;
margin: 0;
list-style: none;
`

const CalendarHeader = styled.li`
grid-column: 1 / -1;
display: grid;
grid-template-columns: repeat(7, 1fr);
width: 100%;
padding: 0;
margin: 0;
list-style: none;
.month-wrapper {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
    grid-template-areas: "prev-month month next-month" ". month .";
    place-items: center;
    .prev-month, .next-month {   
        --color: var(--Text);
        --size : 1rem;
        background-color: transparent;
        border: none;
        display: grid;
        place-items: center;
        aspect-ratio: 1 / 1;
        height: calc(var(--size) * 2);
        border-radius: 50%;
        transition: background-color 200ms ease-in-out;
        &::before {
            content: '';
            display: block;
            width: calc(var(--size) * 0.75);
            aspect-ratio: 1 / 1;
            border-top: 2px solid var(--color);
            border-left: 2px solid var(--color);
        }
        &:hover, &:focus {
            --color: var(--TextAccent);
            outline: none;
            background-color: var(--Accent);
        }
    }
    .prev-month {
        grid-area: prev-month;
        justify-self: start;
        &::before {
            margin-left: calc(var(--size) * 0.25);
            rotate: -45deg;
        }
    }
    .next-month {
        grid-area: next-month;
        justify-self: end;
        &::before {
            rotate: 135deg;
            margin-right: calc(var(--size) * 0.25);
        }
    }
}
.calendar__header-day {
    display: grid;
    place-items: center;
    font-size: var(--TextSmall);
    font-weight: var(--TextBold);
    text-transform: uppercase;
    color: var(--TextLight);
    border-bottom: 1px solid var(--Accent);
}
`

const CalendarDay = styled.li`
display: grid;
border: 1px solid var(--Accent);
background-color: var(--PrimaryLight);
color: var(--color-white);
font-size: var(--TextMedium);
aspect-ratio: 1 / 1;
&.null-date {
    pointer-events: none;
    background-color: transparent;
}
&:hover, &:focus {
    background-color: var(--Accent);
    outline: none;
    cursor: pointer;
}
`

const Calendar = ({month = null, year = null}) => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const {month: monthData, nextMonth, prevMonth} = useCalendar({month: month, year: year })

    const MonthHeader = () => {
        return (
            <CalendarHeader>
            <div className="month-wrapper">
                <h2 className="month-title">{monthData.month} {monthData.year}</h2>
                <button className="prev-month" onClick={prevMonth}></button>
                <button className="next-month" onClick={nextMonth}></button>
            </div>
            {weekDays.map((day, index) => <div key={index} className="calendar__header-day">{day}</div>
        )}
            </CalendarHeader>
        )
    }

    const Days = () => {
        return monthData.days.map((day, index) => {
            return <CalendarDay className={day.date === '' ? 'null-date' : ''} key={index}>{day.date}</CalendarDay>
        })
    }

    return (
        <>
        <CalendarGrid>
        <MonthHeader />
            <Days />
        </CalendarGrid>
        </>
    )
}

export default Calendar
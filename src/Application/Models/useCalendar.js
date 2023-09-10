import moment from "moment";
import { useState } from "react";

/** ----------------------------------------------------------
 * monthObj is an object with the following properties:
 * month: number (1-12)
 * year: number (YYYY)
 * 
 * If monthObj is not provided, the current month 
 * and year will be used
 * 
 * Returns an object with the following properties:
 * month: object with the following properties:
 * month: string (MMMM)
 * year: string (YYYY)
 * today: string (dddd, MMMM Do YYYY, h:mm:ss a)
 * days: array of objects with the following properties:
 * date: number (1-31)
 * today: boolean
 * nextMonth: function to navigate to the next month
 * prevMonth: function to navigate to the previous month
 * ----------------------------------------------------------- */
const useCalendar = ({ monthObj = {} }) => {
    
/** ----------------------------------------------------------
 * Initialize the monthState with the provided month and year or use the current month and year
 * ----------------------------------------------------------- */
  const [monthState, setMonthState] = useState({
    month: monthObj.month ?? moment().month(),
    year: monthObj.year ?? moment().format('YYYY'),
  });

/** ----------------------------------------------------------
 * Get the current date and time formatted as a string
 * ----------------------------------------------------------- */
  const today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

/** ----------------------------------------------------------
 * Calculate the day of the week (0 for Sunday, 1 for Monday, etc.) on which the month starts
 * ----------------------------------------------------------- */
  const beginOffset = moment(monthState).startOf('month').day();

/** ----------------------------------------------------------
 * Calculate the total number of days in the month
 * ----------------------------------------------------------- */
  const daysInMonth = moment(monthState).daysInMonth();

/** ----------------------------------------------------------
 *  Calculate the number of trailing days needed to complete the last week in the calendar
 * ----------------------------------------------------------- */
  const trailingDays =
    7 - ((beginOffset + daysInMonth) % 7) === 7 ? 0 : 7 - ((beginOffset + daysInMonth) % 7);

/** ----------------------------------------------------------
 *  Initialize an array to represent the days in the calendar
 * ----------------------------------------------------------- */
  const dayArray = [...Array(Number(beginOffset)).fill(
    { 
        date: '', 
        active: false 
    }
  )];

/** ----------------------------------------------------------
 *  Populate the dayArray with the dates of the month and mark today's date if it matches
 * ----------------------------------------------------------- */
  for (let i = 1; i <= daysInMonth; i++) {
    dayArray.push({
      date: i,
      today: moment().isSame(moment(monthState).date(i), 'day'),
      active: true,
    });
  }

/** ----------------------------------------------------------
 * Add the trailing empty slots to the dayArray to complete the last week
 * ----------------------------------------------------------- */
  dayArray.push(...Array(Number(trailingDays)).fill(
    { 
        date: '', 
        active: false 
    }
    ));

/** ----------------------------------------------------------
 * Create a month object with all the relevant data
 * ----------------------------------------------------------
 * month: string (MMMM)
 * year: string (YYYY)
 * today: string (dddd, MMMM Do YYYY, h:mm:ss a)
 * days: array of objects with the following properties:
 * date: number (1-31)
 * today: boolean
 * ---------------------------------------------------------- */
  const month = {
    ...monthState,
    today,
    month: moment(monthState).format("MMMM"),
    year: moment(monthState).format("YYYY"),
    days: dayArray,
  };

/** ----------------------------------------------------------
 * Function to navigate to the next month
 * ----------------------------------------------------------- */
  const nextMonth = () => {
    setMonthState(prevValue => moment(prevValue).add(1, 'month'))
  };

/** ----------------------------------------------------------
 *  Function to navigate to the previous month
 * ----------------------------------------------------------- */
  const prevMonth = () => {
    setMonthState(prevValue => moment(prevValue).subtract(1, 'month'))
  };

/** ----------------------------------------------------------
 * Function to navigate to a specific month
 * params: object with the following properties:
 * month: number (1-12) if not provided, the current month will be used
 * year: number (YYYY) if not provided, the current year will be used
 * ----------------------------------------------------------- */
  const setMonth = ({month = monthState.month, year = monthState.year}) => {
    setMonthState({month, year});
  }

/** ----------------------------------------------------------
 * Return the month object, today's date, and functions to navigate to the next and previous months
 * ----------------------------------------------------------- */
  return { month, today, nextMonth, prevMonth, setMonth };
}

export default useCalendar;

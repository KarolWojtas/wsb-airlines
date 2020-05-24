import React, { useMemo, useState, useCallback } from "react";
import moment from "moment";
import styles from "./TravelDatePicker.module.css";

const TravelDatePicker = (props) => {
  const { startDate, onDateSelect } = props;
  const [selDay, setSelDay] = useState(startDate.getDate());
  const [monthNumber, setMonthNumber] = useState(startDate.getMonth() + 1);
  const [yearNumber, setYearNumber] = useState(startDate.getFullYear());
  const calendar = useMemo(() => getCalendarForMonth(monthNumber, yearNumber), [
    monthNumber,
    yearNumber,
  ]);

  const onSelectDate = useCallback(
    (day) => {
      if (day) {
        setSelDay(day);
        onDateSelect(new Date(yearNumber, monthNumber - 1, selDay));
      }
    },
    [monthNumber, yearNumber, selDay, onDateSelect]
  );

  const onNextMonth = useCallback(() => {
    if (monthNumber < 12) {
      setMonthNumber(monthNumber + 1);
    } else {
      setMonthNumber(1);
      setYearNumber(yearNumber + 1);
    }
  }, [yearNumber, monthNumber]);

  const onPrevMonth = useCallback(() => {
    if (monthNumber > 1) {
      setMonthNumber(monthNumber - 1);
    } else {
      setMonthNumber(12);
      setYearNumber(yearNumber - 1);
    }
  }, [yearNumber, monthNumber]);

  // todo styling
  const calendarTemplate = calendar.map((week, weekIx) => (
    <div className={"row"} key={`week[${weekIx}]`}>
      {week.map((day, dayIx) => (
        <div
          onClick={() => onSelectDate(day[0])}
          className={`col-xs text-center ${styles.dateCell}`}
          key={`day[${dayIx}]`}
        >
          {day[0] === 0 ? null : day[0]}
        </div>
      ))}
    </div>
  ));
  return (
    <div className={`${styles.datePicker}`}>
      <div className="">
        <div className={"btn-group"}>
          <button
            type={"button"}
            className={"btn btn-secondary"}
            onClick={() => onPrevMonth()}
          >
            Prev
          </button>
          <button
            type={"button"}
            className={"btn btn-secondary"}
            onClick={() => onNextMonth()}
          >
            Next
          </button>
        </div>
        <div className="ml-3">
          {selDay} - {monthNumber} - {yearNumber}
        </div>
      </div>
      <div className="container mt-2">{calendarTemplate}</div>
    </div>
  );
};
/**
 *
 * @param {number} month
 * @param {number} year
 * @returns {[][][string, boolean]}
 */
const getCalendarForMonth = (month, year) => {
  const monthStr = month < 10 ? `0${month}` : month;
  const dateString = `${year}-${monthStr}`;
  const date = moment(dateString, "YYYY-MM");
  const daysInMonth = date.daysInMonth();
  let firstDayIndex = moment(`${dateString}-01`, "YYYY-MM-dd").weekday();
  firstDayIndex = firstDayIndex === 0 ? 7 : firstDayIndex;
  let calendarIndex = 0;
  return Array.from({ length: daysInMonth + firstDayIndex - 1 }, (v, ix) => {
    // month start empty values
    if (ix < firstDayIndex - 1 || ix > daysInMonth + firstDayIndex - 1) {
      return 0;
    } else {
      return ++calendarIndex;
    }
  }).reduce(
    (acc, val) => {
      if (acc[acc.length - 1].length < 7) {
        acc[acc.length - 1].push([val, false]);
      } else {
        const newArray = [];
        newArray.push([val, false]);
        acc.push(newArray);
      }
      return acc;
    },
    [[]]
  );
};

export default TravelDatePicker;

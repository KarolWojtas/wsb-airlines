import React, { useMemo, useState, useCallback } from "react";
import moment from "moment";
import styles from "./TravelDatePicker.module.css";
import arrowRight from "../../assets/arrRight.svg";

const TravelDatePicker = (props) => {
  const { todayDate, onDateSelect } = props;
  const [selDate, setSelDate] = useState(todayDate);
  const [monthNumber, setMonthNumber] = useState(todayDate.getMonth() + 1);
  const [yearNumber, setYearNumber] = useState(todayDate.getFullYear());
  const calendar = useMemo(() => getCalendarForMonth(monthNumber, yearNumber), [
    monthNumber,
    yearNumber,
  ]);

  const onSelectDate = useCallback(
    (day) => {
      if (day) {
        const date = new Date(yearNumber, monthNumber - 1, day);
        setSelDate(date);
        onDateSelect(date);
      }
    },
    [monthNumber, yearNumber, onDateSelect]
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
      {week.map((day, dayIx) => {
        const dayClasses = ["col-xs text-center", styles.dateCell];
        if (
          day[0] === todayDate.getDate() &&
          monthNumber === todayDate.getMonth() + 1 &&
          yearNumber === todayDate.getFullYear()
        ) {
          dayClasses.push(styles.today);
        }
        if (
          day[0] === selDate.getDate() &&
          monthNumber === selDate.getMonth() + 1 &&
          yearNumber === selDate.getFullYear()
        ) {
          dayClasses.push(styles.selected);
        }
        return (
          <div
            className={dayClasses.join(" ")}
            onClick={() => onSelectDate(day[0])}
            key={`day[${dayIx}]`}
          >
            <p>{day[0] === 0 ? null : day[0]}</p>
          </div>
        );
      })}
    </div>
  ));
  return (
    <div className={`${styles.datePicker} border-bottom`}>
      <div className="container bg-light rounded-top border pb-2">
        <div className="row">
          <div className="col-6">
            <div>
              {monthNumber} - {yearNumber}
            </div>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={() => onPrevMonth()}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={arrowRight}
                    style={{ transform: "rotate(-180deg)" }}
                    alt="previous"
                  />
                </div>
              </button>
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                onClick={() => onNextMonth()}
              >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={arrowRight} alt="next" />
                </div>
              </button>
            </div>
          </div>
          <div className="col-6 text-right">
            {selDate.getDate()} - {selDate.getMonth() + 1} -{" "}
            {selDate.getFullYear()}
          </div>
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

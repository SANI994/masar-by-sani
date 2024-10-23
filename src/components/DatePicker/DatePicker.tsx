"use client"
/* eslint-disable */
import * as React from "react";
import styles from "./styles.module.css";

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const OLD_YEAR = 1970;
const MAX_YEAR = new Date().getFullYear() + 3;

interface DatePickerProps{
  isOpen:boolean
  onClose?:()=>void;
 title:string;
 dayNames?:string[];
 headerFormat?:string;
 showTitle?:boolean;
 monthNames?:string[];
 defaultValue?:Date | null;
 minDate?:Date;
 maxDate?:Date;
 colorScheme?:string;
 headerTextColor?:string;
 closeText?:string;
 clearText?:string;
 onChange:(data:string | null)=>void

}

const DatePicker = ({
  isOpen: showCalendar,
  onClose,
  title,
  dayNames,
  headerFormat,
  showTitle = true,
  monthNames,
  defaultValue,
  minDate = new Date(OLD_YEAR, 0, 1),
  maxDate = new Date(MAX_YEAR, 11, 31),
  colorScheme = "#334961",
  headerTextColor = "#fff",
  closeText = "Close",
  clearText = "Clear",
  onChange,
}:DatePickerProps) => {
  const [isOpen, setIsOpen] = React.useState(showCalendar);
  const [calendar, setCalendar] = React.useState<any>([]);
  const [days] = React.useState(dayNames?.length === 7 ? dayNames : DAY_NAMES);
  const [months] = React.useState(
    monthNames?.length === 12 ? monthNames : MONTH_NAMES
  );
  const [month, setMonth] = React.useState(0);
  const [year, setYear] = React.useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = React.useState(defaultValue);
  const dbRef = React.useRef<any>(null);
  const lbRef = React.useRef<any>(null);
  const changeMonth = (inc:any) => {
    let curMonth = month + inc;
    let curYear = year;

    if (curMonth === 12) {
      curMonth = 0;
      curYear++;
    } else if (curMonth === -1) {
      curMonth = 11;
      curYear--;
    }

    setMonth(curMonth);
    setYear(curYear);
  };
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const selectDate = (day:any) => {
    const processedDate = day.toLocaleDateString("en-AU", options);
    setMonth(day.getMonth());
    setYear(day.getFullYear());
    // setDate(day.getDate())
    setSelectedDate(day);
    onChange && onChange(processedDate);
  };

  const getHeader = () => {
    const backup = new Date();
    const dayName = days[selectedDate?.getDay() || backup.getDay()];
    const dateNum = selectedDate ? selectedDate.getDate() : backup.getDate();
    const date = dateNum < 10 ? `0${dateNum}` : dateNum.toString();
    const monthName = months[selectedDate?.getMonth() || backup.getMonth()];
    const monthNum =
      (selectedDate ? selectedDate.getMonth() : backup.getMonth()) + 1;
    const monthWithZero = monthNum < 10 ? `0${monthNum}` : monthNum.toString();
    let result = headerFormat || "DD, MM dd";

    result = result.replaceAll("D", "_D");
    result = result.replaceAll("M", "_M");
    result = result.replaceAll("d", "_d");
    result = result.replaceAll("m", "_m");

    result = result.replaceAll("_D_D", dayName);
    result = result.replaceAll("_D", dayName.substring(0, 3));
    result = result.replaceAll("_M_M", monthName);
    result = result.replaceAll("_M", monthName.substring(0, 3));
    result = result.replaceAll("_m_m", monthWithZero);
    result = result.replaceAll("_m", monthNum.toString());
    result = result.replaceAll("_d_d", date);
    result = result.replaceAll("_d", date.replace(/^0/, ""));

    return result;
  };

  const handleClear = () => {
    setSelectedDate(null);
    onChange && onChange(null);
  };

  const handleClose = () => {
    // setIsOpen(false)
    dbRef.current?.classList.add(styles.fadeOut);
    lbRef.current?.classList.add(styles.zoomOut);

    setTimeout(() => {
      setIsOpen(false);
      onClose && onClose();
      dbRef.current?.classList.remove(styles.fadeOut);
      lbRef.current?.classList.remove(styles.zoomOut);
    }, 300);
  };

  React.useEffect(() => {
    const firstDayThisMonth = new Date(year, month, 1).getDay();
    const temp = [];

    for (let i = 0; i < 42; i++) {
      const date = new Date(year, month, i - firstDayThisMonth + 1);
      temp.push(date);
    }

    setCalendar(temp);
  }, [month, year]);

  React.useEffect(() => {
    if (defaultValue) {
      if (defaultValue.getTime() < minDate.getTime()) {
        setMonth(minDate.getMonth());
        setSelectedDate(minDate);
      } else {
        setMonth(defaultValue.getMonth());
      }
    }
  }, []);

  React.useEffect(() => {
    setIsOpen(showCalendar);
  }, [showCalendar]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.darkbox} ref={dbRef}>
      <div className={styles.lightbox} ref={lbRef}>
        <div
          className={styles.header}
          style={{
            backgroundColor: colorScheme,
            color: headerTextColor,
          }}
        >
          {showTitle && (
            <h4 className={styles.title}>{title || "Select Date"}</h4>
          )}
          <span className={styles.monthName}>{getHeader()}</span>
          <br />
          <span className={styles.year}>
            {selectedDate ? selectedDate.getFullYear() : year}
          </span>
        </div>

        <div className={styles.nav}>
          <div className={styles.selector}>
            <select
              onChange={(e) => setMonth(parseInt(e.target.value))}
              value={month}
            >
              {months.map((monthName:string, index:number) => (
                <option
                  key={index}
                  value={index}
                  // style={{ hover: { backgroundColor: "red" } }}
                >
                  {monthName}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setYear(parseInt(e.target.value))}
              value={year}
            >
              {Array(maxDate.getFullYear() - minDate.getFullYear() + 1)
                .fill(0)
                .map((_, index) => (
                  <option key={index} value={maxDate.getFullYear() - index}>
                    {maxDate.getFullYear() - index}
                  </option>
                ))}
            </select>
          </div>
          <div className={styles.prevNext}>
            <button
              type="button"
              disabled={
                minDate.getFullYear() === year && minDate.getMonth() === month
              }
              className={styles.navButton}
              onClick={() => changeMonth(-1)}
            >
             <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#888"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              type="button"
              disabled={
                maxDate.getFullYear() === year && maxDate.getMonth() === month
              }
              className={styles.navButton}
              onClick={() => changeMonth(+1)}
            >
               <svg
                width={24}
                height={24}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#888"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>

              
            </button>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.days}>
            {days?.map((day:string) => (
              <div className={styles.day} key={day}>
                {day.substring(0, 3)}
              </div>
            ))}
          </div>
          <div className={styles.calendar}>
            {calendar.map((day:any, index:number) => (
              <div
                className={[
                  styles.date,
                  day.getMonth() === month ? styles.inside : styles.outside,
                ].join(" ")}
                key={index}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor:
                      selectedDate?.getTime() === day.getTime()
                        ? colorScheme
                        : "#fff",
                    color:
                      selectedDate?.getTime() === day.getTime()
                        ? "#fff"
                        : "#000",
                  }}
                  onClick={() => selectDate(day)}
                  disabled={
                    day.getTime() < minDate.getTime() ||
                    day.getTime() > maxDate.getTime()
                  }
                  className={styles.button}
                >
                  {day.getDate()}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footer}>
          <button
            type="button"
            disabled={!selectedDate}
            onClick={handleClear}
            style={{ color: colorScheme }}
          >
            {clearText}
          </button>
          <button
            type="button"
            style={{ color: colorScheme }}
            onClick={handleClose}
          >
            {closeText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default React.memo(DatePicker);

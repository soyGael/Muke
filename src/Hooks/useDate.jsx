import { useState, useEffect } from "react";

const truncateWord = (word, length) => {
  if (word.length > length) {
    return word.substring(0, length);
  }
  return word;
};

const useDate = () => {
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
    dayOfWeek: "",
  });

  useEffect(() => {
    let dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let months = [
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

    const today = new Date();
    const day = today.getDay();
    const year = today.getFullYear();
    let month = months[today.getMonth()];

    month = truncateWord(month, 3);

    dayOfWeek = dayOfWeek[today.getUTCDay() - 1];

    setDate({ day, month, year, dayOfWeek });
  }, []);

  return date;
};

export default useDate;

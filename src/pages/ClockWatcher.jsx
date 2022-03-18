import React, { useState, useEffect } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";

export default function ClockWatcher() {
  //declaring state variable for the time
  const [time, setTime] = useState({});

  //declaring state variable for the time
  const [stop, setStop] = useState(false);
  const [start, setStart] = useState(true);

  //declaring a new date which will be formated
  const date = new Date();

  const day = new Intl.DateTimeFormat(navigator.language, {
    timeZoneName: "long",
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  //formatting to view day and time with seconds
  const now = new Intl.DateTimeFormat(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour24: true,
  }).format(date);

  const convertToJS = (json) => JSON.parse(JSON.stringify(json));

  //calling the function as an effect after the page renders, repeats each time the clock is started and time changes
  useEffect(() => {
    getTime();
  }, [start, time]);

  //requesting current time, using a free API, and setting the data to a state variable
  function getTime() {
    if (start === true) {
      axios
        .get(
          "https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/London"
        )
        .then((response) => {
          //response.data is a JSON object
          var resData = convertToJS(response.data);
          //value of dateTime looks like is "2022-02-11T11:40:34.5963202"
          setTime(resData.milliSeconds);
        });
    } else return;
  }

  return (
    <Paper elevation={16} className="mainbox">
      {/*Current time in London, UK */}
      <div className="clock">{now}</div>
      {/*Current date and time zone*/}
      <div className="small-text">{day}</div>
      {/*Conditional rendering to alternate between buttons*/}
      <div>
        {" "}
        {start && (
          <IconButton
            type="button"
            size="large"
            onClick={() => {
              setStart(false);
              setStop(true);
            }}
          >
            <StopCircleOutlinedIcon color="error" fontSize="inherit" />
          </IconButton>
        )}
        {stop && (
          <IconButton
            type="button"
            size="large"
            onClick={() => {
              setStart(true);
              setStop(false);
            }}
          >
            <PlayCircleFilledWhiteOutlinedIcon
              color="success"
              fontSize="inherit"
            />
          </IconButton>
        )}
      </div>
    </Paper>
  );
}

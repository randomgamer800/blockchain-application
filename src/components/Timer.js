//this file handles the countdown timer during the exam
import { Typography } from '@mui/material'
import {React, useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

function Timer() {
    const [remainingtime, setremainingTime] = useState(35); // Set the initial time in seconds (cannot use hours:minutes notation due to error)
    const navigate = useNavigate()

    // Decrease the time by 1 every second
    useEffect(() => {
      const timer = setInterval(() => {
        if (remainingtime > 0) {
            setremainingTime(remainingtime - 1);
        }
      }, 1000); //setInterval requires this 1000 as it will allow this function to be exectued every 1000ms(1second) https://developer.mozilla.org/en-US/docs/Web/API/setInterval
      return () => clearTimeout(timer); //need clear timeout as without it, timer will break
    }, [remainingtime]);

        // check time = 0 and if is, then move back to home page
        useEffect(() => {
          const timer = setInterval(() => {
            if (remainingtime === 0) {
              navigate("/")
            }
          }, 1000); //setInterval requires this 1000 as it will allow this function to be exectued every 1000ms(1second) https://developer.mozilla.org/en-US/docs/Web/API/setInterval
          return () => clearTimeout(timer); //need clear timeout as without it, timer will break
        }, [remainingtime]);
  
    return (
      <div>
          <Typography paddingTop='80px' variant="h3">Time Left : {remainingtime} seconds </Typography>
          { /*render conditionally*/
            remainingtime <= 30 && <Typography paddingTop='80px' paddingLeft='50px' paddingRight='50px' variant="h5">
              30 seconds left! You will be redirected to the home page at the end of the exam. Note that all your answers will be saved.
            </Typography>
          }
      </div>
    );
  }
  
  export default Timer;
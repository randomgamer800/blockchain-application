//this file handles the countdown timer during the exam
import {Typography} from '@mui/material'
import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Timer() {
    const [remainingtime, setremainingTime] = useState(120); // Set the initial time in seconds (cannot use hours:minutes notation due to error in useState)
    const navigate = useNavigate() //using react-router-dom for navigation(https://reactrouter.com/en/main/hooks/use-navigate), other methods found seem to be not working 

    // Decrease the time by 1 every second and handles case when time is up, link shows more advanced timer functions https://stackoverflow.com/questions/40885923/countdown-timer-in-react
    useEffect(() => {
      const timer = setInterval(() => {
        if (remainingtime > 0) {
          setremainingTime(remainingtime - 1);
        } //decreases time per second
        if (remainingtime === 0) {
          navigate("/") //direct users away from page when time is up
        }
      }, 1000); //setInterval requires this 1000 as it will allow this function to be exectued every 1000ms(1second) https://developer.mozilla.org/en-US/docs/Web/API/setInterval
      return () => clearTimeout(timer); //need clear timeout as without it, timer will break after a few seconds
    }, [remainingtime]);

    return (
      <div>
        <Typography paddingTop='80px' variant="h3">Time Left : {remainingtime} seconds </Typography> {/*timer to always be displayed at top of exam page*/}
        
        { /*render conditionally*/
          remainingtime <= 30 && <Typography paddingTop='80px' paddingLeft='50px' paddingRight='50px' variant="h5">
            30 seconds left! You will be redirected to the home page at the end of the exam. Please click the 'upload to Blockchain' button now to save your answers.
            </Typography>
        }
      </div>
    );
  }
  
  export default Timer;
import React, { useState } from 'react';
import "./style.css";

let adjustInterval = undefined;

const StartStopWatch = () => {

    const [watch, setWatch] = useState(0);
    const [started, setStarted] = useState(false);

    const startWatch = () =>{
        adjustInterval = setInterval(() =>{
         setWatch((x)=> x+1)
        }, 1000)
        setStarted(true);
    }

    const stopWatch = () =>{
      clearInterval(adjustInterval)
        setStarted(false);
    }

    const ResetWatch = () =>{
        setWatch(0)
        clearInterval(adjustInterval)
        setStarted(false);
    }
    
  return (
    <>
    <div className='text-center'>
     <h1 className='mb-2'> Start Stop Watch</h1>
     </div>
      <div className='text-center'>
        <h3 className='mb-2'>{watch}</h3>
        <div className='user-control'>
        <button className='start' disabled={started} onClick={startWatch}>Start</button>
        <button className='stop' onClick={stopWatch}>Stop</button>
        <button className='reset' onClick={ResetWatch}>Reset</button>
        </div>
      </div>       
    </>
  )
}

export default StartStopWatch;
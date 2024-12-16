"use client"
import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const renderTime = ({ remainingTime }:{remainingTime: number}) => {

  return (
    <div className="text-center">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

export const Countdown = (props:{time: number, reset: number, fun: () => void}) => {
  return (
    <CountdownCircleTimer
    size={52}
    strokeWidth={4}
    key={props.reset}
    isPlaying
    duration={props.time}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[10, 6, 3, 0]}
    onComplete={props.fun}
  >
    {renderTime}
  </CountdownCircleTimer>
  )
}

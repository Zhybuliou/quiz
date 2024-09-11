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

export const Countdown = () => {
  return (
    <CountdownCircleTimer
    size={52}
    strokeWidth={4}
    isPlaying
    duration={20}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[10, 6, 3, 0]}
    onComplete={() => ({ shouldRepeat: true, delay: 1 })}
  >
    {renderTime}
  </CountdownCircleTimer>
  )
}

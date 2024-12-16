import React from 'react'

const Score = (props: {points: number}) => {
  return (
    <p>Score: {props.points}</p>
  )
}

export default Score
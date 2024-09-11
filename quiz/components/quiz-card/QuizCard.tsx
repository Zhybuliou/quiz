import React from 'react'
import ProgressBar from './ProgressBar'
import Category from './Category'
import Score from './Score'
import { Countdown } from './Countdown'

const QuizCard = () => {
  return (
    <div className='w-[800px] h-[600px] mx-auto bg-secondary mt-8 rounded-lg shadow-lg'>
        <ProgressBar />
      <div className='flex px-5 justify-between'>
        <div>
          <Category />
          <Score />
        </div>
         <Countdown />
      </div>
    </div>
  )
}

export default QuizCard
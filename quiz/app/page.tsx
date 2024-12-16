import QuizCard from '@/components/quiz-card/QuizCard'
import React from 'react'

const Page = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-purple-500 to-pink-500 pt-5'>
      <p className='text-white text-center text-3xl'>START GAME</p>
      <QuizCard />
    </div>
  )
}

export default Page
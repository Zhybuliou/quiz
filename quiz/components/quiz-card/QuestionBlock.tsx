import React from 'react'
import { Button } from '../ui/button'

const QuestionBlock = () => {
  return (
    <div className='p-5 text-center'>
      <h2 className='text-2xl px-4'>Q2. How many slots with odd numbers dose a standard roulette wheel have?</h2>
      <div className='flex flex-col gap-3 mt-3'>
        <Button> <p className='text-lg'>A.16</p> </Button>
        <Button className='bg-lime-700'> <p className='text-lg'>B.18</p> </Button>
        <Button> <p className='text-lg'>C.14</p> </Button>
        <Button> <p className='text-lg'>D.26</p> </Button>
      </div>
      <div className='flex justify-between mt-10'>
       <Button className='bg-sky-600'> <p className='text-lg'>Next Question</p> </Button>
       <Button className='bg-red-700'> <p className='text-lg'>Quit Quiz</p> </Button>
      </div>
    </div>
  )
}

export default QuestionBlock
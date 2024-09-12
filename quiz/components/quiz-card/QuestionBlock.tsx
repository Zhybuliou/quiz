"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { data } from '@/data/fiverr-questions'
import generateUniqueRandomArray from '@/lib/random-qustions'
import { Data } from '@/types/types'
import ProgressBar from './ProgressBar'
import Category from './Category'
import Score from './Score'
import { Countdown } from './Countdown'

const QuestionBlock = () => {
  const [allQuestions, setAllQuestions] = useState<Data | null>(null)
  const [questions, setQuestions] = useState<number[]>([])
  const [numQ, setNumQ] = useState(0)
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const showQ = 10;

  useEffect(() => {
    const randomQuestions = generateUniqueRandomArray(showQ, data.length) as number[]
    setAllQuestions(data)
    setQuestions(randomQuestions)
    setNumQ(0)
  },[allQuestions])

  if(!allQuestions) return (<h2>Loading...</h2>)
   if(!allQuestions[questions[numQ]])return (
   <div className='h-[100%] flex pt-5 flex-col'>
    <h2 className='text-2xl text-center'>Good Game</h2> 
    <Button onClick={() => setAllQuestions(null)} className='mt-5 w-[150px] text-xl mx-auto'>Restart</Button>
  </div>)
  const {question, A, B, C, D, answer } = allQuestions[questions[numQ]]
  const buttonAnswers = [A, B, C, D,]

  const correctAnswer = allQuestions[questions[numQ]][answer as keyof object]

  const handleClick = (buttonIndex: string) => {
      setSelectedButton(buttonIndex);
  };

  const handleClickNextQ = () => {
    setNumQ((prev) => prev + 1)
    setSelectedButton(null);
  }

  return (
    <>
    <ProgressBar questions={showQ} num={numQ + 1} />
    <div className='flex px-5 justify-between'>
      <div>
        <Category />
        <Score />
      </div>
       <Countdown />
    </div>
    <div className='p-5 text-center'>
      <h2 className='text-2xl px-4'>{question}</h2>
      <div className='flex flex-col gap-3 mt-3'>
        {
        buttonAnswers.map((variant, index) => 
          <Button key={index}
          disabled={!!selectedButton}
          style={{
            opacity: 1,
            backgroundColor:
              selectedButton === null
                ? '' : variant === correctAnswer
                ? 'green': selectedButton === variant
                ? 'red'
                : '',
          }}
          onClick={() => handleClick(variant)}
          > 
            <p className='text-lg'>{variant}</p> 
          </Button>
        )}
      </div>
      <div className='flex justify-between mt-10'>
       <Button onClick={() => handleClickNextQ()} className='bg-sky-600'> <p className='text-lg'>Next Question</p> </Button>
       <Button className='bg-red-700' onClick={() => {
        setAllQuestions(null) 
        setSelectedButton(null)
        }}> <p className='text-lg'>Quit Quiz</p> </Button>
      </div>
    </div>
    </>
  )
}

export default QuestionBlock

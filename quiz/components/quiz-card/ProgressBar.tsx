import React from 'react'
import { Progress } from "@/components/ui/progress"

const ProgressBar = (props: {num: number, questions: number}) => {
  return (
    <div className='p-5'>
        <Progress value={props.num / props.questions * 100} className='bg-slate-400'/>
    </div>
  )
}

export default ProgressBar
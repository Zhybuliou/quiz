import React from 'react'
import { Progress } from "@/components/ui/progress"

const ProgressBar = () => {
  return (
    <div className='p-5'>
        <Progress value={33} className='bg-slate-400'/>
    </div>
  )
}

export default ProgressBar
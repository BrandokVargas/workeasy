import React from 'react'
import Tasks from './Tasks'
import ProcessTask from './ProcessTask'
import DoneTask from './DoneTask'

const ContainerTask = () => {
  return (
    <section className='flex justify-between items-center bg-slate-400 w-[90%] h-[900px]'>
        <Tasks/>
        <ProcessTask/>
        <DoneTask/>
    </section>
  )
}

export default ContainerTask
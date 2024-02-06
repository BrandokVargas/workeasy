import React from 'react'
import Tasks from './Tasks'
import ProcessTask from './ProcessTask'
import DoneTask from './DoneTask'

const ContainerTask = () => {
  return (
    <section className='flex justify-center items-center bg-red-500 w-[350px] h-[450px]'>
        <Tasks/>
        <ProcessTask/>
        <DoneTask/>
    </section>
  )
}

export default ContainerTask
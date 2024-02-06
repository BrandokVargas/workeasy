import React from 'react'
import Tasks from './Tasks'
import ProcessTask from './ProcessTask'
import DoneTask from './DoneTask'

const ContainerTask = () => {
  return (
    <section>
        <Tasks/>
        <ProcessTask/>
        <DoneTask/>
    </section>
  )
}

export default ContainerTask
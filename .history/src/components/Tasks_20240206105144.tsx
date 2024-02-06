import { Task } from "@/types"
import { useState } from "react";

const TaskState : Task[] = [
  {
    id: 1,  
    nameTask: 'Prueba 1'
  },
  {
    id: 2,
    nameTask: 'Prueba 2'
  },
  {
    id: 3,
    nameTask: 'Prueba 3'
  },
  {
    id: 4,
    nameTask: 'Prueba 4'
  },
  {
    id: 5,
    nameTask: 'Prueba 5'
  }
];


const Tasks = () => {

  const [task,setTask] = useState(TaskState);



  return (
    <article className='w-full bg-slate-200 border-t-8 border-t-red-300  h-full rounded-xl text-gray-800'>
      <h1 className="text-center my-5 text-2xl">List Task</h1>
    </article>
  )
}

export default Tasks
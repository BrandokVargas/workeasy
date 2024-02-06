'use client'
import { Task } from "@/types";
import { useState } from "react";

const Tasks = ({tasksList}:{tasksList:Task[]}) => {

  const [tasks,setTask] = useState(tasksList);

  return (
    <article className='w-full bg-slate-200 border-t-8 border-t-red-300  h-full rounded-xl text-gray-800'>
      <h1 className="text-center my-5 text-2xl">List Task</h1>
      <section>
          {tasks.map(task => (
            <h2>{task.nameTask}</h2>
          ))
          }
      </section>
    </article>
  )
}

export default Tasks
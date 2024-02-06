"use client";
import { Task } from "@/types";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext,verticalListSortingStrategy } from "@dnd-kit/sortable";
import ListTasks from "./TaskList/ListTasks";

const Tasks = ({ tasksList }: { tasksList: Task[] }) => {
  const [tasks, setTask] = useState(tasksList);
 
  return (
    <article className="w-full bg-slate-200 border-t-8 border-t-red-300  h-full rounded-xl text-gray-800">
      <h1 className="text-center my-5 text-2xl">List Task</h1>
      <DndContext collisionDetection={closestCenter}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <ListTasks tasksListProps={task}/>
            
          ))}
        </SortableContext>
      </DndContext>
    </article>
  );
};

export default Tasks;

"use client";
import { Task } from "@/types";
import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext,verticalListSortingStrategy } from "@dnd-kit/sortable";

const Tasks = ({ tasksList }: { tasksList: Task[] }) => {
  const [tasks, setTask] = useState(tasksList);

  return (
    <article className="w-full bg-slate-200 border-t-8 border-t-red-300  h-full rounded-xl text-gray-800">
      <h1 className="text-center my-5 text-2xl">List Task</h1>
      <DndContext collisionDetection={closestCenter}>
        <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <div className="bg-red-500 w-full my-3 mx-2 p-5 rounded-lg ">
              <h2>{task.nameTask}</h2>
            </div>
          ))}
        </SortableContext>
      </DndContext>
    </article>
  );
};

export default Tasks;

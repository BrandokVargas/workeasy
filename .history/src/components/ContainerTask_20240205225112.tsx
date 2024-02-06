import React from "react";
import Tasks from "./Tasks";
import ProcessTask from "./ProcessTask";
import DoneTask from "./DoneTask";

const ContainerTask = () => {
  return (
    <section className="flex justify-evenly items-center bg-slate-400 w-full h-[900px]">
        <Tasks />
        <ProcessTask />
        <DoneTask />
      
    </section>
  );
};

export default ContainerTask;

import React from "react";
import Tasks from "./Tasks";
import ProcessTask from "./ProcessTask";
import DoneTask from "./DoneTask";

const ContainerTask = () => {
  return (
    <section className="flex justify-center items-center bg-slate-400 w-[90%] h-[900px]">
      <div className="bg-amber-300">
        <Tasks />
        <ProcessTask />
        <DoneTask />
      </div>
    </section>
  );
};

export default ContainerTask;

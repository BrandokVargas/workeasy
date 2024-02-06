import React from "react";
import Tasks from "./Tasks";
import ProcessTask from "./ProcessTask";
import DoneTask from "./DoneTask";

const ContainerTask = () => {
  return (
    <section className=" bg-slate-400 w-[90%] h-[900px]">
      <div className="bg-amber-300 w-full h-full flex justify-center items-center">
        <Tasks />
        <ProcessTask />
        <DoneTask />
      </div>
    </section>
  );
};

export default ContainerTask;

import React from "react";
import Tasks from "./Tasks";
import ProcessTask from "./ProcessTask";
import DoneTask from "./DoneTask";

const ContainerTask = () => {
  //flex justify-center items-center
  return (
    <section className="flex justify-center items-center w-[90%] h-[900px] rounded-xl">
      <Tasks />
      <ProcessTask />
      <DoneTask />
    </section>
  );
};

export default ContainerTask;

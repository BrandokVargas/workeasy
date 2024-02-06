import React from "react";
import Tasks from "./Tasks";
import ProcessTask from "./ProcessTask";
import DoneTask from "./DoneTask";
import api
 from "@/lib/api";
const ContainerTask = async () => {
  const tasks = await api.taskList();

  return (
    <section className="flex justify-center items-center w-[90%] h-[900px] rounded-xl gap-2">
      <Tasks tasksList={tasks}/>
      <ProcessTask />
      <DoneTask />
    </section>
  );
};

export default ContainerTask;

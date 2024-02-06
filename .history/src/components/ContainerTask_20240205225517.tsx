import React from "react";
import Tasks from "./Tasks";
import ProcessTask from "./ProcessTask";
import DoneTask from "./DoneTask";

const ContainerTask = () => {
 
        //flex justify-center items-center
  return (
    <section className="flex justify-center bg-slate-400 w-[90%] h-[900px] p-0 m-0">

        <div className="bg-blue-400 h-full w-[30%]">
          
        </div>
      
        <div className="bg-blue-400 h-full w-[30%]">
          
          </div>
          <div className="bg-blue-400 h-full w-[30%]">
          
          </div>
    </section>
  );
};

export default ContainerTask;
{/* <Tasks />
<ProcessTask />
<DoneTask /> */}
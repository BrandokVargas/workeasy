'use client'
import { useState } from "react";
import ColumnsContainerSv from "../ColumServerComponent/ColumnsContainerSv";

interface StateColumn {
  text: boolean;
}

const ContainerWork =  () => {
  const [centerText, setCenterText] = useState<StateColumn["text"]>(false);

  const handleClick = () => {
    setCenterText(!centerText)
    console.log(centerText)
  }

  

  return (
    <section className=" mx-auto ">
      <div className="flex gap-5 items-center">

        <button className="flex gap-3 w-[200px] bg-gray-700 rounded-lg cursor-pointer justify-center items-center hover:bg-gray-600 transition-all  my-4 p-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="text-xl">Add Task </span>
        </button>

        <section className="flex gap-4">

          <button className="cursor-pointer" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>

        </section>
        
      </div>


      <ColumnsContainerSv />
      
    </section>
  );
};

export default ContainerWork;

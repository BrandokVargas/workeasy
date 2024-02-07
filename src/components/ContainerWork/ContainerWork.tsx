'use client'

import useTextStore from "@/store/textStore";

const ContainerWork = () => {
  const {
    textStart,
    textCenter,
    textEnd,
    setStartTextStore,
    setCenterTextStore,
    setEndTextStore,
  } = useTextStore();

  const handleClickStart = () => {
    setStartTextStore(true);
    console.log(textStart);
  };

  const handleClickCenter = () => {
    setCenterTextStore(true);
  };

  const handleClickEnd = () => {
    setEndTextStore(true);
  };

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
        <h2 className="text-white">{textStart ? "TRUE" : "FALSE"}</h2>
        <section className="flex gap-4">
          <button className="cursor-pointer" onClick={handleClickStart}>
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

          <button className="cursor-pointer" onClick={handleClickCenter}>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <button className="cursor-pointer" onClick={handleClickEnd}>
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
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </section>
      </div>

    </section>
  );
};

export default ContainerWork;

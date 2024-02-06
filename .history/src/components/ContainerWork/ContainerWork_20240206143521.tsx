import api from "@/lib/api";
import ColumnContainer from "../ContainerColum/ColumnContainer";

const ContainerWork = async () => {
  const columns = await api.columnsList();

  return (
    <section className=" mx-auto flex gap-2">
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
      {columns.map((column) => (
        <ColumnContainer columns={column} />
      ))}
    </section>
  );
};

export default ContainerWork;

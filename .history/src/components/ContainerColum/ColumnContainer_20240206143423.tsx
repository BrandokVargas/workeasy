import { Columns } from "@/types";

interface PropsColumn {
  columns: Columns;
}

const ColumnContainer = ({ columns }: PropsColumn) => {
  return (
    <div className="bg-slate-400 w-[350px] h-[500px] max-h-[500px] rounded-lg flex flex-col">
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

      {columns.nameColum}
    </div>
  );
};

export default ColumnContainer;

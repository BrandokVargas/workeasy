import { Columns } from "@/types";

interface PropsColumn {
  columns: Columns;
}

const ColumnContainer = ({ columns }: PropsColumn) => {
  return (
    <div className="bg-slate-400 w-[350px] h-[500px] max-h-[500px] rounded-lg flex flex-col">
      <h2 className="p-4 bg-slate-900 rounded-lg border-3 border-slate-800">{columns.nameColum}</h2>
    </div>
  );
};

export default ColumnContainer;
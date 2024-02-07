'use client'
import { Columns } from "@/types";
import useTextStore from "@/store/textStore";

interface PropsColumn {
  column: Columns[];
}

const ColumnContainer = ({ column }: PropsColumn) => {
  const { textStart, textCenter, textEnd } = useTextStore();

  const applyConditionalStyles = () => {
    let styleText = "";
    if (textStart) {
      styleText += "text-start";
    }
    if (textCenter) {
      styleText += "text-center ";
    }
    return styleText;
  };

  return (
    <>
      {column.map((col) => (
        <div key={col.id} className="bg-slate-400 w-[350px] h-[500px] max-h-[500px] rounded-lg flex flex-col">
          <h2
            className={`p-4 bg-slate-900 rounded-lg  border-slate-400 border-4`}
          >{col.nameColum}</h2>
        </div>
      ))}
    </>
  );
};

export default ColumnContainer;

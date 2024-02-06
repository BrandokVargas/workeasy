"use client";
import { Columns } from "@/types";
import { useState } from "react";

interface PropsColumn {
  columns: Columns;
}

interface StateColumn {
  text: boolean;
}

const ColumnContainer = ({ columns }: PropsColumn) => {
  const [centerText, setCenterText] = useState<StateColumn["text"]>(false);

  return (
    <div className="bg-slate-400 w-[350px] h-[500px] max-h-[500px] rounded-lg flex flex-col">
      <h2 className="p-4 bg-slate-900 rounded-lg  border-slate-400 border-4">
        {columns.nameColum}
      </h2>
    </div>
  );
};

export default ColumnContainer;

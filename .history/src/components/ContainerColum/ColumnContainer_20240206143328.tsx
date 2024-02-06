import { Columns } from "@/types"


interface PropsColumn{
  columns: Columns
}


const ColumnContainer = ({columns}:PropsColumn) => {
  return (
    <div className="bg-slate-400 w-[350px] h-[500px] max-h-[500px] rounded-lg flex flex-col">{columns.nameColum}</div>
  )
}

export default ColumnContainer
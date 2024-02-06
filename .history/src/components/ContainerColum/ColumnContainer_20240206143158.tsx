import { Columns } from "@/types"


interface PropsColumn{
  columns: Columns
}


const ColumnContainer = ({columns}:PropsColumn) => {
  return (
    <div className="bg-slate-400 w-[250px]">{columns.nameColum}</div>
  )
}

export default ColumnContainer
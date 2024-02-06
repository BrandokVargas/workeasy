import { Columns } from "@/types"


interface PropsColumn{
  columns: Columns
}


const ColumnContainer = ({columns}:PropsColumn) => {
  return (
    <div>{columns.nameColum}</div>
  )
}

export default ColumnContainer
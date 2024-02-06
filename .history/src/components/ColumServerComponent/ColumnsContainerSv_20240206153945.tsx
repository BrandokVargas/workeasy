import api from "@/lib/api";
import ColumnContainer from "../ContainerColum/ColumnContainer";

const ColumnsContainerSv = async () => {
  const columns = await api.columnsList();
  return (
    <div className="flex gap-2">
      {columns.map((column) => (
        <ColumnContainer columns={column} />
      ))}
    </div>
  );
};

export default ColumnsContainerSv;

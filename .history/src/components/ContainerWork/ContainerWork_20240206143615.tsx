import api from "@/lib/api";
import ColumnContainer from "../ContainerColum/ColumnContainer";

const ContainerWork = async () => {
  const columns = await api.columnsList();

  return (
    <section className=" mx-auto flex gap-2">
      {columns.map((column) => (
        <ColumnContainer columns={column} />
      ))}
    </section>
  );
};

export default ContainerWork;

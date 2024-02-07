import api from "@/lib/api";
import ContainerWork from "@/components/ContainerWork/ContainerWork";
import ColumnContainer from "@/components/ContainerColum/ColumnContainer";

export default async function Home() {
  const columns = await api.columnsList();

  return (
    <main className="flex items-center min-h-screen justify-center flex-col">
      <ContainerWork />
      <div className="flex gap-2">
        <ColumnContainer column={columns} />
      </div>
    </main>
  );
}

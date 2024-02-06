import api from "@/lib/api"




const ContainerWork =  async () => {

  const columns = await api.columnsList();

  return (
    <section className="bg-red-500 mx-auto flex gap-2">

      {columns.map(column => (
        <div>
          {column.nameColum}
        </div>
      ))
      }
    </section>
  )
}

export default ContainerWork
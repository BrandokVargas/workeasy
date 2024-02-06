import api from "@/lib/api"

const TaskComponent = async () => {
  const tasks = await api.taskList();

  return (
    <div>
      sad
    </div>
  )
}

export default TaskComponent
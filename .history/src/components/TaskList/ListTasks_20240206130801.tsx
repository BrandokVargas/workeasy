
import { Task } from '@/types'

const ListTasks = ({id,nameTask}:Task) => {
  return (
    <div className='bg-red-500 w-[90%] mx-auto my-3  p-5 rounded-lg'>
        <h2>{nameTask}</h2>
    </div>
  )
}

export default ListTasks

import { Task } from '@/types'

interface ListTaksProps {
  id: number;
  nameTask: string;
}


const ListTasks = ({id,nameTask}:ListTaksProps) => {
  return (
    <div className='bg-red-500 w-[90%] mx-auto my-3  p-5 rounded-lg'>
        <h2>{nameTask}</h2>
    </div>
  )
}

export default ListTasks
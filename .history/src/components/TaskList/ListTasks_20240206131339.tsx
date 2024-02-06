
import { Task } from '@/types'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

const ListTasks = ({id,nameTask}:Task) => {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } =useSortable({
    id: id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }


  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners} 
      className='bg-red-500 w-[90%] mx-auto my-3  p-5 rounded-lg'>
        <h2>{nameTask}</h2>
    </div>
  )
}

export default ListTasks
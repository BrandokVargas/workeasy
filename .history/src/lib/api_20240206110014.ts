import { Task } from "@/types";

const listTasks : Task[] = [
  {
    id: 1,  
    nameTask: 'Prueba 1'
  },
  {
    id: 2,
    nameTask: 'Prueba 2'
  },
  {
    id: 3,
    nameTask: 'Prueba 3'
  },
  {
    id: 4,
    nameTask: 'Prueba 4'
  },
  {
    id: 5,
    nameTask: 'Prueba 5'
  }
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  taskList: async (): Promise<Task[]> => {
    await sleep(750);
    return listTasks;
  },

};

export default api;
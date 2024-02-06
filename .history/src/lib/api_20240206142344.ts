import { Columns } from "@/types";

const columnList : Columns[] = [
  {
    id: 1,  
    nameColum: 'List of tasks'
  },
  {
    id: 2,
    nameColum: 'In progress'
  },
  {
    id: 3,
    nameColum: 'Task Done'
  },
]

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  taskList: async (): Promise<Columns[]> => {
    await sleep(750);
    return columnList;
  },

};

export default api;
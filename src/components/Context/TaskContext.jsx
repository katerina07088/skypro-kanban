import { createContext, useState } from 'react';

export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
   const [tasks, setTasks] = useState([]);
   const [task, setTask] = useState();

     
  return (
    <TaskContext.Provider value={{ tasks, setTasks, task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
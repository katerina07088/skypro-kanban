import { createContext, useEffect, useState } from 'react';
import { useTaskContext } from './useTaskContext';


export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
   const [tasks, setTasks] = useState(useTaskContext()); 
   
   
 useEffect(() => {
   const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
   setTasks(storedTasks);
}, []);

useEffect(() => {
   localStorage.setItem('tasks', JSON.stringify(tasks));
 }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
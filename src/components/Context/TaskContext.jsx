import { createContext, useEffect, useState } from 'react';
import { useTaskContext } from './useTaskContext';
import { UseDate } from '../hooks/useDate';



export const TaskContext = createContext(null);

export const TaskProvider = ({ children }) => {
   const [tasks, setTasks] = useState(useTaskContext()); 
   const {selected, setSelected, selectedDate} = UseDate();
   
   
 useEffect(() => {
   const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
   setTasks(storedTasks);
}, []);

useEffect(() => {
   localStorage.setItem('tasks', JSON.stringify(tasks));
 }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, selected, setSelected, selectedDate }}>
      {children}
    </TaskContext.Provider>
  );
};
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

export function useTaskContext() {
  const task = useContext(TaskContext);
  return task;
}

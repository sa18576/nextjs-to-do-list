"use client"
import { useState } from 'react'
import AddOrEditTask from './comps/add-or-edit-task';
import ToDoListTable from './comps/to-do-list-table';
import { todos } from './data/tasks';
import { TeamMember } from './data/team-members';

export type TodoListProps = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  team: TeamMember[];
}

const ToDoList = () => {
  const [todoList, setTodoList] = useState<TodoListProps[]>(todos);

  const handleAddOrEditTask = (task: TodoListProps) => {
    console.log("handleAddOrEditTask has been called in parent component");
    console.log(task)
    if (task.id == 0) {
      const newTask: TodoListProps = {
        ...task,
        id: todoList.length + 1
      }
      setTodoList((prev) => [...prev, newTask])
    }
    else{
      const existingTask = todoList.find(t => t.id === task.id)
      if(existingTask){
        const updatedTask : TodoListProps = {...existingTask, title: task.title, description: task.description}
        const updatedTodoList = todoList.map(t => t.id === task.id ? updatedTask : t)
        setTodoList(updatedTodoList)
      }
    }
  }

  const handleDeleteTask = (taskId: number) => {
    const ifTaskExists = todoList.find(t => t.id === taskId);

    if(!ifTaskExists) return;

    const updatedTodoList = todoList.filter(t => t.id !== taskId);
    setTodoList(updatedTodoList)
  }

  const handleCompleteTask = (taskId: number) => {
    const ifTaskExists = todoList.find(t => t.id === taskId);

    console.log('this task is completed: ',ifTaskExists)
    if(!ifTaskExists) return;

    const updatedTodoList = todoList.map(t=> t.id === taskId ? {...t, completed: !t.completed} : t);
    console.log('updated todo list: ',updatedTodoList)
    setTodoList(updatedTodoList);
  }


  return (
    <div>
      <div><AddOrEditTask taskType='add' onAddOrEditTask={handleAddOrEditTask} /></div>
  
      <div>
        <ToDoListTable onTaskComplete={handleCompleteTask} todoList={todoList} onAddOrEditTask={handleAddOrEditTask} onDeleteTask={handleDeleteTask} />
      </div>
  
    </div>
  )
}



export default ToDoList
import React, { FC,ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';

import { ITask } from './Interfaces'


const App: FC = () => {
  // This is a functional component in React Typescript

  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = (): void => {

    const newTask = {taskName:task, deadline:deadline}
    setTodoList([...todoList, newTask])
      console.log('todolist',todoList)
    setTask("")
    setDeadline(0)

  }


  return (

  <div>
    <div className="header">
      <div className="inputContainer">
        <input type="text" placeholder="Task..." name = 'task' value = {task} onChange = {(e) => handleChange(e)} />
        <input type="number" name = 'deadline' placeholder="Deadline (in Days)..." value = {deadline} onChange = {(e) => handleChange(e)} />
      </div>

      <button onClick = {addTask}>Add Task</button>
    </div>
    <div className="todoList">
      {todoList.map((task: ITask, key: number) => {
        return <TodoTask key = {key} task = {task} completeTask = {completeTask} />
      })}
    </div>
  </div>
  )

  };
export default App;

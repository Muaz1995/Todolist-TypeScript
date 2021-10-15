import React, { FC } from 'react'
import { ITask } from '../Interfaces'


export type Props =  {
    task:ITask;
    completeTask(taskNameToDelete: string): void;

}

const handleDelete = (): void => {
    console.log('deleting task')
}

const TodoTask: FC<Props> = ({task,completeTask }) => {
    return (
        <div className = 'task'>
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick = {() => completeTask(task.taskName)}>X</button>
        </div>
    )
}

export default TodoTask

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import '../../Styles/global.css'
import './app.css'

import { Button } from '../Button/Button'
import { Task } from '../Task/Task'

export function App() {
  const [ nameTask, setNameTask ] = useState('')
  const [ arrayTasks, setArrayTasks ] = useState([])

  // Fuction que chama hook para alterar a variavel task
  const handleAddTask = (e => {
    setNameTask(e.target.value)
  })

  const onClick = e => {
    const newTask = {
      id: uuidv4(),
      title: nameTask,
      completed: false
    }
    // Setando nova task no array state, que armazena tasks
    setArrayTasks(prevState => [...prevState, newTask])
    setNameTask('')
  } 

  // Se clicou na task, enviar todo array e altera somente o completed da mesma
  // Caso contrario, não altera nada em nenhuma task
  const handleCompletedTask = (keyId) => {
    const newArrayTasks = arrayTasks.map( taskMap => {
      if (taskMap.id === keyId) {
        return {...taskMap, completed: !taskMap.completed}
      }
      return taskMap
    }) 
    setArrayTasks(newArrayTasks)
  }

  return (
    <div className='container'>
      <h1>Minhas tarefas</h1>

      <div className="input-tasks">
        <input
          type="text"
          value={nameTask}
          placeholder='Digite a tarefa'
          onChange={handleAddTask}
        />
        <Button
          onClick={onClick}> Adicionar
        </Button>
      </div>

      <div className="tasks-area">
        {
          arrayTasks.map( (task, index) => (
            <Task 
              key={index}
              id={task.id}
              title={task.title}
              completed={task.completed}
              handleCompletedTask={handleCompletedTask}
            />
          ))
        }
      </div>
    </div>
  )
}
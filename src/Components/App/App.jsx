import { useState } from 'react'
import '../../Styles/global.css'
import './app.css'

import { Button } from '../Button/Button'

export function App() {
  const [ task, setTask ] = useState()
  
  const handleAddTask = (e => {
    console.log(e.target.value)
  })

  return (
    <div className='container'>
      <input 
        type="text" 
        placeholder='Digite a tarefa'
        onChange={handleAddTask}  
      />
      <Button> Adicionar </Button>
    </div>
  )
}
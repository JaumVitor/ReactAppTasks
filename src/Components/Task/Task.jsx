import '../../Styles/global.css'
import './task.css'

export function Task ({ id, title, completed, handleCompletedTask }) {
  return (
    <div 
      className='container-task' 
      onClick={() => handleCompletedTask(id)}
      style={ completed ? { borderLeft: '6px solid chartreuse'} : {} }>
      <p>{title}</p>
      <p>{completed}</p>
    </div>
  )
}
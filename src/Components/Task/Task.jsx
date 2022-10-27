import { CgClose as Close} from "react-icons/cg";
import { AiOutlineInfoCircle as Info } from 'react-icons/ai'

import '../../Styles/global.css'
import '../../Styles/task.css'

export function Task ({ id, title, completed, handleCompletedTask, handleCloseTask }) {
  return (
    <div 
      className='container-task'  
      style={ completed ? { borderLeft: '6px solid chartreuse'} : {} }>

      <div className="title-task"
        onClick={() => handleCompletedTask(id)}>{title}
      </div>

      <div className="buttons-task">
        <Close onClick={() => handleCloseTask(id)}/>
        <Info />  
      </div>
    </div>
  )
}
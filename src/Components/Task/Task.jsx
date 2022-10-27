import { CgClose as Close} from "react-icons/cg";
import { AiOutlineInfoCircle as Info } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

import '../../Styles/task.css'

export function Task ({ id, title, completed, handleCloseTask, handleCompletedTask }) {
  const navigation = useNavigate()

  const handleInfoTaks = () => {
    navigation(`/details/${title}`)
  }

  return (
    <div 
      className='container-task'  
      style={ completed ? { borderLeft: '6px solid chartreuse'} : {} }>

      <div className="title-task"
        onClick={() => { handleCompletedTask(id) }}>{title}
      </div>

      <div className="buttons-task">
        <Close onClick={() => handleCloseTask(id)}/>
        <Info onClick={handleInfoTaks}/>  
      </div>
    </div>
  )
}
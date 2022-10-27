import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../Button/Button'

import '../../Styles/detailsTask.css'

export function DetailsTask(){
  const params = useParams()
  const navigation = useNavigate()

  return (
    <>
     <div className="container">
        <h1>Detalhes da tarefa</h1>
        <Button onClick={() => navigation(-1)} >
          Voltar
        </Button>

        <div className="content-text">
          <h2>{params.taskDetails}</h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem repudiandae temporibus praesentium adipisci. Officia rerum placeat inventore tempora nostrum fugiat distinctio, hic consequuntur ipsa facilis nisi consectetur, ex, repellat molestiae.</p>
        </div>
     </div>
    </>
  )
}
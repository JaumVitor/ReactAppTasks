import '../../Styles/global.css'
import './button.css'

export function Button({children}) {
  return (
    <button className='button'>
      {children}
    </button>
  )
}
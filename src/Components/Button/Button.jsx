import '../../Styles/global.css'
import '../../Styles/button.css'

export function Button({children, onClick}) {
  return (
    <button 
      className='button'
      onClick={onClick}> {children}
    </button>
  )
}
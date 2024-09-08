import { useState } from 'react'
import './App.css'
import Formulario from '../Component/Formulario/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
      <Formulario/>
      </div>
      
    </>
  )
}

export default App

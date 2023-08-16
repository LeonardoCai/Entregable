import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  const [doctores, setDoctores] = useState({
    nombre: '',
    apellido: '',
    especialidad: ''
})
const [show, setShow] = useState(false)
const [err, setErr] = useState(false)

const handleSubmit = (event) => {
    event.preventDefault()
     
    if(doctores.nombre.length > 3 && doctores.apellido.length >6 ) {     
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
        setShow(false)
    }

}
  return (
    <div className="App">
      <h2>Doctor</h2>
         <form onSubmit={handleSubmit} className="formulario">

            <label>Nombre</label>
            <input type="text" placeholder="Nombre" onChange={(e) => setDoctores({...doctores, nombre: e.target.value})}/>

            <label>Apellido</label>
            <input type="text" placeholder="Apellido" onChange={(e) => setDoctores({...doctores, apellido: e.target.value})}/>

            <label >Especialidad</label>
            <select  onChange={(e) => setDoctores({...doctores, especialidad: e.target.value})}>
                <option value="">Seleccione una Especialidad</option>
                <option value="Cirujano">Cirujano</option>
                <option value="Traumatologo">Traumatologo</option>
                <option value="Otorrino">Otorrino</option>
            </select>


            
            <button>Enviar</button>
            {err && 'Por favor chequea que la información sea correcta'}
        </form>
        {show  && <Card doctores={doctores}/>}      
    </div>
  )
}

export default App
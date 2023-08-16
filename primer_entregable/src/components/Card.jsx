import React from 'react'

const Card = ({doctores}) => {
  

  return (
    <div>
      <h3>El nombre del Doctor es: {doctores.nombre} </h3>
      <h3>El apellido del Doctor es:  {doctores.apellido}</h3>
      <h3>La especialidad es: {doctores.especialidad}</h3>
    
    </div>
  )
}

export default Card
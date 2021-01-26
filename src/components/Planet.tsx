import React from 'react'
type myProps = {
  planet: any
}
const Planet: React.FC<myProps> = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  )
}

export default Planet

import React from 'react'
type myProps = {
  person: any
}
const Person: React.FC<myProps> = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth Year - {person.birth_year}</p>
    </div>
  )
}

export default Person

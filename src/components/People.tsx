import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people/')
  return res.json()
}

const People = () => {
  const { data, status } = useQuery('planets', fetchPeople) //success, loading, error

  return (
    <div className="container">
      <h2>Planets</h2>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((person, i) => (
            <Person person={person} key={i} />
          ))}
        </div>
      )}
    </div>
  )
}

export default People

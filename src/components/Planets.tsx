import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const fetchPlanets = (arg) => async () => {
  console.log(arg)
  const res = await fetch('http://swapi.dev/api/planets/')
  return res.json()
}

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets('this is argument')) //success, loading, error

  return (
    <div className="container">
      <h2>Planets</h2>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet, i) => (
            <Planet planet={planet} key={i} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Planets

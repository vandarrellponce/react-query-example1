import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import People from './components/People'
import Planets from './components/Planets'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = (props) => {
  const [page, setPage] = useState('planets')
  useEffect(() => {}, [])
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App

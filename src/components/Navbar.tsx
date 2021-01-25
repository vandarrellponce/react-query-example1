import React from 'react'

interface myProps {
  setPage: any
}

const Navbar: React.FC<myProps> = ({ setPage }) => {
  return (
    <nav>
      <button
        onClick={(e) => {
          e.preventDefault()
          setPage('planets')
        }}
      >
        Planets
      </button>
      <button
        onClick={(e) => {
          e.preventDefault()
          setPage('people')
        }}
      >
        People
      </button>
    </nav>
  )
}

export default Navbar

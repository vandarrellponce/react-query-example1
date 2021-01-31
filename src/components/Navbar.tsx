import React from 'react'

const Navbar = ({ setPage }) => {
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

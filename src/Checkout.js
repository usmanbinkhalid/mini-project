import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <div>
        This is checkout page
        <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  )
}

export default Checkout
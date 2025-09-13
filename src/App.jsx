import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center'>
      <Link to={'/autism'}>Autism</Link>
    </div>
  )
}

export default App
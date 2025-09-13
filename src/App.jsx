import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen bg-background flex items-center justify-center space-x-2'>
      <Link to={'/autism'}>Autism</Link>
      <Link to={'/menscare'}>MensCare</Link>
    </div>
  )
}

export default App
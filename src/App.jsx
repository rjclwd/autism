import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center space-x-2'>
      <Link to={'/autism'}>Autism</Link>
      <Link to={'/menscare'}>MensCare</Link>
      <Link to={'/femalecare'}>FemaleCare</Link>
      <Link to={'/skincare'}>SkinCare</Link>
    </div>
  )
}

export default App
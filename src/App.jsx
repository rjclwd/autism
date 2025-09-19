import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='min-h-screen flex items-center justify-center space-x-2'>
      <Link to={'/autism'}>Autism</Link>
      <Link to={'/menscare'}>MensCare</Link>
      <Link to={'/femalecare'}>FemaleCare</Link>
      <Link to={'/skincare'}>SkinCare</Link>
      <Link to={'/digestivecare'}>DigestiveCare</Link>
      <Link to={'/nervmindcare'}>NervmindCare</Link>
      <Link to={'/urologycare'}>UrologyCare</Link>
      <Link to={'/autoimmunecare'}>AutoimuneCare</Link>
      <Link to={'/entcare'}>EntCare</Link>
      <Link to={'/hairbeautycare'}>HairbeautyCare</Link>
      <Link to={'/childcare'}>ChildCare</Link>
      <Link to={'/orthocare'}>OrthoCare</Link>
      <Link to={'/respiratorycare'}>RespiratoryCare</Link>
    </div>
  )
}

export default App
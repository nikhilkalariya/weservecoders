import { useState } from 'react'

import './App.css'
import Tree from './components/Tree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Tree/>
        
      </div>
    </>
  )
}

export default App

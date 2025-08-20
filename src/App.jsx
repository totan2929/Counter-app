import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter-app</h1>
      <div className="card">
        <button className="btn btn-increase" onClick={() => setCount((count) => count + 1)}>
          Incrementa + 1: <span className="counter-value">{count}</span>
        </button>
        <button className="btn btn-decrease" onClick={() => setCount((count) => count - 1)}>
          Decrementa - 1
        </button>
        <button className="btn btn-reset" onClick={() => setCount(0)}>
          Resetea contador a 0
        </button>
      </div>
    </>
  )
}

export default App
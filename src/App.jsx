import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0) // [stateVariable, setterFunction]  **You always want to use const when defining a useState

  const handleBtnClick = () => {
    setCount(count + 1)  // Use react dev tools to watch the change of state
  }

      // <></> is called a 'Fragment' and groups elements without a wrapper node without effecting the resulting DOM
  return (
        <>
          <h1>Hello!</h1>
          <div>This is amazing!</div>
          <button className="btn-secondary" onClick={handleBtnClick}>
            Click me!
          </button>
          <div>Count: {count}</div>
        </>
  )
}


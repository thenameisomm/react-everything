import { useState } from "react"

function Counter() {
  let [counter, setCounter] = useState(10)

  const incr = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const decr = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter {counter}</h1>

      <button onClick={incr}>
        Increase
      </button>

      <br />

      <button onClick={decr}>
        Decrease
      </button>
    </>
  )
}

export default Counter
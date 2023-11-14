'use client'

import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)
  
  const onClickCounterButton = () => {
    setCount(currentCount => currentCount + 1)
  }

  return (
    <>
      <div>Counter</div>
      <div>{count}</div>
      <button onClick={onClickCounterButton}>Count</button>
    </>
  )
}

export default Counter
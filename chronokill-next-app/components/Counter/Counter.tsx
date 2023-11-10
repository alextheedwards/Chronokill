'use client'

import { useState } from "react"

interface props {
  defaultCount? : number
}

export const Counter = ({
  defaultCount = 0
} : props) => {
  const [count, setCount] = useState(defaultCount)
  const [name, setName] = useState("Conor")

  const onClickButton = () => {
    setCount(currentCount => currentCount + 1)
  }

  const onClickNameSet = () => {
    setName("Alex")
  }
  
  return (
    <div>
      <div>{count}</div>
      <div>{name}</div>
			<button onClick={onClickButton}>Increment</button>
      <button onClick={onClickNameSet}>Set Name</button>
    </div>
  )
}

export default Counter
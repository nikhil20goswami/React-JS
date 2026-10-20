import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    setNum(num-1)
  }
  function increase5Num() {
    setNum(num+5)
  }
  function decrease5Num(){
    setNum(num-5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button className="btn1" onClick={increaseNum}>increase</button>
      <button className="btn2" onClick={decreaseNum}>decrease</button>
      <button className="btn3" onClick={increase5Num}>Increase by 5</button>
      <button className="btn4" onClick={decrease5Num}>Decrease by 5</button>
    </div>
  )
}

export default App
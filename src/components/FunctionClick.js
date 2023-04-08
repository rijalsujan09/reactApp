import React from 'react'

function FunctionClick() {
const  clickHandeler =() =>{
    console.log("Button Clicked")
}

  return (
    <div>
      <button onClick={clickHandeler} >Click</button>
    </div>
  )
}

export default FunctionClick

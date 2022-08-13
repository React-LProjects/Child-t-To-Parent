import React from 'react'

const Chind = (props) => {
  return (
    <>
    <div><h1>Chind component </h1></div>
     <button onClick={()=>{props.n("virendra")}}>click</button>
    </>
  )
}

export default Chind
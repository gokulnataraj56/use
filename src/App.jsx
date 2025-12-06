import React from 'react'
import {useState} from 'react'

function App() {
 const[prem,setPrem]=useState(0)

 
  return (
    <>

    <h1>{prem}</h1>
    <button onClick={()=>{
        setPrem((au)=>au=au+1)
    }}>
     click
    </button>
   </>
  )
}

export default App
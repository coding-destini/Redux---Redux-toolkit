import React from 'react'
import Count from './components/Count'
import { useDispatch } from 'react-redux'

export default function App() {
  const dispatch = useDispatch();
  return (
    <div>
      
      <button 
      onClick={()=>{
        dispatch({
          type:"Increment"
        })
      }}
      > Increment</button>
      <Count />
      <button
      onClick={()=>{
        dispatch({
          type:"Decrement"
        })
      }}
      >Decrement</button>
    </div>
  )
}

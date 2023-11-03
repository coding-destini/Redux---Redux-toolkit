import React from 'react'
import { useSelector } from 'react-redux' //used to get value from store

export default function Count() {
    const count = useSelector((state)=>state) 
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

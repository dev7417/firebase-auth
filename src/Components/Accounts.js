import React from 'react'
import { useSelector } from 'react-redux'

export default function Accounts() {
    const receiceData = useSelector((state)=> state.dataReducer.data)
    console.log('========================================>', receiceData)
  return (
    <div> 
        {receiceData.map((item)=>{
            <p>{item.email}</p>
        })}
    </div>
  )
}

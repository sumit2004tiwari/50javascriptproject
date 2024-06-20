import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, Inccrement5 } from './Reducer/Actions/acitons'
const IncDec = () => {
    const dispatch = useDispatch()
    const kcuhBhi = useSelector((data) => data)
    console.log(kcuhBhi)
  return (
    <div>
      <p>{kcuhBhi}</p>
      <button onClick={()=>dispatch(increment())}>Increment +  </button>
      <button onClick={()=>dispatch(decrement())}>Decrement -</button>
      <button onClick={()=>dispatch(Inccrement5())}>Increment5</button>
    </div>
  )
}

export default IncDec

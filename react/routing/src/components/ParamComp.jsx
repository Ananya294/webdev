import React from 'react'
import { useParams } from 'react-router-dom'

export const ParamComp = () => {
    const {id} = useParams();
  return (
    
    <div>
        params: {id}
    </div>
  )
}

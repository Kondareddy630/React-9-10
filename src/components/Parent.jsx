import React from 'react'
import Child from './Child'

function Parent({data}) {

  

  return (
    <div>Parent


        <Child data1={data}></Child>
    </div>
  )
}

export default Parent
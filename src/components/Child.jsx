import React from 'react'
import Grandchild from './Grandchild'

function Child({data1}) {

    console.log(data1)



  return (
    <div>Child


        <Grandchild data2={data1}></Grandchild>
    </div>
  )
}

export default Child
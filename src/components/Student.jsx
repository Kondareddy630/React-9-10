import React from 'react'

function Student({id,name,course,fees,age=18}) {

     

  return (
    <div>

       

        <h2>{id},{name},{course},{fees},{age}</h2>
    </div>
  )
}

export default Student
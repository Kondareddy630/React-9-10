import React from 'react'

function Grandchild({data2}) {


  return (
    <div>Grandchild
        <div>
            {
                data2.map((s)=><p>{s.sid},{s.name},{s.course},{s.fees}</p>)
            }
        </div>

    </div>
  )
}

export default Grandchild
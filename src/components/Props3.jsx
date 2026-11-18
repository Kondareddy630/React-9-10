import React from 'react'

function Props3(props) {


  return (
    <div>

        <table className='table table-bordered shadow table-striped'>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Salary</th>
                </tr>
            </thead>

            <tbody>
                {
                    props.studentdata.map((s)=>
                        <tr key={s.sid}>
                            
                            <td>{s.sid}</td>
                            <td>{s.name}</td>
                            <td>{s.course}</td>
                            <td>{s.fees}</td>
                        </tr>
                    )
                }
            </tbody>

        </table>

    </div>
  )
}

export default Props3
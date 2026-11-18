import React from 'react'

function Props2(props) {


  return (
    <div>Props2
        <dt>Empno</dt>
        <dd>{props.emp.empno}</dd>
        
        <dt>Name</dt>
        <dd>{props.emp.name}</dd>

        <dt>Job</dt>
        <dd>{props.emp.job}</dd>

        <dt>Salary</dt>
        <dd>{props.emp.salary}</dd>


    </div>
  )
}

export default Props2
import React from 'react'
import { useState } from 'react'

function Listrender1() {

    const[technologies,setTechnologies]=useState(["html","css","js","react","node js","express js"]);
    const[numbers,setNumbers]=useState([1,2,3,4,5,6,7,8,9,10]);
    const[names,setNames]=useState(["A","B","C","D","E"]);
    const[score,setScore]=useState([50,96,85,74,63,45]);



  return (
    <div>

        <table className='table table-bordered shadow'>

            <thead>
            
             <tr>
                <th>Name</th>
                <th>Score</th>
             </tr>

            </thead>

            <tbody>
                {
                    names.map((name,index)=>
                        <tr key={name}>
                            <td>{name}</td>
                            <td>{score[index]}</td>
                        </tr>
                    )
                }

            </tbody>

        </table>


        <h3>List of Technologies</h3>
        <div>
            {
                numbers.filter((num)=>num%2==0).map((n)=><p key={n}>{n}</p>)
            }
        </div>

       

        <ol>
            {
                technologies.map((tech)=><li key={tech}>{tech}</li>)
            }
        </ol>

        <ul>
            {
                technologies.map((tech)=><li key={tech}>{tech}</li>)
            }
        </ul>

        <select>
            {
                technologies.map((tech)=><option key={tech}>{tech}</option>)
            }
        </select>



        


    </div>
  )
}

export default Listrender1
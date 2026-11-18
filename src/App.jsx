import { useState } from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Demo from "./components/Demo";
import Header from "./components/Header";
import Listrender1 from "./components/Listrender1";
import Props1 from "./components/Props1";
import Props2 from "./components/Props2";
import Props3 from "./components/Props3";
import Student from "./components/Student";


function App()
{

  const[student,setStudent]=useState([
    {sid:101,name:"a",course:"java",fees:1000},
    {sid:102,name:"b",course:"ui",fees:9000},
    {sid:103,name:"c",course:"node js",fees:2000},
    {sid:104,name:"d",course:"python",fees:8000},

  ])

  return(
    <div className="container mt-5">
      
     
   
   {/* <Props1 message="good morning" id={101} name="hanvika"></Props1> */}

   {/* <Props2 emp={{empno:101,name:"hello",job:"mananger",salary:50000}}></Props2> */}

   {/* <Props3 studentdata={student}></Props3> */}


<Student id={101} name="raju" course="java" fees={5000} age={50}></Student>
<Student id={102} name="hello" course="python" fees={9000}></Student>
  
          
      
    </div>
  )

}

export default App;
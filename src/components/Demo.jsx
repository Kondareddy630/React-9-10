import { useEffect, useState } from "react";

function Demo()
{

const[state,setState]=useState("welcome to react");
const[count,setCount] =useState(0);
const[message,setMessage]=useState("hello");


useEffect(()=>{

    setState("Welcome to Js");
    setCount(300);
    setMessage("Hello students");

},[]);




return(
<div>

<h1>{state}</h1>
<p>{count}</p>
<p>{message}</p>


</div>
)

}

export default Demo;

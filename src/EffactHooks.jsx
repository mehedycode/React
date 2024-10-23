import { useEffect, useState } from "react";
import Display from "./Display";

export default function Effect() {

  const [value, setValue] = useState([])
  // const [name , email] = value

  useEffect(() => {
  
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setValue(data))
  }, [])


  return (

    
    <div>
      <h2>Data: {value.length}</h2>
      {

        value.map(person => <Display friend={person}></Display>)
      }
    </div>
  )
}
import  { useEffect, useState } from 'react'
import axios from 'axios'
function Create() {
  const [task,setTask]=useState()
 
  
  const handleAdd= () => {
    
    axios.post('http://localhost:3001/add',{task:task})
    .then (result => {location.reload()})
    .catch(err => console.log(err))
  }
  return (
    <div>
        <input type="text" name="create_form" id="" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
        <button type="button" className='create_button' onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Create
import { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
// import {BsCircleFill} from 'react-icons'
// import {} from 'react-icons'

const Home =()=> {
    const [todos,setTodos]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])

    const handleEdit =(id) => 
    {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => location.reload())
        .catch(err => console.log(err))
       
    }

    const handleDelete = (id) =>
    {
        axios.delete('http://localhost:3001/delete/'+id)

        .then(result => {console.log(result),location.reload()})
        .catch(err => console.log(err))
    }
    
  return (
    <div className="home">
        <h2>Todo List</h2>
        <Create/>
        {
            todos.length === 0 
            ?
            <div> <h2>Hey! You are Free Enjoy!!</h2></div>
         
            :
            
             todos.map(todo => (
                <div key={todo._id} className='task'>
                    <div className='checkbox' onClick={()=>handleEdit(todo._id)}>
                        {todo.done? <div></div> : <button className='sumi'>Add</button>}
                        
                        <p className={todo.done ? "line":""}>{todo.task}</p>
                    </div>
                        <div>
                            <span>
                              <button className="icon" onClick={() => handleDelete(todo._id)}>D</button>
                                
                            </span>
                        </div>
                </div>
            ))
            
        }
    </div>
  )
}

export default Home
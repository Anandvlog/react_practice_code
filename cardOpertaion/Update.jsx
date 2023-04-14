import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
    const[id,setId] = useState(0);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const navigate = useNavigate();

     useEffect(() =>{
       setId(localStorage.getItem("id"));
       setName(localStorage.getItem("name"));
       setEmail(localStorage.getItem("email"));
     },[]);

    const handleUpdateSubmit = (event) =>{
        event.preventDefault();
        console.log("id....",id);
        axios.put(`https://6438fd614660f26eb1a7bc15.mockapi.io/crud-opertaion/${id}`,{
           name:name,
           email: email 
        }).then(() =>{
            navigate('/read');
        }) 
    }
  return (
    <React.Fragment>
        <h2 className='text-center'>Update data</h2>
         <div className='container'>
           <div className='row'>
             <div className='col-12'>
             <div className='card'>
              <div className='card-body'>
            <form>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" />
                  </div>  
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <button onClick={handleUpdateSubmit} type="submit" className="btn btn-md  btn-primary">Update</button>
                  <Link to="/read" type='button' className="btn btn-md ms-2 btn-primary">Back</Link>
                </form>
              </div>
            </div>
             </div>
           </div>
         </div>
    </React.Fragment>
  )
}

export default Update
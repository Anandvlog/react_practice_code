import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const[name ,setName] = useState("");
    const[email ,setEmail] = useState("");

// const header= { "Access-Control-Allow-Origin": "*" };
   const navigate= useNavigate();
const handleSubmit =(event) =>{
    event.preventDefault();
    console.log("zxczxczx");
    axios.post(
       'https://6438fd614660f26eb1a7bc15.mockapi.io/crud-opertaion',
         {name:name,
          email:email,
          })
         .then(() =>{
           navigate('/read'); 
         });
  };
  return (
    <React.Fragment>
    
        <div className='container'>
          <div className='row'>
          <div className='d-flex align-item-center justify-content-between my-3'>
        <h4 className='text-center'>create</h4>
        <Link type="button" to="/read" className='btn btn-md btn-primary'>Show data</Link>

    </div>
            <div className='col-12'>
            <div className='card'>
              <div className='card-body'>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={(e) => setName(e.target.value) } type="text" className="form-control" id="name" />
                  </div>  
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                  <button  type="submit" className="btn btn-primary">Submit</button>
                  
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
    </React.Fragment>
  )
}

export default Create;  
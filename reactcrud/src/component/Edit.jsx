import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../userReducer';

const Edit = () => {
  
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f=> f.id == id);
    const {name,email} = existingUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch( updateUser({
            id: id,
            name:uname,
            email: uemail
        }))
        navigate('/');
    }



  return (
    <>
        <div className="container">
        <div className="row">
          <h2 className="text-center my-4">Update user</h2>
          <div className="col-md-6 offset-md-3 py-4">
          <div className="card p-3">
           <form onSubmit={handleUpdate}>
          <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    User name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="enter your name"
                    value={uname}
                    onChange={e => setName(e.target.value)}
                    
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    User email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="enter your email"
                    value={uemail}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </form>   
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit;
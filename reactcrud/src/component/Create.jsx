import React, { useState } from "react";
import { addUser } from "../userReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit =(event) =>{
    event.preventDefault()
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center my-4">Add new user</h2>
          <div className="col-md-6 offset-md-3 py-4">
          <div className="card p-3">
           <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    User name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="enter your name"
                    onChange={(e) => setName(e.target.value)}
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>   
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setData] = useState([]);
    const[tableDark,setTableDark]= useState('');
    const getData = () =>{
        axios
        .get('https://6438fd614660f26eb1a7bc15.mockapi.io/crud-opertaion')
        .then((res) =>{
            setData(res.data);
          console.log(res.data);
        })

    };
    const handleDelete = (id) =>{
       axios.delete(`https://6438fd614660f26eb1a7bc15.mockapi.io/crud-opertaion/${id}`)
       .then(() =>{
         getData();
       })   
    }
    const setToLocalStorage = (id,name,email) =>{
      localStorage.setItem("id",id)
      localStorage.setItem("name",name);
      localStorage.setItem("email",email);
    }
    useEffect(() =>{
        getData();

    },[])
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="form-check form-switch">
             <input className="form-check-input" type="checkbox" role="switch" onClick={() => tableDark === 'table-dark' ? setTableDark(''): setTableDark("table-dark")} />
          </div>
          <div className="d-flex align-item-center justify-content-between my-3">
           <h3>Read Operation</h3>
            <Link type="button" to="/" className="btn btn-md btn-primary">Create</Link>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <table className={`table ${tableDark}`}>
                  <thead>
                    <tr>
                      <th>#id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((item) =>{
                    return(
                        <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>
                          <Link to="/update" onClick={() => setToLocalStorage(item.id,item.name,item.email)} type="button" className="btn btn-md btn-success">Edit</Link>
                          <button className="btn ms-2 btn-md btn-danger" onClick={() => handleDelete(item.id) }>delete</button>
                      </td>
                    </tr>
                    )
                  })

                  }
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Read;

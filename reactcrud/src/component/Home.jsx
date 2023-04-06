import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../userReducer';


const Home = () => {
    const users= useSelector((state) => state.users);
     const dispatch = useDispatch();

    const handleDelete = (id) =>{
       dispatch(deleteUser({id:id})) 
    };

    return (
    <>
        <div className='container'>
            <h2>Crud operation using react redux</h2>
            <Link type='button' to="/create" className='btn btn-md btn-success my-3'>Create</Link>
            <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
              <tbody>
                 {users.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                            <Link to={`/edit/${item.id}`} type='button' className='btn btn-md btn-outline-primary'>Edit</Link>
                            <Link to="#" onClick={() => handleDelete(item.id)} type='button' className='btn btn-md btn-outline-danger ms-3'>Delete</Link>
                            </td>
                        </tr>
                    )
                 })

                 }
              </tbody>
            </table>
        </div>
    </>
  )
}

export default Home;
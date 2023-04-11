import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
      const [data,setData] = useState([]);
      const [recoard,setRecoard] = useState([]);
      
      useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setData(res.data)
            setRecoard(res.data);
            console.log(res.data);
        })
        .catch(err => console.log(err));

      }, []);
      
      const filter = (event) =>{
        setRecoard(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
      }

    return (
       <>
        <div className='container'>
           <div className='row'>
             <div className='col-lg-8 offset-lg-2'>
               <input className="form-control my-4 " type="search" placeholder="Search userName..." aria-label="Search" onChange={filter} />
              <div className='card'>
             <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                {recoard.map((items,index) =>{
                    return(
                            <tr key={index}>
                            <th>{items.id}</th>
                            <td>{items.name}</td>
                            <td>{items.phone}</td>
                            <td>{items.email}</td>
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
       </>    
  )
}

export default Home;
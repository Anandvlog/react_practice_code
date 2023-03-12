import axios from './createApi';
import React, { useEffect, useState } from 'react'

const Call = () => {
    const[myData,setMyData] = useState([]);
    const[isError,setIsError] = useState("");

// Note:- using promises
// useEffect(() =>{
//    axios.get('https://jsonplaceholder.typicode.com/posts')
//    .then((res) =>
//        setMyData(res.data))
    
//     .catch((error) =>
//        setIsError(error.message)
//     )
// },[]);
// Note:- using Async await
const getApiData = async() =>{
  try{
   const res = await axios.get('/posts');
   setMyData(res.data);
  }catch(error){
    setIsError(error.message);
  }
};
useEffect(() =>{
  getApiData();
},[]);
  return (
    <>
    <div className='container'>
            <div className='row'>
            <h4 className='text-white py-4'>Axios Call API</h4>
            {isError !== "" && <h4 className='text-white'>{isError}</h4>}
            { myData.slice(0,12).map((items) =>{
            const {id, title, body} = items;
           return <div className='col-md-4' key={id}>
                    <div className='card mb-3 p-3'>
                    <h3>{title.slice(0 ,18).toUpperCase()}</h3>
                    <p>{body.slice(0 ,150)}</p>
                    </div>
            </div>           
           })}
        </div>
    </div>
  </>
  )
}

export default Call;
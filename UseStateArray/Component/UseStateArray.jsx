import React, { useState } from 'react';

const UseStateArray = () => {
  const myBioData =[{
      id: 0,
      name: "Anand",
      Age: 24,
  },{
    id: 1,
      name: "Deepu",
      Age: 22,
  },{
    id: 2,
      name: "Kumar",
      Age: 26,
  }];
  const [myArray, setMyArray] = useState(myBioData);
  const clearData =() =>{
    setMyArray([]);
  }

 
  return (
    <>
    <div className='heading'>
      <h1 className='text-center'>Use state Array</h1>
    </div>

    <div className='user-details'>
    {myArray.map((details) =>{return <p key={details.id}>Name: {details.name} and age: {details.Age} year</p>})}
      
    </div>
    <button className='btn clear-btn' onClick={clearData}>Clear</button>

    </>
  )
}

export default UseStateArray;
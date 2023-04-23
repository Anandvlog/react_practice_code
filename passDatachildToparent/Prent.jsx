import React, { useState } from 'react';
import Child from './Child';


const Prent = () => {
   const [text,setText] = useState('parent');

  return (
    <>
    <div className='text-center'> I am {text}</div>
      <Child ptext="I am child" text={text} setText={setText} />
    </>
  )
}

export default Prent
import React from 'react'

const Child = ({ptext, setText}) => {
  return (
    <>
    <div className='text-center'>{ptext}</div>
    <button className='m-auto d-flex btn btn-md btn-primary' onClick={() => setText("parent2")}>click me</button>

    </>
  )
}

export default Child;
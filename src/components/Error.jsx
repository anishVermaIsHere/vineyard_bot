import React from 'react'

const Error = ({ message }) => {
  return (
    <div className='text-center text-primary font-semibold rounded-xl py-4 px-2 mx-4'>{message}</div>
  )
}

export default Error
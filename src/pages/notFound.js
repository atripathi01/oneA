import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../images/notfound.jpg'

const NotFound = () => {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center vw-100 vh-100'>
      <img src={notfound} alt='notfound' style={{width:'500px'}} />
      <p className='fs-1'>
        Page not found
      </p>
      <Link to={'/dashboard'}>
        <button className='button bg-primary text-white border-0 p-2 rounded-3 ' type="button">
           Dashboard
        </button>
      </Link>
    </div>
  )
}

export default NotFound
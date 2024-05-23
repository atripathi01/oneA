import React from 'react'
import './style.css';

const Order = () => {
  return (
    <div className='dashboard_container p-3 '>
    <div className='headers d-flex  justify-content-between  align-align-items-center '>
      <div className=' fs-6 d-flex justify-content-start align-items-center gap-3'>
        <p className='fs-5 fw-light'>Your orders  👋</p>
        <p className='newMessage'>
          your orders <span className='text-primary'>1 new update</span>
        </p>
      </div>
      <i className=' fs-3 fa-solid fa-right-from-bracket'></i>
    </div>
    </div>
  )
}

export default Order
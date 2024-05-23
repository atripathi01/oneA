import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideVector from '../images/login.svg';
import './style.css';

const Login = () => {

  const [userData, setUserData]=useState({});


  const handleInputChange=(event)=>{
    const { name, value } = event.target;
    setUserData({...userData, [name]: value });
  }
  // handle final submit button
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='d-flex justify-content-around align-items-center vw-100 vh-100'>
      <div className='containerL d-flex justify-content-start overflow-hidden  bg-white shadow-lg'>
        <div className=' img_container overflow-hidden'>
          <img src={SideVector} alt='login' className='vector_img' />
        </div>
        <div className=' content_container p-5'>
        <div className='d-flex justify-content-start align-items-start flex-column'>
            <h1 className='text-center fs-4'>Login to admin panel</h1>
            <div id='emailHelp' className='form-text mb-4'>
              Enter your Email and Password below{' '}
            </div>
            <form className='login_form'>
              <div className='mb-3'>
                <label
                  htmlFor='exampleInputEmail1'
                  className='form-label  fw-bold  text-uppercase '
                  style={{ fontSize: '12px' }}
                >
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  className='form-control input_field'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Email address'
                  onChange={handleInputChange}
                />
                {/* <div
                  id='emailHelp'
                  className='form-text text-danger '
                  style={{ fontSize: '10px' }}
                >
                  This is Required
                </div> */}
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleInputEmail1'
                  className='form-label  fw-bold  text-uppercase '
                  style={{ fontSize: '12px' }}
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  className='form-control input_field'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Password'
                  onChange={handleInputChange}
                />
                {/* <div
                  id='emailHelp'
                  className='form-text text-danger '
                  style={{ fontSize: '10px' }}
                >
                  This is Required
                </div> */}
              </div>
              <div className='mb-3 mt-4'>
                <input
                  type='button'
                  className='form-control input_button'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  value='Login'
                  onClick={()=>{
                  }}
                />
              </div>

              <div id='emailHelp' className='form-text mb-4'>
                Don't have an account?{' '}
                <a href='/register' className='text-decoration-none '>
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

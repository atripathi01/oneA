import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideVector from '../images/login.svg';
import './style.css';

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState({});
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  // handle final submit button
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentStep(2);
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input box
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (element, index, event) => {
    if (event.key === 'Backspace') {
      if (element.previousSibling) {
        element.previousSibling.focus();
      }
    }
  };
  return (
    <div className='d-flex justify-content-around align-items-center vw-100 vh-100'>
      <div className='containerL d-flex justify-content-start overflow-hidden  bg-white shadow-lg'>
        <div className=' img_container overflow-hidden'>
          <img src={SideVector} alt='login' className='vector_img' />
        </div>
        <div className=' content_container p-5'>
          {currentStep === 1 && (
            <div className='d-flex justify-content-start align-items-start flex-column'>
              <h1 className='text-center fs-4'>Register to admin panel</h1>
              <div id='emailHelp' className='form-text mb-4'>
                Enter your Email and Password below{' '}
              </div>
              <form className='login_form'>
                <div className='mb-3'>
                  <label
                    htmlFor='email'
                    className='form-label  fw-bold  text-uppercase '
                    style={{ fontSize: '12px' }}
                  >
                    Email address
                  </label>
                  <input
                    type='email'
                    name='email'
                    className='form-control input_field'
                    id='email'
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
                    htmlFor='password'
                    className='form-label  fw-bold  text-uppercase '
                    style={{ fontSize: '12px' }}
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    className='form-control input_field'
                    id='password'
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
                <div className='mb-3'>
                  <label
                    htmlFor='confirmPassword'
                    className='form-label  fw-bold  text-uppercase '
                    style={{ fontSize: '12px' }}
                  >
                    Confirm Password
                  </label>
                  <input
                    type='password'
                    name='confirmpassword'
                    className='form-control input_field'
                    id='confirmPassword'
                    aria-describedby='emailHelp'
                    placeholder='Confirm Password'
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
                    id='buttn-required'
                    aria-describedby='emailHelp'
                    value='Register'
                    onClick={() => {
                      setCurrentStep(2);
                    }}
                  />
                </div>

                <div id='emailHelp' className='form-text mb-4'>
                  Already have an account?{' '}
                  <a href='/login' className='text-decoration-none '>
                    Login
                  </a>
                </div>
              </form>
            </div>
          )}
          {currentStep === 2 && (
            <div className='d-flex justify-content-start align-items-start flex-column'>
              <h1 className='text-center fs-4'>Verify your Email</h1>
              <div id='emailHelp' className='form-text mb-4'>
                Enter the OTP from your register emailid{' '}
              </div>
              <form className='login_form'>
                <div className='mb-3 d-flex  justify-content-between '>
                  {otp.map((data, index) => {
                    return (
                      <input
                        className='form-control opt_filed'
                        type='text'
                        name='otp'
                        maxLength='1'
                        key={index}
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onKeyDown={(e) => handleKeyDown(e.target, index, e)}
                        onFocus={(e) => e.target.select()}
                      />
                    );
                  })}
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
                    value='Proceed'
                    onClick={() => {
                      setUserData({ ...userData, otp: otp.join('') });
                    }}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import './style.css';
import Ava from '../images/you.png';

const topDrivers = [
  {
    name: 'Maharram Hasanil',
    contact: '+998 (99) 436-46-15',
    order: '5',
    income: '98',
  },
  {
    name: 'Maharram Hasanil',
    contact: '+998 (99) 436-46-15',
    order: '5',
    income: '98',
  },
  {
    name: 'Maharram Hasanil',
    contact: '+998 (99) 436-46-15',
    order: '5',
    income: '98',
  },
  {
    name: 'Maharram Hasanil',
    contact: '+998 (99) 436-46-15',
    order: '5',
    income: '98',
  },
  {
    name: 'Maharram Hasanil',
    contact: '+998 (99) 436-46-15',
    order: '5',
    income: '98',
  },
  {
    name: 'Maharram Hasanil',
    contact: '+998 (99) 436-46-15',
    order: '5',
    income: '98',
  },
  {
    name: 'Maharram Hasanil',
    contact: '+998 (99) 436-46-15',
    order: '5',
    income: '98',
  },
];
const Dashboard = () => {
  return (
    <div className='dashboard_container p-3 '>
      <div className='headers d-flex  justify-content-between  align-align-items-center '>
        <div className=' fs-6 d-flex justify-content-start align-items-center gap-3'>
          <p className='fs-5 fw-light'>Good Morning, Maharram 👋</p>
          <p className='newMessage'>
            you have <span className='text-primary'>1 new messege</span>
          </p>
        </div>
        <i className=' fs-3 fa-solid fa-right-from-bracket'></i>
      </div>
      <div className='divider'></div>
      <div className='p-2'>
        <div className='row '>
          <div className='col-7'>
            <div className='p-3'>
              <p className='fw-bolder '>Knowledge base</p>
              <div className='graph_kb'></div>
            </div>
          </div>
          <div className='col-5 top_drivers'>
            <div className='p-3'>
              <div className='d-flex justify-content-between align-align-items-center '>
                <p className='fw-bold'>Top drivers</p>
                <i class='fa-solid fa-chevron-right'></i>
              </div>
              <div>
                {topDrivers?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className='card my-2 p-2 d-flex justify-content-between flex-row'
                    >
                      <div className='d-flex justify-content-start flex-row '>
                        <div className='avatar_image '>
                          <img src={Ava} alt='avatar' className='avatar_img' />
                        </div>
                        <div className='d-flex px-1  justify-content-center flex-column'>
                          <p className='m-0 nameT'>{item?.name}</p>
                          <p className='m-0 opacity65'>{item?.contact}</p>
                        </div>
                      </div>
                      <div className='d-flex justify-content-end align-items-end flex-column '>
                        <p className='m-0 opacity65'>
                          orders:{' '}
                          <span className='fs-6 opacity1'>{item.order}</span>
                        </p>
                        <p className='divider m-0'></p>
                        <p className='m-0 opacity65'>
                          income:{' '}
                          <span className='fs-6 opacity1'>${item.income}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

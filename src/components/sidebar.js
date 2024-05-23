import React from 'react';
import AvatarImg from '../images/userAva.png';
import { NavLink } from 'react-router-dom';
import './style.css';

const Sidebar = () => {
  return (
    <div className='sidebar d-flex  justify-content-start align-align-items-start gap-4 flex-column mt-4'>
      <div className='profile d-flex gap-2   justify-content-start flex-row align-align-items-center'>
        <div>
          <img src={AvatarImg} alt={'profile'} />
        </div>
        <div>
          <p className='m-0'>Maharram Hasanil</p>
          <p className='m-0 contactT'>+998 (99) 436-46-15</p>
        </div>
      </div>
      <p className='opacity65 text-uppercase '>Main Menu</p>
      <ul className='navlist p-0'>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/dashboard'
            activeClassName='active'
            // @ts-ignore
            activeStyle={{ color: 'green', backgroundColor: '#fff' }}
          >
            <span className='mx-1'>
            <i class="fa-solid fa-gauge"></i>
            </span>
            Dashboard
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            activeClassName='active'
            to='/order'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)', backgroundColor: '#fff' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-dolly"></i>
            </span>
            Orders
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
            activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-user-clock"></i>
            </span>
            Rides
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
            activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-users"></i>
            </span>
            Clients
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
             activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-brands fa-connectdevelop"></i>
            </span>
            Drives
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
             activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-dollar-sign"></i>
            </span>
            Shift
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
             activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-map"></i>
            </span>
            Live Map
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
             activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-car"></i>
            </span>
            Car Classes
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
             activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-code-branch"></i>
            </span>
            Branches
          </NavLink>
        </li>
        <li className='items'>
          <NavLink
            className={'itemLink'}
            to='/'
             activeClassName='active'
            //   @ts-ignore
            activeStyle={{ color: 'rgba(0,255,12,1)' }}
          >
             <span className='mx-1'>
             <i class="fa-solid fa-sliders"></i>
            </span>
            Setting
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

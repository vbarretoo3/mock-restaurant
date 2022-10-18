import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <div className='navbar-background'>
        <h2 className='menu-title'>Menu</h2>
        <nav className='navbar'>
          <ul className='navbar-list'>
            <li className='navbar-item-list'>
              <NavLink className='navbar-item' to='/menu/entree'>Appetizers</NavLink>
            </li>
            <li className='navbar-item-list'>
              <NavLink className='navbar-item' to='/menu/main'>Main</NavLink>
            </li>
            <li className='navbar-item-list'>
              <NavLink className='navbar-item' to='/menu/soups'>Soups</NavLink>
            </li>
            <li className='navbar-item-list'>
              <NavLink className='navbar-item' to='/menu/sides'>Side</NavLink>
            </li>
            <li className='navbar-item-list-last'>
              <NavLink className='navbar-item' to='/menu/deserts'>Deserts</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

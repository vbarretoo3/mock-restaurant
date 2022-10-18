import React from 'react';
import FirebaseFunctions from '../menu/FirebaseFunctions';

export default function Dashboard() {
  const items1 = FirebaseFunctions('Entree')
  const items2 = FirebaseFunctions('Main')
  const items3 = FirebaseFunctions('Soups')
  const items4 = FirebaseFunctions('Sides')
  const items5 = FirebaseFunctions('Deserts')

  return (
    <>
      <h2>Dashboard</h2>
      <div className='dahsboard-menu'>
        <h3>Appetizers</h3>
        {items1}
        <h3>Main</h3>
        {items2}
        <h3>Soups</h3>
        {items3}
        <h3>Sides</h3>
        {items4}
        <h3>Deserts</h3>
        {items5}
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button className='button'>Edit Menu</button> 
        <button className='button'>Add User</button> 
      </div>
      <br/>
    </>
  )
}

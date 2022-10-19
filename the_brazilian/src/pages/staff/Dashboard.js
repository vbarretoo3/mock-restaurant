import React from 'react';
import FirebaseFunctions from '../menu/FirebaseFunctions';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const items1 = FirebaseFunctions('Entree')
  const items2 = FirebaseFunctions('Main')
  const items3 = FirebaseFunctions('Soups')
  const items4 = FirebaseFunctions('Sides')
  const items5 = FirebaseFunctions('Deserts')
  const {logout} = useAuth()
  const history = useNavigate()

  function handleAddUser() {
    history('/dashboard/add-user')
  }

  function handleEditMenu() {
    history('/dashboard/edit-menu')
  }

  function handleUpdateProfie() {
    history('/dashboard/update-profile')
  }

  async function handleLogOut() {
    try {
      await logout()
      history('/')
    } catch (error) {
      console.log(error)
    }
  }

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
        <button onClick={handleEditMenu} className='button'>Edit Menu</button> 
        <button onClick={handleAddUser} className='button'>Add User</button> 
        <button onClick={handleUpdateProfie} className='button'>Update Profile</button> 
        <button onClick={handleLogOut} className='button'>Log Out</button> 
      </div>
      <br/>
    </>
  )
}

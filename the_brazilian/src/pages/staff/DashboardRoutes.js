import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
import AddUser from './AddUser'
import UpdateProfile from './UpdateProfile'
import EditMenu from './EditMenu'
import NotFound from '../not_found/NotFound'
import PrivateRoute from './PrivateRoute';
import EditMenuItem from './EditMenuItem'



export default function DashboardRoutes() {
  return (
    <>  
      <Routes>
          <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />    
          <Route path='add-user' element={<PrivateRoute><AddUser /></PrivateRoute>} />
          <Route path='update-profile' element={<PrivateRoute><UpdateProfile /></PrivateRoute>} />
          <Route path='edit-menu' element={<PrivateRoute><EditMenu /></PrivateRoute>} />
          <Route path='/:id' element={<PrivateRoute><EditMenuItem/></PrivateRoute>} />
          <Route path='*' element={<PrivateRoute><NotFound /></PrivateRoute>} />
      </Routes>
    </>
  )
}

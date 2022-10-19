import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Entree from './Entree'
import Sides from './Sides'
import Main from './Main'
import Soups from './Soups'
import Deserts from './Deserts'
import Menu from './Menu'
import NotFound from '../not_found/NotFound'


export default function MenuRoutes() {
  return (
    <>  
      <div className='container-menu'>
        <div className='menu-navbar'>
        <Menu />
        </div>
        <div  className='menu-items'>
          <Routes>
              <Route className='menu-item' path='/' element={<Entree />} />    
              <Route className='menu-item' path='entree' element={<Entree />} />
              <Route className='menu-item' path='main' element={<Main />} />
              <Route className='menu-item' path='soups' element={<Soups />} />
              <Route className='menu-item' path='sides' element={<Sides />} />
              <Route className='menu-item' path='deserts' element={<Deserts />} />
              <Route className='menu-item' path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

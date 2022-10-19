/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider } from './pages/context/AuthContext';
import Home from './pages/home/Home';
import MenuRoutes from './pages/menu/MenuRoutes';
import About from './pages/about/About';
import Careers from './pages/careers/Careers';
import NotFound from './pages/not_found/NotFound';
import Staff from './pages/staff/Staff';
import DashboardRoutes from './pages/staff/DashboardRoutes';
import ForgotPassword from './pages/staff/ForgotPassword';
import './style/index.css';
import PrivateRoute from './pages/staff/PrivateRoute';


function App() {
  return (
    <>
      <div>
        <div className='hero-image'>
          <nav>
            <ul className='main-menu'>
              <li className='main-menu-inner'>
                <NavLink className='main-menu-item' end to='/'>HOME</NavLink>
              </li>
              <li className='main-menu-inner'>
                <NavLink className='main-menu-item' end to='/menu'>MENU</NavLink>
              
              </li >
              <li className='main-menu-inner'>
                <NavLink className='main-menu-item' to='/about'>ABOUT US</NavLink>
                
              </li>
              <li className='main-menu-inner'>
                <NavLink className='main-menu-item' to='/careers'>JOIN OUR TEAM</NavLink>
              </li>
            </ul>
            
            <h1><strong>The <span style={{color:'green'}}>B</span><span style={{color:'yellow'}}>R</span>azilian</strong></h1>
          </nav>
        </div>
        
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/menu/*' element={<MenuRoutes />} />
            <Route path='/about' element={<About />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/staff' element={<Staff />} />
            <Route path='/dashboard/*' element={<PrivateRoute><DashboardRoutes /></PrivateRoute>}/>
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
      <footer>
        <div className='footer-left'>
          <nav className='footer-menu-nav'>
            <ul className='footer-menu'>
              <li className='footer-menu-inner'>
                <NavLink className='footer-item' end to='/'>HOME</NavLink>
              </li>
              <li className='footer-menu-inner'>
                <NavLink className='footer-item' end to='/menu'>MENU</NavLink>
              
              </li >
              <li className='footer-menu-inner'>
                <NavLink className='footer-item' to='/about'>ABOUT US</NavLink>
                
              </li>
              <li className='footer-menu-inner'>
                <NavLink className='footer-item' to='/careers'>JOIN OUR TEAM</NavLink>
              </li>
            </ul>
          </nav>
          <div className='divider2'/>
        </div>
        <div className='footer-middle'>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe max-width="421" height="277" id="gmap_canvas" src="https://maps.google.com/maps?q=Sault%20Ste%20Marie,%20ON&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
              <br/>
              <style>.mapouter{"position:relative;text-align:right;height:277px;width:421px;"}</style>
              <a href="https://www.embedgooglemap.net"></a>
              <style>.gmap_canvas {"overflow:hidden;background:none!important;height:277px;width:421px;"}</style>
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <h3>Contact Us</h3>
          <p className='footer-right-item'>
            Phone: 555-555-5555
          </p>

          <p className='footer-right-item'>
            Email: <a className='email' href='mailto:fakeemail@example.com'>fakeemail@example.com</a>
          </p>

          <p>
            address: Sault Ste. Marie, ON
                      Canada
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;

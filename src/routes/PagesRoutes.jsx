import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Home from '../Pages/Home'
import About from '../Pages/About'
// import Shop from '../Pages/Shop'
import GetApp from '../Components/GetApp'
import Blog from '../Pages/Blog'
import Services from '../Pages/Services'
import Contacts from '../Pages/Contacts'
import Login from '../auth/Login'
import Dashboard from '../Pages/Dashboard'
import Order from '../Pages/Order'
import CustomerPage from '../Pages/Customer'
import MenuPage from '../Pages/MenuPage'
import AnalyticsPage from '../Pages/AnalyticsPage'
import Shop from '../Pages/Shop'
import OurMenu from '../Components/Menu'

export default function PagesRoutes() {
  return (
    <div className='bg-slate-200'>
      <Router>
        {/* <Header/> */}
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/our-menu' element={<OurMenu/>}/>
              <Route path='/blog' element={<Blog/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/services' element={<Services/>}/>
              <Route path='/contact' element={<Contacts/>}/>

              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/menu' element={<MenuPage/>}/>
              <Route path='/orders' element={<Order/>}/>
              <Route path='/customers' element={<CustomerPage/>}/>
              <Route path='/analytics' element={<AnalyticsPage/>}/>
          </Routes>
          {/* <Footer/> */}
      </Router>
    </div>
  )
}

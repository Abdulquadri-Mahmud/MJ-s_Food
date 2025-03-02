import React from 'react'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function Contacts() {
  return (
    <div className="">
      <Header/>
      <div className='bgImg'>
          <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

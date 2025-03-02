import React from 'react'
import WhoWeAre from '../Components/WhoWeAre'
import QuickSearch from '../Components/QuickSearch'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <div className="">
      <Header/>
        <WhoWeAre/>
        <div className="">
            <QuickSearch/>
        </div>
        <Footer/>
    </div>
  )
}

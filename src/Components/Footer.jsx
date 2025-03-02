import React from 'react'
import { FaBowlFood, FaLocationPin, FaMapLocation } from 'react-icons/fa6'
import { GoMail } from 'react-icons/go'
import { IoCall, IoFastFoodOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="">
      
      <div className='md: py-16 p-3 bg-slate-900 text-white grid grid-cols-1 md:grid-cols-4 place-item-center  md:gap-5 gap-5'>
        <div className="">
          <div className="pb-4">
            <div className="flex items-center gap-1 text-white text-4xl font-medium">
              <FaBowlFood className='text-yellow-500'/> 
              <h1 className=''>JANET<span className='text-yellow-500'>'s_</span>Foo<span className='text-yellow-500'>d</span></h1>
              <IoFastFoodOutline className='text-yellow-500'/>
            </div>
            <div className="max-w-[80px] md:ml-20 ml-24 rounded-md mt-4 p-1 bg-slate-100 relative">
                <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
            </div>
          </div>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae, impedit fugit perferendis dolores accusamus sequi dolorem officiis quod? Aut recusandae a laboriosam fugiat impedit iure aperiam. Sed, reprehenderit aperiam.</p>
        </div>
        <div className="">
          <div className="pb-4">
            <h2 className='font-semibold text-3xl text-white'>NAVIGATION</h2>
          </div>
          <ul>
            <li className='pb-2 hover:text-yellow-500 duration-150'>
              <Link to={'/'}>Home</Link>
            </li>
            <li className='pb-2 hover:text-yellow-500 duration-150'>
              <Link to={'/'}>About</Link>
            </li>
            <li className='pb-2 hover:text-yellow-500 duration-150'>
              <Link to={'/'}>Location</Link>
            </li>
            <li className='pb-2 hover:text-yellow-500 duration-150'>
              <Link to={'/'}>Services</Link>
            </li>
            <li className='pb-2 hover:text-yellow-500 duration-150'>
              <Link to={'/'}>Features</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="pb-4">
            <h2 className='font-semibold text-3xl text-white pb-4'>CONTACT INFO</h2>
            <div className="">
              <p className='text-yellow-500 text-sm '>Office Addres</p>
              <div className="flex items-center gap-1 pt-2">
                <FaMapLocation className='text-red-500'/>
                <p className='text-sm '>1 Akin Ogunlewe, Ikorodu, Lagos, Nigeria.</p>
              </div>
              <p className='text-yellow-500 text-sm pt-2'>Office Phone</p>
              <div className="flex items-center gap-1 pt-2">
                <IoCall className='text-red-500'/>
                <a href="tel:07047594667">(+234)704-7594-667</a>
              </div>
              <p className='text-yellow-500 text-sm p-2'>Office Email</p>
              <div className="flex items-center gap-1">
                <p className='text-red-500'><GoMail/></p>
                <a href="tel:mahmudabdulquadri06@gmail.com">janet091@gmail.com</a>
              </div>
            </div>
          </div>

        </div>
        <div className="">
          <div className="pb-4">
            <h2 className='font-semibold text-3xl text-white'>DISCOVER</h2>
          </div>
          <ul>
            <li className='hover:text-yellow-500 duration-150 pb-2'>
              <Link>Help</Link>
            </li>
            <li className='hover:text-yellow-500 duration-150 pb-2'>
              <Link>How It Works</Link>
            </li>
            <li className='hover:text-yellow-500 duration-150 pb-2'>
              <Link>Subscribe</Link>
            </li>
            <li className='hover:text-yellow-500 duration-150 pb-2'>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-2 px-3 bg-yellow-500 text-white">
        <p className='text-sm text-center'>2024 All Rights Reserved. Designed by AdeyemiCodes</p>
      </div>
    </div>
  )
}

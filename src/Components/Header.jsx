import React, { useRef } from 'react'
import { IoCall } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { FaBowlFood } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiMenu5Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

  return (
    <div className="sticky top-0 bg-slate-900 z-10">         
        <div className='px-4 md:pt-0 pt-2 flex justify-around items-center text-gray-100 font-medium md:max-w-[90%] mx-auto'>
            <div className="bg-yellow-500
            hidden md:block">
                <div className="flex items-center justify-center py-4 px-4">
                    <p className='flex items-center gap-2'><IoCall/>Call: </p>
                    <a href="tel:07047594667">(+234)704-7594-667</a>
                </div>
            </div>
            <div className="flex items-center gap-1 text-white lg:text-4xl text-2xl">
                <FaBowlFood className='text-yellow-500'/> 
                <h1 className=''>JANET<span className='text-yellow-500'>'s_</span>Foo<span className='text-yellow-500'>d</span></h1>
                <IoFastFoodOutline className='text-yellow-500'/>
            </div>
            <div className="bg-yellow-500
            hidden md:block">
                <div className="flex items-center justify-center py-4 px-4">
                    <p className='flex items-center gap-2'><GoMail/>Email: </p>
                    <a href="tel:mahmudabdulquadri06@gmail.com">adeyemi@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="md:max-w-[60%] mx-auto md:p-5 p-2 md:bg-yellow-500 bg-slate-900 text-white flex items-center justify-between">
            <div className="hidden md:block w-[80%]">
                <div className="flex justify-center gap-6">
                    <Link to={'/'} className='font-medium hover:text-slate-800 text-slate-800 duration-150'>HOME</Link>
                    <Link to={'/about'} className='font-medium hover:text-slate-800 duration-150'>ABOUT</Link>
                    <Link to={'/our-menu'} className='font-medium hover:text-slate-800 duration-150 uppercase'>Menu</Link>
                    <Link to={'/blog'} className='font-medium hover:text-slate-800 duration-150'>BLOG</Link>
                    <Link to={'/services'} className='font-medium hover:text-slate-800 duration-150'>SERVICES</Link>
                    <Link to={'/contact'} className='font-medium hover:text-slate-800 duration-150'>CONTACT</Link>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Link to={'/login'} className='font-medium'>LOGIN</Link>
                <FaSearch className='md:text-white text-yellow-500 hidden md:block'/>
            </div>
            <div className="block md:hidden">
                <FaSearch className='md:text-whit3'/>
            </div>
            <div className=" md:hidden">
                <Button ref={btnRef} bg={'transparent'} _hover={{bg: 'transparent'}} onClick={onOpen}><RiMenu5Fill className='text-3xl text-white'/></Button>
                    <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                        <DrawerOverlay />
                        <DrawerContent color={'white'}>
                            <DrawerCloseButton />

                            <DrawerBody className='bg-slate-900'>
                                <div className="mt-24 flex flex-col gap-6">
                                    <Link to={'/'} className='font-medium hover:text-yellow-500 duration-150'>HOME</Link>
                                    <Link to={'/about'} className='font-medium hover:text-yellow-500 duration-150'>ABOUT</Link>
                                    <Link to={'/our-menu'} className='font-medium hover:text-yellow-500 duration-150 uppercase'>menu</Link>
                                    <Link to={'/blog'} className='font-medium hover:text-yellow-500 duration-150'>BLOG</Link>
                                    <Link to={'/services'} className='font-medium hover:text-yellow-500 duration-150'>SERVICES</Link>
                                    <Link to={'/contact'} className='font-medium hover:text-yellow-500 duration-150'>CONTACT</Link>
                                </div>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
            </div>
        </div>
    </div>
  )
}

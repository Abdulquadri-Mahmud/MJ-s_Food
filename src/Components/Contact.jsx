import React from 'react'

export default function Contact() {
  return (
    <div className='md:max-w-[100%] mx-auto md:p-10 p-3 bgImg3 text-white pt-10'>
        <div className="pb-8">
            <h2 className='text-center font-semibold text-4xl text-white'>Get In Touch</h2>
            <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-white relative">
                <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
            </div>
        </div>
        <div className="">
            <div className="md:max-w-[50%] mx-auto">
                <form>
                    <input type="text" className='mt-4 w-full py-3 px-3' placeholder='Name'/>
                    <input type="text" className='mt-4 w-full py-3 px-3' placeholder='Phone Number'/>
                    <input type="text" className='mt-4 w-full py-3 px-3' placeholder='Email'/>
                    <textarea name="" id="" className='h-[150px] mt-4 w-full p-4' placeholder='Message'></textarea>
                    <div className="flex justify-center mt-4">
                        <button className='bg-yellow-500 px-10 py-3 font-semibold '>SEND</button>
                    </div>
                </form>

            </div>
            <div className="2xl:w-[60%] md:w-[70%] w-full mx-auto flex md:flex-nowrap flex-wrap justify-center items-center gap-5 mt-14 bg-white text-black md:p-8 p-3 rounded-md">
                <h2 className="font-bold md:text-4xl text-2xl text-center">Order Best food at time</h2>
                <button className='bg-slate-800 px-10 py-3 font-semibold text-white rounded-[6px]'>ORDER NOW</button>
            </div>
        </div>
    </div>
  )
}

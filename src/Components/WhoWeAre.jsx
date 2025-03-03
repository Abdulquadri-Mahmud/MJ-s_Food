import React from 'react'

export default function WhoWeAre() {
  return (
    <div>
        <div className='flex justify-around flex-wrap px-3 gap-6 md:my-20 md:max-w-[80%] mx-auto'>
            <div className="md:w-[45%] w-full">
                <div className=" text-center md:hidden block">
                    <h1 className='md:text-4xl text-3xl font-semibold'>Who We Are</h1>
                    <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-slate-800 relative">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
                    </div>
                </div>
                <div className="mt-6">
                    <img className='' src="bg.jpg" alt="restaurant" />
                </div>
            </div>
            <div className="md:w-[45%] w-full">
                <div className=" text-center hidden md:block">
                    <h1 className='md:text-4xl text-3xl font-semibold'>Who We Are</h1>
                    <div className="max-w-[80px] rounded-md mx-auto mt-4 p-1 bg-slate-800 relative">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full move"></div>
                    </div>
                </div>
                <div className="text-center md:pt-6">
                    <p>Welcome to Janet Food Restaurant, where culinary excellence meets warm hospitality. We take pride in offering a diverse selection of meticulously prepared local and international cuisines, crafted from the finest ingredients. Whether you're starting your day with a hearty breakfast, savoring a flavorful lunch, or indulging in a delightful dinner, our inviting ambiance and exceptional service ensure a memorable dining experience. Join us and treat yourself to a feast of exquisite flavors that delight the senses.Let me know if you'd like any further refinements! 🍽️✨</p>
                    {/* <p className='py-6'>Janet Food Restaurant is a top-tier dining destination known for its delicious, freshly prepared meals and warm hospitality. Specializing in a variety of local and international cuisines, we take pride in serving high-quality dishes made from the finest ingredients. Whether you're craving a hearty breakfast, a flavorful lunch, or a delightful dinner, Janet Food Restaurant offers a cozy ambiance and exceptional service to make every dining experience memorable. Join us and indulge in a feast of flavors</p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

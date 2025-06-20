import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'

function BestSelling() {
    return (
        <div className='w-full mb-5 lg:mt-24'>
            <div className='container px-4 lg:px-[128px] mx-auto'>
                <h1 className='text-3xl font-bold mb-5'>Best Selling Store</h1>
                <div className='flex lg:gap-[2%] w-[100%] md:gap-[2%] h-auto flex-wrap lg:flex-nowrap '>

                    <div className='lg:w-[24%] md:w-[49%] w-full rounded-xl flex flex-col mb-3'>
                        <div className='w-full overflow-hidden rounded-xl'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png" 
                            alt=""className='w-full object-cover hover:scale-120 duration-200 transition-all rounded-xl'/>
                        </div>

                        <div className=' w-[60px] z-50 h-[60px] rounded-full ms-[30px] mt-[-40px] bg-amber-50'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png"
                            alt="" className='w-full h-full object-cover rounded-full'/>
                        </div>
                        <div className='ms-[30px] flex flex-col gap-1 mt-2'>
                            <h1 className='text-2xl font-bold font-text'>Staples</h1>
                            <span>Bag . Perfume</span>
                            <div className='flex items-center gap-3 text-pink-800'>
                                <TbTruckDelivery className='text-[20px]'/>
                                <span className='font-text text-[16px]'>Delivery with in 24 hours</span>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[24%] md:w-[49%] w-full rounded-xl flex flex-col mb-3'>
                        <div className='w-full overflow-hidden rounded-xl'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e74bd907803dd35b4f_store%20two-min.png" 
                            alt=""className='w-full object-cover hover:scale-120 duration-200 transition-all rounded-xl'/>
                        </div>

                        <div className=' w-[60px] z-50 h-[60px] rounded-full ms-[30px] mt-[-40px] bg-amber-50'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d253a093c1dea9a21c7_Ellipse%20287-1.png"
                            alt="" className='w-full h-full object-cover rounded-full'/>
                        </div>
                        <div className='ms-[30px] flex flex-col gap-1 mt-2'>
                            <h1 className='text-2xl font-bold font-text'>Now Delivery</h1>
                            <span>Bag . Perfume</span>
                            <div className='flex items-center gap-3 text-pink-800'>
                                <TbTruckDelivery className='text-[20px]'/>
                                <span className='font-text text-[16px]'>Delivery with in 24 hours</span>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[24%] md:w-[49%] w-full rounded-xl flex flex-col mb-3'>
                        <div className='w-full overflow-hidden rounded-xl'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e668e3265021e48a0b_store%20three-min.png" 
                            alt=""className='w-full object-cover hover:scale-120 duration-200 transition-all rounded-xl'/>
                        </div>

                        <div className=' w-[60px] z-50 h-[60px] rounded-full ms-[30px] mt-[-40px] bg-amber-50'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d25fbba384ffd156e76_Ellipse%20287-2.png"
                            alt="" className='w-full h-full object-cover rounded-full'/>
                        </div>
                        <div className='ms-[30px] flex flex-col gap-1 mt-2'>
                            <h1 className='text-2xl font-bold font-text'>Bevmo</h1>
                            <span>Bag . Perfume</span>
                            <div className='flex items-center gap-3 text-pink-800'>
                                <TbTruckDelivery className='text-[20px]'/>
                                <span className='font-text text-[16px]'>Delivery with in 24 hours</span>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[24%] md:w-[49%] w-full rounded-xl flex flex-col mb-3'>
                        <div className='w-full overflow-hidden rounded-xl'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6eaf8537c8058cf04_store%20four-min.png" 
                            alt=""className='w-full object-cover hover:scale-120 duration-200 transition-all rounded-xl'/>
                        </div>

                        <div className=' w-[60px] z-50 h-[60px] rounded-full ms-[30px] mt-[-40px] bg-amber-50'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png"
                            alt="" className='w-full h-full object-cover rounded-full'/>
                        </div>
                        <div className='ms-[30px] flex flex-col gap-1 mt-2'>
                            <h1 className='text-2xl font-bold font-text'>Quicklly</h1>
                            <span>Bag . Perfume</span>
                            <div className='flex items-center gap-3 text-pink-800'>
                                <TbTruckDelivery className='text-[20px]'/>
                                <span className='font-text text-[16px]'>Delivery with in 24 hours</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BestSelling

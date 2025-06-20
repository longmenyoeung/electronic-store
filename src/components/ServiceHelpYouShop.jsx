import React from 'react'
function ServiceHelpYouShop() {
    return (
        <div className='w-full mt-4 lg:mt-24'>
            <div className="container px-4 lg:px-[128px] mx-auto">
                <h1 className='text-3xl font-bold mb-5'>Services to help you shop</h1>

                <div className="flex flex-wrap justify-between border-b-1 border-gray-400">

                    <div className='my-3 sm:w-[48%] lg:w-[32%] bg-[#faf4f4] rounded-xl overflow-hidden h-[420px]'>
                        <div className='p-8'>  
                            <p className='text-2xl font-bold font-text text-green-950 mb-3'>Frequently asked <br /> questions</p>
                            <p className='text-[18px] mt-3'>Updates on safe Shopping in our Stores</p>
                        </div>
                        <div className='w-full overflow-hidden h-[75%]'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" alt="" className='w-full h-full object-cover bg-green-400 hover:scale-120 duration-300'/>
                        </div>
                    </div>

                    <div className='my-3 sm:w-[48%] lg:w-[32%] bg-[#faf4f4] rounded-xl overflow-hidden h-[420px]'>
                        <div className='p-8'>  
                            <p className='text-2xl font-bold font-text text-green-950 mb-3'>Online Payment <br />Process</p>
                            <p className='text-[18px] mt-3'>Updates on safe Shopping in our Stores</p>
                        </div>
                        <div className='w-full overflow-hidden h-[75%]'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png" alt="" className='w-full h-full object-cover bg-green-400 hover:scale-120 duration-300'/>
                        </div>
                    </div>

                    <div className='my-3 sm:w-[48%] lg:w-[32%] bg-[#faf4f4] rounded-xl overflow-hidden h-[420px] mb-20'>
                        <div className='p-8'>  
                            <p className='text-2xl font-bold font-text text-green-950 mb-3'>Home Delivery <br />Options</p>
                            <p className='text-[18px] mt-3'>Updates on safe Shopping in our Stores</p>
                        </div>
                        <div className='w-full overflow-hidden h-[75%]'>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png" alt="" className='w-full h-full object-cover bg-green-400 hover:scale-120 duration-300'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHelpYouShop
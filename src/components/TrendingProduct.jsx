import React,{useEffect} from 'react'
import AOS from 'aos'

function TrendingProduct() {
    useEffect(( )=>{
            AOS.init({
                duration:1500,
                delay:150,
                once: true,
            });
        }, []);
    return (
        <div className='w-full mt-5 lg:mt-24 mb-5'>
            <div className='container px-4 lg:px-[128px] mx-auto'>
                <h1 className='text-3xl font-bold mb-5'>Trending Products For You!</h1>
                <div className='flex lg:gap-[2%] overflow-x-auto w-[100%]
                    md:gap-[2%]
                    flex-wrap
                '>

                    <div className='bg-[#f5f0f0] w-[100%] lg:w-[49%] rounded-xl md:w-[49%] h-[480px] overflow-hidden mb-5' data-aos="fade-up">
                        <div className='w-full h-[65%] overflow-hidden'>
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png" 
                                alt="" className='w-full h-full object-cover rounded-t-xl hover:scale-150 duration-300 transition-all'/>
                        </div>
                        <div className='w-full p-4 ps-8 flex flex-col gap-1'>
                            <h1 className='font-text text-3xl font-bold'>Furniture Village</h1>
                            <p className='text-md'>Delivery with in 24 hours</p>
                            <div className='mt-2'>
                                <button className='btn px-8 py-6 bg-black text-white font-text text-lg rounded-4xl hover:bg-gray-600 transition-all'>Shop Now</button>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className='bg-[#f5f0f0] w-[100%] lg:w-[49%] md:w-[49%] rounded-xl h-[480px] overflow-hidden'  data-aos="fade-up">
                        <div className='w-full h-[65%] overflow-hidden'>
                            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png" 
                                alt="" className='w-full h-full object-cover rounded-t-xl hover:scale-150 duration-300 transition-all'/>
                        </div>
                        <div className='w-full p-4 ps-8 flex flex-col gap-1'>
                            <h1 className='font-text text-3xl font-bold'>Fashion World</h1>
                            <p className='text-md'>Delivery with in 24 hours</p>
                            <div className='mt-2'>
                                <button className='btn px-8 py-6 bg-black text-white font-text text-lg rounded-4xl hover:bg-gray-600 transition-all'>Shop Now</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProduct

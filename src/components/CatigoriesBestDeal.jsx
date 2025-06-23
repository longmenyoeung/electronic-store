import React, { useEffect } from 'react'
import AOS from 'aos'
import { FaHeart, FaStar } from 'react-icons/fa'
import { IoMdHeartEmpty } from 'react-icons/io'
import { ProductBestDealData } from '../store/ProductBestDealData'
import { DataProduct } from '../store/DataProduct'
function CatigoriesBestDeal() {
    useEffect(( )=>{
            AOS.init({
                duration:1500,
                delay:150,
                once: true,
            });
        }, []);
    return (
        <div className='w-full '>
            <div className="container px-4 lg:px-[128px] mx-auto py-10">
                <h2 className='text-black-500 text-3xl font-bold mb-5'>Todays Best Deals for you!</h2>
                <div className='flex gap-3 lg:gap-6 flex-wrap justify-center mb-5 lg:justify-start'>
                    <button className='border-1 border-gray-500 px-6 rounded-2xl py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer'>Gadgets</button>
                    <button className='border-1 border-gray-500 px-6 rounded-2xl py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer'>Fashoin</button>
                    <button className='border-1 border-gray-500 px-6 rounded-2xl py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer'>Toys</button>
                    <button className='border-1 border-gray-500 px-6 rounded-2xl py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer'>Education</button>
                    <button className='border-1 border-gray-500 px-6 rounded-2xl py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer'>Beauty</button>
                    <button className='border-1 border-gray-500 px-6 rounded-2xl py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer'>FItness</button>
                    <button className='border-1 border-gray-500 px-6 rounded-2xl py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all cursor-pointer'>Speaker</button>
                </div>
                <div className='mb-5 w-full overflow-hidden flex gap-1 lg:gap-6 md:gap-[2%] flex-wrap lg:flex-nowrap'>
                    {
                        ProductBestDealData.map((item) =>{
                            return(
                                <div className='lg:w-[24%] h-auto md:w-[49%] w-full mb-5' data-aos="fade-up">
                                    <div className='relative overflow-hidden  bg-[#f5f0f0] h-[320px] p-4 w-full rounded-lg'>
                                        <button className='btn btn-circle absolute end-3 top-3'>
                                            <IoMdHeartEmpty className='text-2xl'/>
                                        </button>
                                        <img src={item.Prophoto} alt="" className='h-full w-full object-center hover:scale-120 transition-all'/>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-1'>
                                        <div className='flex justify-between overflow-hidden'>
                                            <h1 className='text-[20px] font-bold text-shadow-gray-900 font-text'>{item.ProName}</h1>
                                            <span className='text-[20px] font-semibold font-text'>${item.ProPrice}<sup className='text-md font-medium'>00</sup> </span>
                                        </div>
                                        <span className='text-[14px] font-sans'>{item.describtion}</span>
                                        <div className='flex gap-1'>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <span>(21)</span>
                                        </div>
                                    </div>
                                    <button className='mt-1 border-1 cursor-pointer border-gray-500 px-6 rounded-2xl 
                                    py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all font-text'>Add to Cart</button>
                                </div>
                            )
                        })
                    }
                    

                    {/* <div className='lg:w-[24%] h-auto md:w-[49%] w-full mb-5' data-aos="fade-up">
                        <div className='relative overflow-hidden  bg-[#f5f0f0] h-[320px] p-4 w-full rounded-lg'>
                            <button className='btn btn-circle absolute end-3 top-3'>
                                <IoMdHeartEmpty className='text-2xl'/>
                            </button>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png" alt="" className='h-full w-full object-center hover:scale-120 transition-all'/>
                        </div>
                        <div className='flex flex-col gap-1 mt-1'>
                            <div className='flex justify-between overflow-hidden'>
                                <h1 className='text-[20px] font-bold text-shadow-gray-900 font-text'>AirPods Max</h1>
                                <span className='text-[20px] font-semibold font-text'>$559. <sup className='text-md font-medium'>99</sup> </span>
                            </div>
                            <span className='text-[14px] font-sans'>A perfect balance of high-fidelity audio</span>
                            <div className='flex gap-1'>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <span>(21)</span>
                            </div>
                        </div>
                        <button className='mt-1 border-1 cursor-pointer border-gray-500 px-6 rounded-2xl 
                            py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all font-text'>Add to Cart</button>
                    </div>
                    
                    <div className='lg:w-[24%] h-auto md:w-[49%] w-full mb-5' data-aos="fade-up">
                        <div className='relative overflow-hidden  bg-[#f5f0f0] h-[320px] p-4 w-full rounded-lg'>
                            <button className='btn btn-circle absolute end-3 top-3'>
                                <IoMdHeartEmpty className='text-2xl'/>
                            </button>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png" alt="" className='h-full w-full object-center hover:scale-120 transition-all'/>
                        </div>
                        <div className='flex flex-col gap-1 mt-1'>
                            <div className='flex justify-between overflow-hidden'>
                                <h1 className='text-[20px] font-bold text-shadow-gray-900 font-text'>Flower Laptop Sleeve</h1>
                                <span className='text-[20px] font-semibold font-text'>$39. <sup className='text-md font-medium'>99</sup> </span>
                            </div>
                            <span className='text-[14px] font-sans'>15 in. x 10 in. -Flap top closure</span>
                            <div className='flex gap-1'>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <span>(21)</span>
                            </div>
                        </div>
                        <button className='mt-1 border-1 cursor-pointer border-gray-500 px-6 rounded-2xl 
                            py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all font-text'>Add to Cart</button>
                    </div>

                    <div className='lg:w-[24%] h-auto md:w-[49%] w-full mb-5' data-aos="fade-up">
                        <div className='relative overflow-hidden  bg-[#f5f0f0] h-[320px] p-4 w-full rounded-lg'>
                            <button className='btn btn-circle absolute end-3 top-3'>
                                <IoMdHeartEmpty className='text-2xl'/>
                            </button>
                            <img src="https://cdn.prod.website-files.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png" alt="" className='h-full w-full object-center hover:scale-120 transition-all'/>
                        </div>
                        <div className='flex flex-col gap-1 mt-1'>
                            <div className='flex justify-between overflow-hidden'>
                                <h1 className='text-[20px] font-bold text-shadow-gray-900 font-text'>Supreme Water Bottle</h1>
                                <span className='text-[20px] font-semibold font-text'>$18. <sup className='text-md font-medium'>99</sup> </span>
                            </div>
                            <span className='text-[14px] font-sans'>Table with air purifier, stained veneer/black</span>
                            <div className='flex gap-1'>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <FaStar className='text-md text-orange-500'/>
                                <span>(21)</span>
                            </div>
                        </div>
                        <button className='mt-1 border-1 cursor-pointer border-gray-500 px-6 rounded-2xl 
                            py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all font-text'>Add to Cart</button>
                    </div> */}
                    
                </div>
                <div className='mb-5 w-full overflow-hidden flex gap-1 lg:gap-6 md:gap-[2%] flex-wrap lg:flex-nowrap'>
                    {
                        DataProduct.map((item) =>{
                            return(
                                <div className='lg:w-[24%] h-auto md:w-[49%] w-full mb-5' data-aos="fade-up">
                                    <div className='relative overflow-hidden  bg-[#f5f0f0] h-[320px] p-4 w-full rounded-lg'>
                                        <button className='btn btn-circle absolute end-3 top-3'>
                                            <IoMdHeartEmpty className='text-2xl'/>
                                        </button>
                                        <img src={item.Prophoto} alt="" className='h-full w-full object-center hover:scale-120 transition-all'/>
                                    </div>
                                    <div className='flex flex-col gap-1 mt-1'>
                                        <div className='flex justify-between overflow-hidden'>
                                            <h1 className='text-[20px] font-bold text-shadow-gray-900 font-text'>{item.ProName}</h1>
                                            <span className='text-[20px] font-semibold font-text'>$59. <sup className='text-md font-medium'>00</sup> </span>
                                        </div>
                                        <span className='text-[14px] font-sans'>{item.describtion}</span>
                                        <div className='flex gap-1'>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <FaStar className='text-md text-orange-500'/>
                                            <span>(21)</span>
                                        </div>
                                    </div>
                                    <button className='mt-1 border-1 cursor-pointer border-gray-500 px-6 rounded-2xl 
                                        py-2 text-md hover:border-orange-500 hover:bg-orange-500 hover:text-white transition-all font-text'>Add to Cart</button>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default CatigoriesBestDeal

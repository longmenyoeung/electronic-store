import React from 'react'
import { BiHelpCircle } from 'react-icons/bi'
import { FaGift } from 'react-icons/fa'
import { RiShoppingBag3Fill } from 'react-icons/ri'

function Footer() {
    return (
        <div className='mt-5'>
            <div className="container lg:px-[128px] px-4 mx-auto ">
                <div className='flex md:gap-[10%] justify-between lg:gap-[2%] border-b-1 border-gray-400 md:flex-nowrap flex-wrap'>

                    <div className='lg:w-[29%] md:w-[40%] flex gap-3 flex-col sm:w-[100%]'>
                        {/* logo */}
                        <div className='flex items-center'>
                            <div className='w-[60px] h-[60px] '>
                                <img src="logo.png" alt="" />
                            </div>
                            <p className='text-3xl font-bold ms-1'>SHOP</p>
                        </div>
                        
                        <div>
                            <p className='my-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <h2 className='font-text text-lg font-medium mb-3'>Accepted Payments</h2>
                            <div className='lg:h-[320px] md:h-[250px] h-[200px] w-full'>
                                <img src="cpayment.png" 
                                    alt="" className=' w-full h-full object-center' />
                            </div>
                        </div>

                    </div>
                    <div className=' lg:w-[69%] md:w-[60%] w-[100%] gap-2 lg:flex flex lg:justify-evenly md:grid mb-5 md:grid-cols-2 md:gap-[3%]'>
                        <div className='font-text text-lg font-medium mb-4'>
                            <h2 className='font-text text-lg font-medium mb-4'>Accepted Payments</h2>
                            <ul className='flex flex-col gap-1 md:w-[100%]'>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Fashion</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Education Product</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Frozen Food</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Beverages</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Organic Grocery</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Office Supplies</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Beauty Products</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Books</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Electronic & Gedget</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Travel Accessories</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>FItness</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Speakers</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Toys</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all  md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Furniture</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='font-text text-lg font-medium mb-4'>About Us</h2>
                            <ul className='flex flex-col gap-1 md:w-[100%]'>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Sbout Shopcart</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Careere</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Shipping & Delivery</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>New & Blog</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Help</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Press Center</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Shop By Location</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Shopcart Brands</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Affiliate & Partners</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Idea & Guilds</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='font-text text-lg font-medium mb-4'>Services</h2>
                            <ul className='flex flex-col gap-1 md:w-[100%]'>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Gift Card</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Mobile App</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Shipping & Delivery</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Order Pickup</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Account Signup</a></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='font-text text-lg font-medium mb-4'>Help</h2>
                            <ul className='flex flex-col gap-1 md:w[100%]'>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Shopcart Help</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Returns</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>track orders</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>contact us</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>feedback</a></li>
                                <li><a href="" className=' hover:text-orange-600 transition-all md:text-[16px] lg:text-[16px] text-[12px] md:hover:ps-1 lg:hover:ps-1'>Security & Fraud</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* reserved */}
                <div className=' lg:flex lg:justify-between md:gap-4 mt-3 mb-5 md:flex-wrap'>
                    <div className=' flex gap-4 lg:gap-12 md:gap-8 sm:w-[100%]'>
                        <div className='flex gap-2 items-center'>
                            <RiShoppingBag3Fill className='text-[18px] text-pink-600'/>
                            <span className='text-[16px] text-pink-600'><a href="" className='hover:text-orange-500 transition-all'>Become Seller</a></span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <FaGift className='text-[18px] text-pink-600'/>
                            <span className='text-[16px] text-pink-600'><a href="" className='hover:text-orange-500 transition-all'>Gift Cards</a></span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <BiHelpCircle className='text-[18px] text-pink-600'/>
                            <span className='text-[16px] text-pink-600'><a href="" className='hover:text-orange-500 transition-all'>Help Center</a></span>
                        </div>
                    </div>

                    <div className='lg:flex justify-between lg:gap-18 md:gap-4 sm:w-[100%] md:flex md:mt-4'>
                        <div className='flex lg:gap-12 md:gap-8 gap-4'>
                            <span className='text-[15px]'><a href="" className='hover:text-orange-500 transition-all'>Terms of Service</a></span>
                            <span className='text-[15px] '><a href="" className='hover:text-orange-500 transition-all'>Privacy & Policy</a></span>
                        </div>
                        <p className='lg:text-[15px] md:text-[15px] text-[12px]'>All Right reserved by Musemind <a href="" className='border-b'>ui/ux design</a> agency  <span className='border-l-2 ps-2'>2025</span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer

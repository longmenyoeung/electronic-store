import React from 'react'
import { BiLogoFacebookCircle, BiLogoInstagram, BiPhone } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import { FaLocationDot, FaYoutube } from 'react-icons/fa6'

function ContactHero() {
    return (
        <div className=''>
            <div className='container lg:px-[128px] mx-auto flex 
                        h-full items-center justify-between px-4 flex-wrap lg:flex-nowrap md:flex-nowrap'>
                <div className='flex flex-col gap-3 md:gap-4'>
                    <h1 className='lg:text-[54px] font-text font-bold text-sw
                            md:text-[34px] text-[32px]'>
                        Hello Guys! <br />Welcome to see Contact US!!
                    </h1>
                    <p className='lg:text-[18px] md:text-[18px] '>Welcome to our world of creativity, passion, and purpose. We are a dedicated team 
                        driven by innovation and committed to delivering excellence in everything we do.</p>
                    <div>
                        <button className='btn bg-orange-600 md:text-[24px] text-[18px] lg:text-[24px] lg:py-8 md:py-8 py-6
                        lg:px-8 md:px-8 px-6  text-[#ebe3e3] rounded-4xl
                        hover:bg-orange-500'>
                        Contact US</button>
                    </div>
                </div>
                <div className='lg:h-[100%] md:h-[80%] lg:w-[850px] md:w-[850px] w-[100%] h-[350px]'>
                    <img src="con-hero.png" alt="" 
                    className='h-full w-full object-center'/>
                </div>
            </div>

            {/* Get in Touch */}
            <div className='container lg:px-[128px] mx-auto px-4'>
                <div className='mt-5 w-[100%] flex lg:gap-[2%] md:flex-wrap lg:flex-nowrap flex-wrap mb-5'>

                    <div className='lg:w-[48%] md:w-[100%]'>
                        <h1 className='text-indigo-900 text-[32px] font-bold'>Get In Touch</h1>
                        <p className='text-[16px] py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ullam animi obcaecati omnis consequatur hic</p>
                        <div className='w-[100%] grid grid-cols-2 gap-6 mt-3'>
                            <div className='flex gap-1 items-center'>
                                <div className='bg-[#1f1919] bg-sw w-[50px] h-[50px] p-2 rounded-full'>
                                    <BiPhone className='text-[32px] text-orange-600'/>
                                </div>
                                <div>
                                    <h3 className='text-[18px] font-bold'>Phone</h3>
                                    <p className='text-[12px]'>(+855) 838 333 838</p>
                                </div>
                            </div>
                            <div className=' flex gap-1 items-center'>
                                <div className='bg-[#1f1919] bg-sw w-[50px] h-[50px] p-2 rounded-full'>
                                    <CgMail className='text-[32px] text-orange-600'/>
                                </div>
                                <div>
                                    <h3 className='text-[18px] font-bold'>Email</h3>
                                    <p className='text-[12px]'>example@gmail.com</p>
                                </div>
                            </div>
                            <div className=' flex gap-1 items-center'>
                                <div className='bg-[#1f1919] bg-sw w-[50px] h-[50px] p-2 rounded-full'>
                                    <FaLocationDot className='text-[32px] text-orange-600'/>
                                </div>
                                <div>
                                    <h3 className='text-[18px] font-bold'>Address</h3>
                                    <p className='text-[12px]'>540 Koh Pich St, Phnom Penh</p>
                                </div>
                            </div>
                            <div className=' flex gap-1 items-center'>
                                <div className='bg-[#1f1919] bg-sw w-[50px] h-[50px] p-2 rounded-full'>
                                    <BiLogoInstagram className='text-[32px] text-orange-600'/>
                                </div>
                                <div>
                                    <h3 className='text-[18px] font-bold'>Instagram</h3>
                                    <p className='text-[12px]'>@Menyoeunglong</p>
                                </div>
                            </div>

                            <div className='pt-[20px] border-gray-400 border-b-1'></div>
                            <div></div>

                            <div className='flex lg:gap-3 md:mb-5 mb-5 md:gap-3 gap-1'>
                                <h3 className='text-[18px] font-bold'>Socail Media</h3>
                                <span><BiLogoInstagram className='text-[24px] text-orange-600'/></span>
                                <span><BiLogoFacebookCircle className='text-[24px] text-orange-600'/></span>
                                <span><FaYoutube className='text-[24px] text-orange-600'/></span>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[48%] md:w-[100%] bg-sw bg-[#fffdfd] rounded-2xl p-10'>
                        <div className="w-[100%] grid grid-cols-2">
                            <label htmlFor="">Email</label>
                            <label htmlFor="">Name</label>

                            <input type="text" placeholder='Email' className='w-[95%] px-4 bg-[#c5b8b8] 
                                py-2 mt-2 rounded-lg focus:ring-2 focus:ring-orange-600'/>

                            <input type="text" placeholder='Name' className='w-[95%] px-4 bg-[#c5b8b8] 
                                py-2 mt-2   rounded-lg focus:ring-2 focus:ring-orange-600'/>
                            
                            <label htmlFor="" className='mt-10'>Phone</label>
                            <label htmlFor=""></label>
                            
                            
                            <input type="number" placeholder='Phone number' className='w-[195%] px-4 bg-[#c5b8b8] 
                                py-2 mt-2 rounded-lg focus:ring-2 focus:ring-orange-600'/>
                            <label htmlFor=""></label>

                            <label htmlFor="" className='mt-10'>Message</label>
                            <label htmlFor=""></label>

                            <textarea name="" placeholder='Message' id="" className='w-[195%] px-4 bg-[#c5b8b8] 
                                h-[150px] py-2 mt-2 mb-10 rounded-lg focus:ring-2 focus:ring-orange-600'>
                            </textarea>
                            <div></div>

                            <div>
                                <button className='btn py-4 px-12 bg-[#c5b8b8] hover:bg-[#3d3a3a] hover:text-[#c5b8b8]  transition-all text-gray-700'>SUBMIT</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='border-gray-400 border-b-1'>
                    <div className='w-[100%] mb-5 md:mt-[-50px] h-[200px] mt-[-120px] md:h-[300px] lg:h-[300px]'>
                    <iframe className='w-[100%] mt-35 h-[100%] rounded-2xl' 
                        src="https://maps.google.com/maps?q=11.580253,104.847850&z=16&output=embed"
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHero

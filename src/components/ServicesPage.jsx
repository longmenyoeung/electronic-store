import React, { useEffect } from 'react'
import { FaComputer, FaPhone } from 'react-icons/fa6'
import { LuClub } from 'react-icons/lu'
import { MdDesignServices, MdDone, MdManageAccounts } from 'react-icons/md'
import { SiConsul, SiCyberdefenders } from 'react-icons/si'
import AOS from 'aos'
function ServicesPage() {
    useEffect(()=>{
        AOS.init({
            duration:1500,
            delay:150,
            once:true
        })
    })
    return (
        <div>
            <div className='container lg:px-[128px] mx-auto flex mt-5 
                        h-full items-center justify-between px-4 flex-wrap lg:flex-nowrap md:flex-nowrap
                        '>
                <div className='flex flex-col gap-3 md:gap-4' data-aos="fade-right">
                    <h1 className='lg:text-[54px] font-text font-bold text-sw
                            md:text-[34px] text-[32px]'>
                        Hello Guys! <br />What can i help you!!
                    </h1>
                    <p className='lg:text-[18px] md:text-[18px] md:line-clamp-2'>At Our Site, we specialize in crafting high-quality, responsive 
                        websites that elevate your online presence. Whether you're a startup, small business, or enterprise, we offer tailored solutions to meet your unique goals.</p>
                        <div>
                            <button className='btn bg-orange-600 md:text-[24px] text-[18px] lg:text-[24px] lg:py-8 md:py-8 py-6
                            lg:px-8 md:px-8 px-6  text-[#ebe3e3] rounded-4xl
                            hover:bg-orange-500'>
                            Read More</button>
                        </div>
                </div>
                <div className='lg:h-[100%] md:h-[80%] lg:w-[1200px] md:w-[1000px] w-[100%] h-[350px]' data-aos="fade-left">
                    <img src="services.png" alt="" 
                    className='h-full w-full object-center'/>
                </div>
            </div>

            <div className="container lg:px-[128px] px-4 mx-auto mt-25">
                <div className='bg-[#dad5d5] p-3'>
                    <div className='text-[16px] text-indigo-900 font-bold text-center'>Our Service</div>
                    <h1 className='text-center  md:text-[35px] text-[20px] md:text-2 lg:text-[40px] font-bold text-indigo-900 text'>Our Mession Is To Make Your <br />
                        <span className='bg-orange-600 px-2'>Bussines</span>    Better Through <br />
                        Technology
                    </h1>
                </div>

                {/* box work */}
                <div className='w-[100%] mt-10 flex gap-[2%] flex-wrap'>
                    <div className='lg:w-[32%] mt-6 md:w-[48%] w-[100%] bg-[#f1eeee] 
                    bg-sw hover:translate-x-[10px] hover:translate-y-[-10px] transition-all rounded-xl p-10 
                    flex flex-col gap-3' data-aos="fade-up">
                        <div className='bg-black p-2 rounded-full w-[50px] h-[50px]'><SiCyberdefenders className='text-[32px] text-orange-600'/></div>
                        <h2 className='font-bold text-[24px] text-indigo-900 font-text'>Cyber Security Defenders</h2>
                        <p className='text-gray-500 text-[14px]'>
                            We secure your network against unauthorized access, malware, and other cyber threats using firewalls, intrusion detection systems, and regular security audits.
                        </p>
                    </div>

                    <div className='lg:w-[32%] mt-6 md:w-[48%] w-[100%] bg-[#443333] 
                    bg-sw hover:translate-x-[5px] hover:translate-y-[-10px] transition-all rounded-xl p-10 
                    flex flex-col gap-3' data-aos="fade-up">
                        <div className='bg-black p-2 rounded-full w-[50px] h-[50px]'><MdManageAccounts className='text-[32px] text-orange-600'/></div>
                        <h2 className='font-bold text-[24px] text-indigo-900 font-text'>IT Management</h2>
                        <p className='text-gray-500 text-[14px]'>
                            We design, implement, and maintain your entire IT infrastructure—servers, networks, and devices—to ensure performance, reliability, and scalability.
                        </p>
                    </div>

                    <div className='lg:w-[32%] mt-6 md:w-[48%] w-[100%] bg-[#ca8b8b] 
                    bg-sw hover:translate-x-[5px] hover:translate-y-[-10px] transition-all rounded-xl p-10 
                    flex flex-col gap-3' data-aos="fade-up">
                        <div className='bg-black p-2 rounded-full w-[50px] h-[50px]'><SiConsul className='text-[32px] text-orange-600'/></div>
                        <h2 className='font-bold text-[24px] text-indigo-900 font-text'>IT Consultstancy</h2>
                        <p className='text-gray-500 text-[14px]'>
                            We help you create a clear, cost-effective IT roadmap aligned with your business goals. From hardware to software, we ensure every tech decision adds value.
                        </p>
                    </div>

                    <div className='lg:w-[32%] md:w-[48%] w-[100%] mt-6 bg-[#2f224e] 
                    bg-sw hover:translate-x-[5px] hover:translate-y-[-10px] transition-all rounded-xl p-10 
                    flex flex-col gap-3' data-aos="fade-up">
                        <div className='bg-black p-2 rounded-full w-[50px] h-[50px]'><MdDesignServices className='text-[32px] text-orange-600'/></div>
                        <h2 className='font-bold text-[24px] text-indigo-900 font-text'>UX UI Designer</h2>
                        <p className='text-gray-500 text-[14px]'>
                            We create visually stunning, clean, and consistent interfaces that reflect your brand identity and enhance usability—across web, mobile, and apps.
                        </p>
                    </div>

                    <div className='lg:w-[32%] md:w-[48%] w-[100%] mt-6 bg-[#aea9b9] 
                    bg-sw hover:translate-x-[5px] hover:translate-y-[-10px] transition-all rounded-xl p-10 
                    flex flex-col gap-3' data-aos="fade-up">
                        <div className='bg-orange-600 p-2 rounded-full w-[50px] h-[50px]'><LuClub className='text-[32px] text-white'/></div>
                        <h2 className='font-bold text-[24px] text-indigo-900 font-text'>Cluad Computing</h2>
                        <p className='text-gray-500 text-[14px]'>
                            We create visually stunning, clean, and consistent interfaces that reflect your brand identity and enhance usability—across web, mobile, and apps.
                        </p>
                    </div>
                    <div className='lg:w-[32%] md:w-[48%] w-[100%] mt-6 bg-[#15131d] 
                    bg-sw hover:translate-x-[5px] hover:translate-y-[-10px] transition-all rounded-xl p-10 
                    flex flex-col gap-3' data-aos="fade-up">
                        <div className='bg-orange-600 p-2 rounded-full w-[50px] h-[50px]'><FaComputer className='text-[32px] text-white'/></div>
                        <h2 className='font-bold text-[24px] text-indigo-900 font-text'>Software Development</h2>
                        <p className='text-gray-500 text-[14px]'>
                            We create visually stunning, clean, and consistent interfaces that reflect your brand identity and enhance usability—across web, mobile, and apps.
                        </p>
                    </div>

                </div>

                <div className='mt-15 mb-15 bg-[#dad5d5] p-3'>
                    <div className='text-[16px] text-indigo-900 font-bold text-center'>Pricing Plan</div>
                    <h1 className='text-center md:text-[35px] text-[20px] md:text-2 lg:text-[40px] font-bold text-indigo-900 text'>
                        We Make IT Simple, Faster And Less <br />
                        Exsspensive
                    </h1>
                    <p className='text-[16px] text-center lg:line-clamp-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit, sed totam voluptas sapiente corrupti.Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Voluptates totam minus eaque magni quidem asperiores</p>
                </div>

                <div className='w-[100%] flex flex-wrap gap-[2%]'>
                    <div className='lg:w-[32%] md:w-[48%] mb-5 w-[100%] bg-[#161b24] p-10 rounded-2xl hover:translate-x-[10px] 
                        hover:translate-y-[-15px] transition-all' data-aos="fade-up">
                        <span className='text-white text-[24px] font-bold'>Basic Plan</span>
                        <p className='text-orange-600 font-bold text-[32px]'>$500/ <span className='text-white text-[16px] font-normal'>project</span> </p>

                        <div className='my-4'>
                            <p className='text-[24px] text-white'>Good for Personal Porfulio</p>
                            <p className='text-[14px] text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam vel rerum sunt non eveniet itaque, in ipsam debitis atque eligendi!</p>
                        </div>

                        <div className='mb-5'>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-white text-[14px]'>You get a good price for your site</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-white text-[14px]'>A good Pricing For 10 Peoples</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-white text-[14px]'>The best choice to choose Us</span>
                            </div>
                        </div>

                        <div>
                            <button className='btn bg-orange-600 border-0 text-white rounded-2xl px-6 py-6 text-[16px]'>Choose Plan</button>
                        </div>
                    </div>

                    <div className='lg:w-[32%] mb-5 md:w-[48%] w-[100%] bg-[#d9dee7] p-10 rounded-2xl hover:translate-x-[10px] 
                        hover:translate-y-[-15px] transition-all' data-aos="fade-up">
                        <span className='text-black font-bold text-[24px]'>Premium Plan</span>
                        <p className='text-orange-600 font-bold text-[32px]'>$1000/ <span className='text-[#0e0303] text-[16px] font-normal'>project</span> </p>

                        <div className='my-4'>
                            <p className='text-[24px] text-black'>Good for Small Company</p>
                            <p className='text-[14px] text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam vel rerum sunt non eveniet itaque, in ipsam debitis atque eligendi!</p>
                        </div>

                        <div className='mb-5'>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-black text-[14px]'>You get a good price for your site</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-black text-[14px]'>A good Pricing For 10 Peoples</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-black text-[14px]'>The best choice to choose Us</span>
                            </div>
                        </div>

                        <div>
                            <button className='btn bg-orange-600 border-0 text-balck rounded-2xl px-6 py-6 text-[16px]'>Choose Plan</button>
                        </div>
                    </div>

                    <div className='lg:w-[32%] md:w-[48%] w-[100%] bg-[#d9dee7] p-10 rounded-2xl hover:translate-x-[10px] 
                        hover:translate-y-[-15px] transition-all' data-aos="fade-up">
                        <span className='text-black font-bold text-[24px]'>Corporate Plan</span>
                        <p className='text-orange-600 font-bold text-[32px]'>$1500/ <span className='text-[#0e0303] text-[16px] font-normal'>project</span> </p>

                        <div className='my-4'>
                            <p className='text-[24px] text-black'>Good for Big Company</p>
                            <p className='text-[14px] text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam vel rerum sunt non eveniet itaque, in ipsam debitis atque eligendi!</p>
                        </div>

                        <div className='mb-5'>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-black text-[14px]'>You get a good price for your site</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-black text-[14px]'>A good Pricing For 10 Peoples</span>
                            </div>
                            <div className='flex gap-1 items-center'>
                                <span><MdDone className='text-orange-600 text-bold text-[24px]'/></span>
                                <span className='text-black text-[14px]'>The best choice to choose Us</span>
                            </div>
                        </div>

                        <div>
                            <button className='btn bg-orange-600 border-0 text-balck rounded-2xl px-6 py-6 text-[16px]'>Choose Plan</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* hero can i help u */}
            <div className='my-5 bg-amber-500 '>
                <div className='flex items-center justify-center w-[100%] lg:gap-[5%] lg:p-[10px] p-[10px]  md:gap-[5%]'>
                    <div className='w-[40%] lg:h-[550px] hidden lg:block md:block' data-aos="fade-right">
                        <img src="manfix.png" 
                        alt="" className='w-full h-full object-center'/>
                    </div>
                    <div className='h-[50%] flex flex-col gap-5'>
                        <h1 className='font-text font-bold lg:text-6xl text-white text-4xl md:text-5xl' data-aos="fade-left">Having a Problem <br />
                            We'll  Fixed it Today !
                        </h1>
                        <p className='text-2xl text-white text-[16px]' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur   adipisicing elit. Voluptate, eum?</p>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center' data-aos="fade-right">
                                <span><FaPhone className='text-orange-600 text-[24px]'/></span>
                                <p className='text-[18px] text-[#fff]'>(+855) 939 330 8333</p>
                            </div>
                            <button className='btn bg-orange-600 lg:px-10 lg:py-6 text-[18px] 
                            text-white font-text rounded-4xl hover:bg-transparent transition-all' data-aos="fade-left">Call Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage

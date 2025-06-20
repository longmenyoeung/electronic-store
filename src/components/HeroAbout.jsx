import React from 'react'

function HeroAbout() {
    return (
        <div>
        <div className='h-[650px] bg-[#f5f2f2] md:h-[550px] '>
            <div className='container lg:px-[128px] mx-auto flex 
                        h-full items-center justify-between px-4 flex-wrap lg:flex-nowrap md:flex-nowrap
                        '>
                <div className='flex flex-col gap-3 md:gap-4'>
                    <h1 className='lg:text-[54px] font-text font-bold text-sw
                            md:text-[34px] text-[32px]'>
                        Hello Guys! <br />Welcome to see about Us!!
                    </h1>
                    <p className='lg:text-[18px] md:text-[18px] '>Welcome to our world of creativity, passion, and purpose. We are a dedicated team 
                        driven by innovation and committed to delivering excellence in everything we do.</p>
                        <div>
                            <button className='btn bg-orange-600 md:text-[24px] text-[18px] lg:text-[24px] lg:py-8 md:py-8 py-6
                            lg:px-8 md:px-8 px-6  text-[#ebe3e3] rounded-4xl
                            hover:bg-orange-500'>
                            Read More</button>
                        </div>
                </div>
                <div className='lg:h-[100%] md:h-[80%] lg:w-[850px] md:w-[850px] w-[100%] h-[350px]'>
                    <img src="1hero.png" alt="" 
                    className='h-full w-full object-center'/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HeroAbout

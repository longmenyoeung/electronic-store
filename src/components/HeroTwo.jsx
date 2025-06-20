import React,{useEffect} from 'react'
import AOS from 'aos'
function HeroTwo() {
    useEffect(( )=>{
            AOS.init({
                duration:1500,
                delay:150,
                once: true,
            });
        }, []);
        return (
            <div className='w-full h-[50vh] bg-img-2 '>
                <div className="container h-full px-4 lg:px-[128px] mx-auto flex items-center justify-end">
                <div className='w-full md:w-[60%] lg:w-[38%] bg-orange-700 p-8'>
                    <h1 className='text-4xl md:text-6xl text-white font-bold' data-aos="fade-down-left">
                    Get 5% Cash back on $200
                    </h1>
                    <p className='text-xl md:text-2xl mt-10 text-white' data-aos="fade-down-left">
                    Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                    </p>
                    <button className='px-10 py-3 hover:bg-gray-200 bg-white rounded-4xl cursor-pointer mt-5 text-2xl ' data-aos="fade-down-right">
                        Learn More
                    </button>
                </div>
                </div>
            </div>
    )
}

export default HeroTwo
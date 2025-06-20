import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(( )=>{
        AOS.init({
            duration:1500,
            delay:150,
            once: true,
        });
    }, []);

    return (
        <div className='w-full h-[70vh] bg-img'>
            <div className="container h-full px-4 lg:px-[128px] mx-auto flex items-center">
            <div className='w-full md:w-[60%] lg:w-[38%] '>
                <h1 className='text-4xl md:text-6xl text-white font-bold'
                data-aos="fade-down">
                    Shopping and
                    department store.
                </h1>
                <p className='text-xl md:text-2xl mt-10 text-white'
                data-aos="fade-down-left">
                    Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                </p>
                <button className='px-10 py-3 hover:bg-orange-700 bg-orange-600 rounded-4xl cursor-pointer mt-5 text-2xl text-white'
                data-aos="fade-down-left">
                    Learn More
                </button>
            </div>
            </div>
        </div>
    )
}

export default Hero
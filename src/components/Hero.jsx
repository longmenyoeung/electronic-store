import React from 'react'

function Hero() {
    return (
        <div className='w-full h-[70vh] bg-img'>
            <div className="container h-full px-4 lg:px-[128px] mx-auto flex items-center">
            <div className='w-full md:w-[60%] lg:w-[38%] '>
                <h1 className='text-4xl md:text-6xl text-white font-bold'>
                    Shopping and
                    department store.
                </h1>
                <p className='text-xl md:text-2xl mt-10 text-white'>
                    Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.
                </p>
                <button className='px-10 py-3 hover:bg-orange-700 bg-orange-600 rounded-4xl cursor-pointer mt-5 text-2xl text-white'>
                    Learn More
                </button>
            </div>
            </div>
        </div>
    )
}

export default Hero
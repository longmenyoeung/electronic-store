import React,{useEffect} from 'react'
import AOS from 'aos'
function HeroThree() {
    useEffect(() =>{
        AOS.init({
            duration:1500,
            delay:150,
            once: true
        })
    })
    
    return (
        <div className='mb-5 bg-amber-500 '>
            <div className='flex items-center justify-center w-[100%] lg:gap-[5%] lg:p-[10px] p-[10px]  md:gap-[5%]'>
                <div className='w-[40%] lg:h-[450px] hidden lg:block md:block' data-aos="fade-right">
                    <img src="https://static.vecteezy.com/system/resources/previews/060/360/909/non_2x/customer-making-a-payment-with-a-credit-card-at-a-retail-store-checkout-counter-file-no-background-customer-paying-with-his-credit-card-free-png.png" 
                    alt="" className='w-full h-full object-center'/>
                </div>
                <div className='h-[50%] flex flex-col gap-4' data-aos="fade-left">
                    <h1 className='font-text font-bold lg:text-6xl text-white text-4xl md:text-5xl'>Get 5% Cash back</h1>
                    <p className='text-2xl text-white'>on Shopcart.com</p>
                    <div>
                        <button className='btn bg-orange-600 lg:px-10 lg:py-7 text-[24px] 
                        text-white font-text rounded-4xl hover:bg-transparent transition-all'>Learn More</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroThree

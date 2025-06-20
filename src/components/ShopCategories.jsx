import React,{useEffect} from 'react'
import categories from '../data/categories'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ShopCategories() {
    useEffect(( )=>{
            AOS.init({
                duration:1500,
                delay:150,
                once: true,
            });
        }, []);
        return (
            <div className='w-full mt-4 lg:mt-24'>
                <div className="container px-4 lg:px-[128px] mx-auto">
                    <h1 className='text-3xl font-bold mb-5'>Shop Our Top Categories</h1>

                    <div className="flex flex-wrap gap-2 justify-between">
                        {
                            categories.map((v,i)=>{
                                return(
                                    <div className='w-[48.5%] md:w-[32%] lg:w-[16%] h-[230px] bg-secondary rounded-xl overflow-hidden relative' data-aos="fade-down">
                                        <h1 className='absolute z-3 left-1/2 transform -translate-x-1/2 top-3 font-bold text-white text-2xl'>
                                            {v.title}
                                        </h1>
                                        <img src={v.img} alt="No Image" 
                                        className='w-full h-full object-cover hover:scale-105 duration-300 cursor-pointer' 
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
        )
}

export default ShopCategories
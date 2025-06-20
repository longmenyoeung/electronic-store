
import React, { useContext } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import Skelaton from './Skelaton';
import ProductContext from '../store/ProductContext';

function BestDealProducts() {
    const {items,isLoading}  = useContext(ProductContext)

    return ( 
    <div className='w-full mt-4 lg:mt-24'>
        <div className="container px-4 lg:px-[128px] mx-auto">
            <h1 className='text-3xl font-bold mb-5'>Todays Best Deals for you!</h1>

            <div className="overflow-x-auto mb-5">
                <div className='flex flex-nowrap gap-5'>

                    {/* card product */} 
                    {
                        isLoading ? 
                        (
                            <Skelaton/>
                        )
                        :
                        (            
                        items.map((v,i)=>{
                            return(
                                <div key={i} className='w-[49%] md:w-[32%] shrink-0'>
                                    <div className="w-full h-[350px] rounded-lg overflow-hidden relative">
                                        <button className='btn btn-circle absolute end-3 top-3'>
                                            <IoMdHeartEmpty className='text-2xl'/>
                                        </button>   
                                        <img src={v.image} alt="" className='w-full h-full object-contain'/>
                                    </div>
                                    <div className='py-5 flex justify-between'>
                                        <div>
                                            <p className='text-xl line-clamp-1 font-bold'>{v.name}</p>
                                            <p className='line-clamp-2 my-2 text-gray-600'>
                                                {v.description}
                                            </p>
                                            <p className='text-orange-600 text-xl'>Rating {v.rating}</p>
                                            <button className='border px-5 sm:px-10 py-3 rounded-3xl cursor-pointer hover:bg-orange-600 hover:text-white duration-300 mt-3'>
                                                Add Cart
                                            </button>
                                        </div>
                                        <div>
                                            <p className='text-xl font-bold'>${v.price}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })              
                        )
                    }
                </div>  
            </div>
        </div>
    </div>
)
}

export default BestDealProducts
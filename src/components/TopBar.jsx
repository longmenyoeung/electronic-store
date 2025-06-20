import React from 'react'

function TopBar() {
  return (
    <div className='bg-orange-600 py-1 '>
        <div className='container px-2 lg:px-[128px] mx-auto text-white flex justify-between'>

            {/* telepphone */}
            <p>
                +855 096 852 3047
            </p>
        

            {/* promotion text */}
            <p className='hidden lg:block'>
                Get 50% Off on Selected Items &emsp;    
                |&emsp;
                Shop Now
            </p>
        
            {/* location and language */}
            <div>
                <select className='border-0 outline-0 pe-4'>
                <option value="" className='text-black'>EN</option>
                <option value="" className='text-black'>KH</option>
                </select>
                <select className='border-0 outline-0 pe-4 ms-5'>
                <option value="" className='text-black'>Cambodia</option>
                <option value="" className='text-black'>China</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default TopBar
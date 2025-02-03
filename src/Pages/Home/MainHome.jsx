import React from 'react'
import { Link } from 'react-router-dom'

function MainHome() {
  return (
    <div className='text-white'>
      <div className='text-center mt-[100px] max-sm:px-[20px] max-sm:mt-[50px] max-sm:mb-[60px]'>
        
       <h1 className='text-5xl md:text-6xl font-bold mb-[10px] max-sm:text-4xl'>Make your Outfit <span className='bg-gradient-to-r from-violet-600 to-violet-950 bg-clip-text text-transparent'>Wonderful</span></h1>
       <div>
        <p className='text-xl text-zinc-400 max-sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere soluta iusto expedita <br /> veniam asperiores, cumque id, tempora numquam voluptatibus.</p>
        <div className='flex justify-center gap-[15px] mt-[50px] items-center'>
            <div>
                <Link to='/home' className='bg-violet-700 py-[15px] px-[20px] rounded-[5px] hover:bg-violet-600'>Start Shopping</Link>
            </div>
            <div>
                <a href="#" className='bg-[#1A1A1A] py-[15px] px-[20px] rounded-[5px] hover:bg-[#2f3030]'>Learn more</a>
            </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default MainHome

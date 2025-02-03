import React from 'react'

function About() {
  return (
    <div className='text-white flex items-center justify-center'>
      <div className='w-3/4 max-sm:w-[90%] [&>p]:text-lg [&>p]:lg:text-xl [&>h1]:lg:text-3xl pt-20'>
        <h1 className='text-3xl font-bold text-[#703bf7] mt-6 mb-3'>About Developer</h1>
        <p className='text-'>Hello there! I'm <span className=' font-semibold text-[#703bf7]'>Bro</span> , the passionate developer behind this website. With a keen eye for detail and a love for crafting seamless digital experiences, I set out to create a unique and user-friendly online shopping platform.</p>
        <h1 className='text-3xl font-bold text-[#703bf7] mt-6 mb-3'>Frameworks and Technologies Used</h1>
        <p className='text-'>In the development of this website, I've harnessed the power of the following frameworks and technologies to create a modern, single-page application (SPA):</p>
        <div className='flex justify-evenly text-6xl my-8 text-[#919090]'>
        <span className='hover:text-[#05a8e8]'><i class='bx bxl-react'></i></span>
        <span className='hover:text-[#f28322]'><i class='bx bxl-html5' ></i></span>
        <span className='hover:text-[#05a8e8]'><i class='bx bxl-tailwind-css' ></i></span>
        </div>
        <h1 className='text-3xl font-bold text-[#703bf7] mt-6 mb-3'>A Glimpse into the Backend:</h1>
        <p className='text-'>While my expertise primarily lies in frontend development, I've integrated Node.js and Express.js on the backend to ensure a robust and efficient server-side infrastructure. This combination allows for smooth communication between the frontend and the server, ensuring a seamless user experience.</p>
        <div className='flex justify-evenly text-6xl my-8 text-[#919090]'>
        <span className='hover:text-[#25a816]'><i class='bx bxl-nodejs' ></i></span>
        <span className='hover:text-white'>ex</span>
        </div>
        <h1 className='text-3xl font-bold text-[#703bf7] mt-6 mb-3'>Let's Connect</h1>
        <p className='text-'>Explore the website, discover the offerings, and if you have any questions or suggestions, I'm here to listen. Your journey through this online shopping experience is as important to me as it is to you. Happy exploring!</p>
        <div className='flex justify-evenly my-8 text-[#919090] text-6xl'>
        <span className='hover:text-[#3376b8] cursor-pointer'><i class='bx bxl-linkedin-square' ></i></span>
        <span className='hover:text-white cursor-pointer'><i class='bx bxl-github' ></i></span>
        </div>
      </div>
    </div>
  )
}

export default About

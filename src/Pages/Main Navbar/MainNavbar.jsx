import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate()
  const logid=()=>{
    localStorage.removeItem("accessToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTczNzUyMDk0MiwiZXhwIjoxNzM5MjQ4OTQyfQ.d1MyIGaR7ON1Z5uHrIhu1fCdOku5P7GQK3vqGVehgb0")
    navigate('/login')
  }
  const signupd=()=>{
    localStorage.removeItem("accessToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTczNzUyMDk0MiwiZXhwIjoxNzM5MjQ4OTQyfQ.d1MyIGaR7ON1Z5uHrIhu1fCdOku5P7GQK3vqGVehgb0")
    navigate('/signup')
  }
  return (
    <div className="text-white h-[80px]  z-10 w-full">
      <nav className="py-[10px] bg-[url(https://i.pinimg.com/474x/2c/6e/4c/2c6e4c01fd27335af49946adfd0b944a.jpg)] bg-center max-xl:fixed w-full border-b-[1.5px] border-[#262626] py-[15px] max-sm:py-[10px] z-10">
        <button
          className="xl:hidden text-[#703BF7] border-solid border-[1.5px] border-[#262626] py-[5px] px-[10px] text-2xl font-bold rounded-[10px] bg-black absolute left-[5%] max-sm:top-[10%] md:top[15%]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i
            class={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars-staggered"}`}
          ></i>
        </button>
        <div className="flex items-center justify-end min-[595px]:justify-around max-xl:px-[10px] ">
          <a
            href="/"
            className="lg:text-5xl md:text-4xl sm:text-xl xl:mr-8 font-bold"
          >
            <h1 className="xl:mt-[-5px] lg:mt-[-5px] max-sm:text-xl">
              React Shop
            </h1>
          </a>

          {/* <div className="border-solid border-[1.5px] border-[#262626] rounded-full px-[50px] bg-black max-xl:border-none max-xl:hidden"> */}
          <ul
            className={`flex flex-col items-center xl:flex-row xl:justify-between xl:w-[400px] absolute xl:static top-[53px] right-[1%] max-xl:bg-black max-xl:w-full max-xl:h-screen max-xl:z-10 transition-transform border-solid border-[1.5px] border-[#262626] rounded-full max-xl:rounded-none px-[50px] bg-black max-xl:border-none ${
              isOpen ? "block" : "max-xl:hidden"
            }`}
          >
            <li className="my-5 xl:my-2 text-[20px]">
              <a href="/">Home</a>
            </li>
            <li className="my-5 xl:my-2 text-[20px]">
              <a href="/home">Products</a>
            </li>
            <li className="my-5 xl:my-2 text-[20px]">
              <a href="/about">About</a>
            </li>
          </ul>
          {/* </div> */}
          <div className="flex items-center justify-between text-md xl:text-xl">
            <div className="flex items-center font-semibold">
              <button
                onClick={logid}
                className="text-sm md:text-base xl:text-xl mx-2 flex items-center text-white border-solid border-[1.5px] border-[#262626] rounded-[8px] py-[5px] px-[6px] bg-black"
              >
                {" "}
                <i class="fa-solid fa-right-to-bracket pr-[5px]"></i>Login
              </button>

              <button
                onClick={signupd}
                className="text-sm md:text-base xl:text-xl mx-2 flex items-center text-white border-solid border-[1.5px] border-[#262626] rounded-[8px] py-[5px] px-[6px] bg-black"
              >
                {" "}
                <i class="fa-solid fa-user-plus pr-[5px]"></i>Sign Up
              </button>
              <a href="https://github.com/mohammedafnankk/shopping">
              <i class="fa-brands fa-github text-white text-[25px] bg-black max-xl:hidden py-[6px] px-[6px] border-solid border-[1.5px] border-[#262626] rounded-[8px] "></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainNavbar;

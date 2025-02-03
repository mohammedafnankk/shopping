import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const navigate = useNavigate ('')
  const [fname,setFname]= useState('')
  const [sname,setSname]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]=useState('')
  var names= fname+" "+sname 
const signup =(e)=>{
  e.preventDefault();
  axios.post('https://api.escuelajs.co/api/v1/users/',{
    "name": names,
    "email": email,
    "password": password,
    "avatar": "https://api.lorem.space/image/face?w=640&h=480"
  }).then(res =>console.log(res))
  .catch(err => console.log(err))
.then(()=>{
  navigate('/login')
  
toast.success("Sign Up Successfully.Please login and enjoy your shopping")
})

}



  return (
    <div className="h-screen bg-black p-10 max-sm:p-0">
      <div className="bg-[#1a1a1a] border-solid border-[5px] border-[#262626] rounded-[10px] py-[60px] pb- px-[50px] mb-[90px] md:px-[30px] max-sm:pr-[20px] max-sm:px-[20px]">
        <h1 className="text-[#703bf7] text-center mb-[25px] mt-[-35px] text-4xl font-bold">
          Sign Up
        </h1>
        <form onSubmit={signup}>
           <div className="grid grid-cols-[1fr,1fr] grid-y-[20px] pl-[50px]  md:pl-[40px] sm:pl-0 max-sm:grid-cols-1 max-sm:pl-0" >

          <div className="">
            <label className="text-white font-medium pl-[8px] ">
              First Name
            </label>
            <br />
            <input
              type="text"
              className="bg-[#141414] border-solid border-[1.5px] border-[#262626] p-4 rounded-[10px] text-slate-100 w-[85%] outline-none focus:outline-violet-700 mb-11 focus:border-none outline-1 text-[15px] max-sm:mb-[20px] max-sm:w-full"
              required
              value={fname}
              onChange={(event)=>setFname(event.target.value)}
            />
          </div>
          <div className="">
            <label className="text-white font-medium pl-[8px]">Last Name</label>
            <br />
            <input
              type="text"
              className="bg-[#141414] border-solid border-[1.5px] border-[#262626] p-4 rounded-[10px] text-slate-100 w-[85%] outline-none focus:outline-violet-700 focus:border-none outline-1 text-[15px] max-sm:mb-[20px] max-sm:w-full"
              required
              value={sname}
              onChange={(event)=>setSname(event.target.value)}
            />
          </div>
          <div className="">
            <label className="text-white font-medium pl-[8px]">
              Email Address
            </label>
            <br />
            <input
              type="email"
              className="bg-[#141414] border-solid border-[1.5px] border-[#262626] p-4 rounded-[10px] text-slate-100 w-[85%] outline-none focus:outline-violet-700 focus:border-none outline-1 text-[15px] max-sm:mb-[20px] max-sm:w-full"
              required
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            />
          </div>
          <div className="">
            <label className="text-white font-medium pl-[8px]">Password</label>
            <br />
            <input
              type="password"
              className="bg-[#141414] border-solid border-[1.5px] border-[#262626] p-4 rounded-[10px] text-slate-100 w-[85%] outline-none focus:outline-violet-700 focus:border-none outline-1 text-[15px] max-sm:mb-[20px] max-sm:w-full"
              required
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
          </div>
           </div>
          <div className="p-[10px] text-center">
            <button
              type="submit"
              className="text-white py-[15px] px-[120px] bg-[#703bf7] border-none rounded-[8px] mb-[10px] mt-[20px]"
            >
              Sign Up
            </button>
            <br />
          </div>
        </form>
        <div className="text-center">
          {/* <button className="text-white py-[15px] px-[128px] bg-[#333333] border-none rounded-[8px] mb-[10px] mt-[20px] ">
            Login
          </button> */}
          <button  className="text-white py-[15px] px-[128px] bg-[#333333] border-none rounded-[8px] mb-[10px] mt-[20px] "><Link to='/login'>Login</Link></button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

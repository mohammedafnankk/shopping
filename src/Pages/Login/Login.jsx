import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Login.css";
function Login() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    axios.post('https://api.escuelajs.co/api/v1/auth/login',{
      "email":email,
      "password":password,
    }).then(()=>{
      
    localStorage.setItem("accessToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTczNzUyMDk0MiwiZXhwIjoxNzM5MjQ4OTQyfQ.d1MyIGaR7ON1Z5uHrIhu1fCdOku5P7GQK3vqGVehgb0")  
      toast.success('Login Successfully!.Enjoy your shopping...')
      navigate('/home')
    })
    .catch(()=>{
      toast.error("You are not signed up to this app with this account.Please check your email and password")
     
      
    })
    .then(()=>{
     
      // toast.success('Login Successfully!')
    })
    // axios.get('https://api.escuelajs.co/api/v1/auth/profile',{
    //    "Authorization": "Bearer{}"
    // })
    //   .catch((err)=>{
    //     console.log(err);
        
    //   })
      

    axios.get('https://api.escuelajs.co/api/v1/users/').then((response)=>{
      console.log(response);
      
    }).catch((err)=>{
      console.log(err);
      
    })
    
  };
  return (
    <div className="p-10 max-sm:p-0 max-sm:pb-[85px]">
      <div className="bg-[#1a1a1a] border-solid border-[5px] border-[#262626] rounded-[10px]">
        <form
          onSubmit={handleSubmit}
          action="#"
          className="flex justify-center  flex-col px-64 max-sm:px-[20px]"
        >
          <h1 className="text-[#703bf7] text-center  text-4xl font-bold pt-8 pb-6">
            Login
          </h1>

          <label className="text-white font-medium pl-2">Email Address</label>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            required
            className="bg-[#141414] border-solid border-[1.5px] border-[#262626] p-4 rounded-[10px] text-slate-100 text-[15px] outline-none focus:outline-violet-700 focus:border-none outline-1 max-sm:w-full"
          />
          <br />
          <label className="text-white font-medium pl-2">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            required
            className="bg-[#141414] border-solid border-[1.5px] border-[#262626] p-4 rounded-[10px] text-slate-100 text-[15px] outline-none focus:outline-violet-700 focus:border-none outline-1 max-sm:w-full"
          />

          <div className="p-[10px] text-center">
            <button className="text-white py-[15px] px-[128px] bg-[#703bf7] border-none rounded-[8px] mb-[10px] mt-[20px]">
              Login
            </button>
          </div>
        </form>
        <div className="text-center pb-11">
          <button className="text-white py-[15px] px-[120px] bg-[#333333] border-none rounded-[8px] mb-[10px] mt-[20px]">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react'
import NavBar from './NavBar'
import { KeyRound,Mail,Eye, EyeOff} from 'lucide-react'
const SignIn = () => {
    const [showPassword,setshowPassword] = useState("False")
    const handelPasword=()=>{
        setshowPassword((password)=>!password)
    }
    return (
        <div className='flex flex-col items-center w-full min-h-screen p-[15px] bg-[#0F172A]'>
            <NavBar/>
            <h1 className='font-bold m-[49px] text-4xl text-amber-50' >Welcome Back!</h1>
            
            <div className='flex   flex-col border  border-[#10105ec7] shadow-2xl shadow-amber-50 bg-[#132142] w-[400px] h-[350px] rounded-3xl'>
                <p className='text-2xl text-center font-semibold m-[25px] text-amber-50'>SignIn</p>
                <form action="" className='flex flex-col pt-[5px]'>
                   <div className='relative'>
                    <p className='text-amber-50 ml-[40px] font-bold'>Email</p>
                    <input type="email" placeholder='Enter your email' 
                    className='border-2 p-[5px] w-[300px] m-[5px] ml-[40px] my-[10px] pl-[40px] not-first:rounded-2xl text-amber-50'/>
                    <Mail className='absolute top-10 left-13 text-amber-50'/>
                    </div> 
                    <div className='relative'>
                        <p className='text-amber-50 ml-[40px] font-bold'>Password</p>
                    <input type={showPassword ? "password" : "text"} placeholder='Enter your password' 
                    className='border-2 p-[5px] w-[300px] m-[5px] ml-[40px] my-[10px] pl-[40px] rounded-2xl text-amber-50'/>
                    <KeyRound className='absolute top-10 left-13 text-amber-50'/>
                    <p onClick={handelPasword}>{showPassword ? <Eye className="absolute top-10 text-amber-50 left-75" /> : <EyeOff className='absolute top-10 text-amber-50 left-75'/>} </p>
                    </div>
                    
                    <button className='border-1 rounded-2xl ml-[150px] mt-[25px] font-semibold shadow-lg hover:shadow-2xl shadow-amber-50 transition-shadow duration-300 p-[5px] w-[100px] bg-amber-50 text-[#0F172A]'>SignIn</button>
                </form>
            </div>
            
        </div>
    )
}

export default SignIn
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { CircleUser, KeyRound, Mail, User, Eye, EyeOff } from 'lucide-react'

const SignUp = () => {
    const [errors, seterrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const [showPassword, setshowPassword] = useState("False")
    const [showConfPassword, setConfshowPassword] = useState("False")
    const [error, seterror] = useState("")
    const [success, setsuccess] = useState("")
    const [formData, setformData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const handelPassword = () => {
        setshowPassword((password) => !password)
    }
    const handelConfPassword = () => {
        setConfshowPassword((confpassword) => !confpassword)
    }
    const handelchange = (event) => {
        setformData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
        seterrors((errors)=>({
                ...errors,
                [event.target.name]: ""
            }))
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="Please Enter your Full Name";
        }
        if(!formData.email){
            newErrors.email="Please Enter your Email";
        }
        if(!formData.password){
            newErrors.passwor="Please Enter your password";
        }
        if(!formData.confirmpassword){
            newErrors.confirmpassword="Please confirm your password";
                }
        else if(formData.password !== formData.confirmpassword){
            newErrors.confirmpassword="Passwords Mismatched!";
        }
        if(Object.keys(newErrors).length > 0){
            seterrors(newErrors);
        }
        else{
            setsuccess("Your Account created successfully")
            setformData({
                fullName: "",
                email: "",
                password: "",
                confirmpassword: ""
            })
        }
    }
    return (

        <div className='flex flex-col items-center min-h-screen p-[15px] bg-[#0F172A]'>
            <NavBar />

            <h1 className='font-bold mt-[25px] text-4xl text-amber-50' >Get Started</h1>
            <h5 className='font-semibold m-[10px] text-amber-50'>by</h5>
            <div className='flex   flex-col border  border-[#10105ec7] shadow-2xl shadow-amber-50 bg-[#132142] w-[400px] h-[580px] rounded-3xl'>
                <p className='text-2xl text-center font-semibold m-[25px] text-amber-50'>Creating Your Account</p>
                <form onSubmit={handelSubmit} action="" className='flex flex-col pt-[5px]'>
                    <div className='relative'>
                        <p className='text-amber-50 ml-[40px] font-bold'>Full Name</p>
                        <input

                            value={formData.fullName} onChange={handelchange} type="text" name='fullName' placeholder='Enter your Name'
                            className='border-2 p-[5px] w-[300px] m-[5px] ml-[40px] my-[10px] pl-[40px] rounded-2xl text-amber-50' />
                        <User className='absolute top-10 left-13 text-amber-50' />
                        {errors.fullName && <p className='flex flex-col items-center text-red-500'>{errors.fullName}</p>}
                    </div>
                    <div className='relative'>
                        <p className='text-amber-50 ml-[40px] font-bold'>Email</p>
                        <input value={formData.email} onChange={handelchange} type="email" name='email' placeholder='Enter your email'
                            className='border-2 p-[5px] w-[300px] m-[5px] ml-[40px] my-[10px] pl-[40px] not-first:rounded-2xl text-amber-50' />
                        <Mail className='absolute top-10 left-13 text-amber-50' />
                        {errors.email && <p className='flex flex-col items-center text-red-500'>{errors.email}</p>}
                    </div>
                    <div className='relative'>
                        <p className='text-amber-50 ml-[40px] font-bold'>Password</p>
                        <input value={formData.password} onChange={handelchange} type={showPassword ? "password" : "text"} name='password' placeholder='Enter your password'
                            className='border-2 p-[5px] w-[300px] m-[5px] ml-[40px] my-[10px] pl-[40px] rounded-2xl text-amber-50' />
                        <KeyRound className='absolute top-10 left-13 text-amber-50' />
                        {errors.password && <p  className='flex flex-col items-center text-red-500'>{errors.password}</p>}
                        <p onClick={handelPassword}>{showPassword ? <Eye className="absolute top-10 text-amber-50 left-75" /> : <EyeOff className="absolute top-10 text-amber-50 left-75" />}</p>
                    </div>
                    <div className='relative'>
                        <p className='text-amber-50 ml-[40px] font-bold'>Confirm Password</p>
                        <input value={formData.confirmpassword} onChange={handelchange} type={showConfPassword ? "password" : "text"} name='confirmpassword' placeholder='Re-Enter your password'
                            className='border-2 p-[5px] w-[300px] m-[5px] ml-[40px] my-[10px] pl-[40px] rounded-2xl text-amber-50' />
                        <KeyRound className='absolute top-10 left-13 text-amber-50' />
                        {errors.confirmpassword && <p className='flex flex-col items-center text-red-500'>{errors.confirmpassword}</p>}
                        <p onClick={handelConfPassword}>{showConfPassword ? <Eye className="absolute top-10 text-amber-50 left-75" /> : <EyeOff className="absolute top-10 text-amber-50 left-75" />}</p>
                    </div>
                    {success && <p className="flex flex-col items-center text-green-500">{success}</p>}

                    <button type='submit' className=' rounded-2xl ml-[150px] shadow-lg hover:shadow-2xl shadow-amber-50 transition-shadow duration-300 font-semibold mt-[15px] p-[5px] w-[100px] bg-amber-50 text-[#0F172A] flex'><CircleUser /><p className='pl-[5px]'>SignUp</p></button>
                    <p className='flex flex-col items-center mt-[15px] text-amber-50 font-semibold'>Already have an Account?<Link to="/signin" className='text-amber-100'> Sign In here</Link></p>
                </form>
            </div>

        </div>
    )
}

export default SignUp
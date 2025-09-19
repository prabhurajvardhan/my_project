import React from 'react'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center min-h-screen p-[75px] bg-[#0F172A]'>
            <h1 className='font-bold mt-[25px] text-4xl text-amber-50' >Get Started</h1>
            <h5 className='font-semibold m-[10px] text-amber-50'>by</h5>
            <div className='flex  items-center flex-col border border-[#10105ec7] shadow-amber-50 bg-[#132142] w-[400px] h-[500px] rounded-3xl'>
                <p className='text-2xl font-semibold m-[25px] text-amber-50'>Creating Your Account</p>
                <form action="" className='flex flex-col pt-[5px]'>
                    <p className='text-amber-50'>Full Name</p>
                    <input type="text" placeholder='Enter your Name' 
                    className='border-1 p-[5px] m-[5px] rounded-2xl text-amber-50' />
                    <p className='text-amber-50'>Email</p>
                    <input type="text" placeholder='Enter your email' 
                    className='border-1 p-[5px] m-[5px] rounded-2xl text-amber-50'/>
                    <p className='text-amber-50'>password</p>
                    <input type="text" placeholder='Enter your password' 
                    className='border-1 p-[5px] m-[5px] rounded-2xl text-amber-50'/>
                    <p className='text-amber-50'>confirm password</p>
                    <input type="text" placeholder='Re-Enter your password'
                    className='border-1 p-[5px] m-[5px] rounded-2xl text-amber-50'/>
                    <button className='border-1 rounded-2xl mt-[25px] p-[5px] bg-amber-50 text-[#0F172A]'>signup</button>
                </form>
            </div>
            
        </div>
    )
}

export default SignUp
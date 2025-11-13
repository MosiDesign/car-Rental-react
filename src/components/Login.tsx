import React, { useState } from 'react'
import {trueOfFalse} from '../store/trueAndFalse'

function Login() {
  const {openLogin, setOpenLogin} = trueOfFalse();
  const [signUp, setSignUp] = useState(false)
  if (!openLogin) return null;

  return (
    <div onClick={() => {setOpenLogin(false)}} className='w-full h-full bg-black/50 fixed top-0 left-0 z-20 flex justify-center items-center'>
        {!signUp && <div onClick={(e) => {e.stopPropagation()}} className='flex flex-col w-[352px] p-8 py-12 h-auto bg-white rounded-lg shadow-xl gap-4'>
            <div className='text-[24px] text-center font-medium'>
                <span className='text-[#2563EB]'>User</span> Login
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[14px]'>Email</span>
                <input type="email" placeholder='Type here' className='rounded-sm px-2 py-1.5 placeholder:text-[13px] border border-gray-200 text-gray-600 outline-[#2563EB]' />
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[14px]'>Password</span>
                <input type="password" placeholder='Type here' className='rounded-sm px-2 py-1.5 placeholder:text-[13px] border border-gray-200 text-gray-600 outline-[#2563EB]' />
            </div>
            <div className='flex flex-col'>
                <p className='text-sm'>Create an account? <span onClick={() => {setSignUp(true)}} className='text-[#2563eb] cursor-pointer'>click here</span></p>
                <button className="px-8 py-2 rounded-md bg-[#2563EB] text-sm font-medium text-white mt-4 cursor-pointer hover:bg-[#1F58D8] transition-all duration-150 ease-in-out">
                    Login
                </button>
            </div>
        </div>
        }
        {signUp && <div onClick={(e) => {e.stopPropagation()}} className='flex flex-col w-[352px] p-8 py-12 h-auto bg-white rounded-lg shadow-xl gap-4'>
            <div className='text-[24px] text-center font-medium'>
                <span className='text-[#2563EB]'>User</span> Login
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[14px]'>Name</span>
                <input type="text" placeholder='Type here' className='rounded-sm px-2 py-1.5 placeholder:text-[13px] border border-gray-200 text-gray-600 outline-[#2563EB]' />
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[14px]'>Email</span>
                <input type="email" placeholder='Type here' className='rounded-sm px-2 py-1.5 placeholder:text-[13px] border border-gray-200 text-gray-600 outline-[#2563EB]' />
            </div>
            <div className='flex flex-col gap-1'>
                <span className='text-[14px]'>Password</span>
                <input type="password" placeholder='Type here' className='rounded-sm px-2 py-1.5 placeholder:text-[13px] border border-gray-200 text-gray-600 outline-[#2563EB]' />
            </div>
            <div className='flex flex-col'>
                <p className='text-sm'>Already have account? <span onClick={() => {setSignUp(false)}} className='text-[#2563eb] cursor-pointer'>click here</span></p>
                <button className="px-8 py-2 rounded-md bg-[#2563EB] text-sm font-medium text-white mt-4 cursor-pointer hover:bg-[#1F58D8] transition-all duration-150 ease-in-out">
                    Login
                </button>
            </div>
        </div>}
    </div>
    
  )
}

export default Login
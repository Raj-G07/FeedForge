import React from 'react'
import { useEffect } from 'react';
import { FcGoogle } from "react-icons/fc"

import { useNavigate, useSearchParams } from 'react-router-dom'

const LoginWithGoogle = () => {
    const navigate = useNavigate();
    const LoginWithGoogle =()=>{
                window.open("http://localhost:8000/api/v1/auth/login-with-google", "_self")
    }
    const [searchParams]=  useSearchParams();

  useEffect(() => { 
      const token = searchParams.get("token") ||''
      console.log(token);
      if (token){
          localStorage.setItem("token",token)
          navigate("/dashboard")
      }else{
          navigate("/")
      }

  }, [searchParams])
  
  return (
    <>
 <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-sm p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Welcome back</h2>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to your account to provide feedback
          </p>
        </div>

        <button className="w-full border border-gray-300 rounded-md py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition" onClick={LoginWithGoogle}>
          <FcGoogle className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">Sign in with Google</span>
        </button>

        <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span>{" "}
          and <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
    </>
  )
}

export default LoginWithGoogle
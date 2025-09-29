import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../../service/allApi';
import { toast } from 'react-toastify';

function Auth({ register }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userDetails);
  const navigate = useNavigate();

  const handleRegister = async () => {
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("Fill the form completely")
    } else {
      const result = await registerAPI(userDetails)
      console.log(result);

      if (result.status == 200) {
        toast.success("Registered successfully")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate("/login")
      } else if (result.status == 406) {
        toast.warn(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error("Something went wrong")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Fill the form completely")
    } else {
      const result = await loginAPI({ email, password })
      console.log(result);

      if (result.status == 200) {
        toast.success("Login successful")
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token) //token already string
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(() => {
          navigate("/")
        }, 3000)
      }
      else if(result.status == 403 || result.status == 406){
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }else{
        toast.error("something went wrong")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }



    }
  }

  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <h1 className='text-4xl font-bold mt-5'>BOOK STORE</h1>
        <div className='md:grid grid-cols-3 w-full mt-10'>
          <div></div>

          <div>
            <form action="" className='bg-gray-900 p-10 rounded flex justify-center items-center flex-col w-full'>
              <div className='flex justify-center items-center text-white' style={{ width: "70px", height: "70px", borderRadius: "50%", border: "1px solid white" }} >
                <FaRegUserCircle className='text-7xl text-white' />
              </div>

              {register ? <h1 className='text-white text-2xl my-5'>Register</h1>
                :
                <h1 className='text-white text-2xl my-5'>Login</h1>
              }

              {register &&
                <div className='my-3 w-full'>
                  <label htmlFor="" className='text-white my-3'>Username</label>
                  <input value={userDetails.username} onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Enter your Username' className='w-full bg-white rounded p-2' />
                </div>}

              <div className='my-3 w-full'>
                <label htmlFor="" className='text-white my-3'>Email</label>
                <input value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="email" placeholder='Enter your Email' className='w-full bg-white rounded p-2' />
              </div>

              <div className='my-3 w-full'>
                <label htmlFor="" className='text-white my-3'>Password</label>
                <input value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='Enter your Password' className='w-full bg-white rounded p-2' />
              </div>

              <div className='my-3 w-full'>
                {register ? <button type="button" onClick={handleRegister} className='w-full bg-green-700 p-2 rounded text-white hover:bg-green-800 mb-2'>Register</button>
                  :
                  <button type="button" onClick={handleLogin} className='w-full bg-green-700 p-2 rounded text-white hover:bg-green-800'>Login</button>}
              </div>

              {!register &&
                <div>
                  <p className='text-white'>--------------------- or --------------------</p>
                  <div className='my-3 w-full'>
                    <input type="text" placeholder='Google' className='w-full bg-white rounded p-2' readOnly />
                  </div>
                </div>
              }

              <div className='text-white'>
                {register ? <p>Are you already a User? <Link to={"/login"} className='text-blue-400 underline'>Login</Link> </p>
                  :
                  <p>Are you a New User? <Link to={"/register"} className='text-blue-400 underline'>Register</Link> </p>
                }
              </div>
            </form>

          </div>

          <div></div>
        </div>

      </div>
    </>
  )
}

export default Auth
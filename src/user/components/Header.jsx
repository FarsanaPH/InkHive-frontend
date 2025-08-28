import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaUserCheck } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { TiThMenuOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Header() {
  const [clickStatus,setClickStatus] = useState(false)
  return (
    <>
      <div className="px-3 bg-amber-300  flex justify-between items-center">
        <div className='flex items-center'>
          <img src="https://openclipart.org/image/800px/275692" alt="" style={{ width: "60px", height: "60px" }} />
          <h1 className='text-2xl font-bold'>BOOK STORE</h1>
        </div>
        <div className='hidden md:flex items-center'>
          <FaInstagram className='text-3xl me-3' />
          <FaXTwitter className='text-3xl me-3' />
          <FaFacebookSquare className='text-3xl me-3' />
          <div className='ms-3'>
            <Link to={"/login"}> <button className='flex px-4 py-2 cursor-pointer border border-black rounded items-center'><FaUserCheck className='me-2' />LOGIN</button></Link>
          </div>
        </div>

      </div>
       
      
      <nav className='bg-gray-900 p-2 md:p-3'>
        <div className='flex md:hidden justify-between items-center'>
          <span onClick={()=>setClickStatus(!clickStatus)}><TiThMenuOutline className='text-white text-2xl'/></span>
          <Link to={"/login"}> <button className='flex px-2 py-1 cursor-pointer border border-white text-white rounded items-center'><FaUserCheck className='me-2' />LOGIN</button></Link>
  
        </div>
        <ul className={clickStatus ? "flex flex-col gap-4 text-white " : 'hidden md:flex justify-center text-white gap-10'}>
          <Link to={"/"} ><li>Home</li></Link>
          <Link to={"/all-books"}><li>Books</li></Link>
          <Link to={"/careers"}><li>Careers</li></Link>
          <Link to={"/contact"}><li>Contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header
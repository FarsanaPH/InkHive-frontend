import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaUserCheck } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { TiThMenuOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Header() {
  const [clickStatus, setClickStatus] = useState(false)
  const [dropdownStatus, setDropdownStatus] = useState(false)
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

          <div className="relative inline-block">
            <IoPersonCircleSharp onClick={() => setDropdownStatus(!dropdownStatus)} className='text-4xl me-3' />

            {
              dropdownStatus &&
              <div anchor="bottom end" popover className=" absolute right-0 bg-gray-900  w-56 origin-top-right rounded-md  shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <div class="py-1">
                  <Link to={"/profile"}> <a href="#" className="block px-4 py-2 text-sm text-gray-50 focus:bg-gray-950 focus:text-gray-100 focus:outline-hidden">Profile</a></Link>
                  <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-50 focus:bg-gray-950 focus:text-gray-100 focus:outline-hidden">Sign out</button>
                </div>
              </div>
            }
          </div>
        </div>

      </div>


      <nav className='bg-gray-900 p-2 md:p-3'>
        <div className='flex md:hidden justify-between items-center'>
          <span onClick={() => setClickStatus(!clickStatus)}><TiThMenuOutline className='text-white text-2xl' /></span>
          {/* <Link to={"/login"}> <button className='flex px-2 py-1 cursor-pointer border border-white text-white rounded items-center'><FaUserCheck className='me-2' />LOGIN</button></Link> */}
          <div className="relative inline-block">
            <IoPersonCircleSharp onClick={() => setDropdownStatus(!dropdownStatus)} className='text-4xl text-white me-1' />

            {
              dropdownStatus &&
              <div anchor="bottom end" popover className=" absolute right-3 bg-gray-900  w-56 origin-top-right rounded-md  shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <div class="py-1">
                  <Link to={"/profile"}> <a href="#" className="block px-4 py-2 text-sm text-gray-50 focus:bg-gray-950 focus:text-gray-100 focus:outline-hidden">Profile</a></Link>
                  <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-50 focus:bg-gray-950 focus:text-gray-100 focus:outline-hidden">Sign out</button>
                </div>
              </div>
            }
          </div>
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
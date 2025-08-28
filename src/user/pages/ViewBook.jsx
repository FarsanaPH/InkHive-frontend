import React, { useState } from 'react'
import { FaBackward, FaCameraRetro, FaRegEye } from 'react-icons/fa'
import Header from '../components/Header'
import { ImCancelCircle } from 'react-icons/im'
import { Link } from 'react-router-dom'

function ViewBooks() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />

      <div className="md:p-20 p-5">
        <div className='shadow-lg w-full md:p-10 p-5'>
          <div className='flex justify-end'><FaRegEye onClick={() => setModalStatus(true)} className='text-gray-500 text-2xl' /></div>
          <div className='md:grid grid-cols-[1fr_3fr] w-full '>
            <div>
              <img className='w-full h-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdGwRRqUVk9ep5eNqqp8YXDWFYhrYc5ozszg&s" alt="" />
            </div>
            <div className='px-4'>
              <h1 className='text-center font-medium text-2xl'>The Psychology of Money: Timeless Lessons on
                Wealth, Greed, and Happiness</h1>
              <p className='text-blue-500 text-center'>-Morgan House</p>
              <div className='md:flex justify-between mt-10'>
                <p className='mt-3 md:mt-0'>Publisher :Harriman House</p>
                <p className='mt-3 md:mt-0'>Language :English</p>
                <p className='mt-3 md:mt-0'>No. of pages :256</p>
              </div>
              <div className='md:flex justify-between mt-3'>
                <p className='mt-3 md:mt-0'>Seller Mail :ken@gmail.com</p>
                <p className='mt-3 md:mt-0'>Real Price : 200</p>
                <p className='mt-3 md:mt-0'>ISBN : 0857197681</p>
              </div>

              <p className='text-justify mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, doloremque eligendi eos iure saepe repellat beatae cumque aliquam dolorum vel, hic cum explicabo quibusdam, animi porro itaque ipsam? Aliquam, ut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, dolore amet. Modi alias ullam, tempore voluptate tenetur suscipit, consequatur non ut laborum esse vitae odit fuga deserunt quis laudantium tempora?</p>
              <div className='mt-10 flex justify-end'>
                <Link to={"/all-books"}><button className='flex items-center px-8 py-3 bg-blue-800 rounded text-white hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800'><FaBackward className='me-2' />Back</button></Link>
                <button className='px-4 py-3 bg-green-800 rounded text-white hover:bg-white hover:text-green-800 hover:border hover:border-green-800 ms-5'>Buy ₹ 1200</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ------------------------- */}
      {modalStatus &&
        <div id="dialog" aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"></div>

          <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl transition-all data-closed:translate-y-4 ">
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-gray-800 flex justify-between text-white ">
                <h1>Book Photos</h1>
                <ImCancelCircle onClick={() => setModalStatus(false)} />
              </div>
              <div className="p-4">
                <h1 className="text-blue-400 mb-4 flex "><FaCameraRetro className='me-4 mt-1' />
                  Camera Click of the Book in the Hands of Seller</h1>
              </div>
              <div className="flex p-2">
                <img className='mx-2' src="https://bookstore-feb-25-backend.onrender.com/imgUpload/image-money1.jpg" style={{ width: "200px", height: "300px" }} alt="" />
                <img className='mx-2' src="https://bookstore-feb-25-backend.onrender.com/imgUpload/image-money1.jpg" style={{ width: "200px", height: "300px" }} alt="" />
                <img className='mx-2' src="https://bookstore-feb-25-backend.onrender.com/imgUpload/image-money1.jpg" style={{ width: "200px", height: "300px" }} alt="" />
              </div>
            </div>
          </div>
        </div>
      }

    </>
  )
}

export default ViewBooks
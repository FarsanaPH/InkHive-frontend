import React, { useState } from 'react'
import Header from '../components/Header'
import { MdOutlineLocationOn } from 'react-icons/md'
import { RiExternalLinkLine } from 'react-icons/ri'
import { ImCancelCircle } from 'react-icons/im'
import Footer from '../../common/components/footer'

function Careers() {
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <Header />
      <div className="md:grid grid-cols-[1fr_4fr_1fr] my-10">
        <div></div>
        <div className="p-5">
          <h1 className="text-center text-3xl">Careers</h1>
          <p className='text-justify mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium hic voluptatem eaque in impedit quibusdam obcaecati dolores ipsa sed quod natus, esse numquam temporibus at pariatur incidunt neque recusandae perspiciatis?</p>
        </div>
        <div></div>
      </div>

      <h1 className="md:ms-20 ms-5 text-2xl">Current Opening</h1>
      <div className="md:grid grid-cols-3 mb-10 px-5">
        <div></div>
        <div className='flex'>
          <input className="bg-white p-2 border border-gray-200 w-full" type="text" placeholder='Search by Title... ' />
          <button className='bg-green-900 px-4 py-3 text-white hover:bg-green-950'>Search</button>
        </div>
        <div></div>
      </div>

      <div className="md:grid grid-cols-[1fr_4fr_1fr] my-10 px-5">
        <div></div>
        <div>
          <div className="p-5 shadow rounded">
            <div className='grid grid-cols-[8fr_1fr]'>
              <div>
                <h1 className='text-2xl'>Frontend Developer</h1>
                <hr className="border-gray-300 mt-3" />
              </div>
              <div>
                <button onClick={() => setModalStatus(true)} className="bg-blue-800 px-4 py-3 rounded text-white ms-4 flex items-center">Apply <RiExternalLinkLine className='ms-1' /></button>
              </div>
            </div>
            <div>
              <p className="mt-3 text-blue-700 flex"><MdOutlineLocationOn className='mt-1' />Location</p>
              <p className="mt-3">Job Type : Full - Time</p>
              <p className="mt-3">Salary : 25000</p>
              <p className="mt-3">Qualification : B-Tech, BCA, MCA</p>
              <p className="mt-3">Experience : 0-2yr</p>
              <p className="mt-3">Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, voluptas numquam voluptates dignissimos quaerat dolores atque sapiente perferendis culpa? Dolorem enim quibusdam sit recusandae delectus incidunt numquam inventore fuga dolor?</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* ------------------------- */}
      {modalStatus &&
        <div id="dialog" aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"></div>

          <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 ">
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-gray-800 flex justify-between text-white ">
                <h1 className='text-2xl'>Application Form</h1>
                <ImCancelCircle onClick={() => setModalStatus(false)} className='text-xl' />
              </div>

              {/* Modal Body */}
              <div className="p-4">
                <div className="md:grid grid-cols-2">
                  <div className='px-2'>
                    <div className='mb-3'><input type="text" placeholder='Full Name' className='p-2 border border-gray-200 w-full rounded' /></div>
                    <div className='mb-3'><input type="text" placeholder='Email Id' className='p-2 border border-gray-200 w-full rounded' /></div>
                  </div>
                  <div className='px-2'>
                    <div className='mb-3'><input type="text" placeholder='Qualification' className='p-2 border border-gray-200 w-full rounded' /></div>
                    <div className='mb-3'><input type="text" placeholder='Phone' className='p-2 border border-gray-200 w-full rounded' /></div>
                  </div>
                </div>
                <div className="px-2">
                  <textarea name="" id="" placeholder='Cover Letter' className='p-2 border border-gray-200 w-full rounded' ></textarea>
                </div>
                <div className='px-2 my-2'>
                  <h1>Upload Resume :</h1>
                  <div className='mb-3'><input type="file" name="" id="" className='border border-gray-200 w-full rounded file:p-2 file:bg-gray-300' /></div>
                </div>

              </div>
              <div className='bg-gray-300 flex justify-end items-center px-4 py-3 text-white gap-2'>
                <button className='inline-flex bg-orange-500 rounded-md px-3 py-2 text-sm'>Reset</button>
                <button className='inline-flex bg-green-500 rounded-md px-3 py-2 text-sm'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      }

      <Footer/>
    </>
  )
}

export default Careers
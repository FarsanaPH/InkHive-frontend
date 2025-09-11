import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { ImCancelCircle } from 'react-icons/im'

function AdminCareers() {
  const [jobPostStatus, setJobPostStatus] = useState(true)
  const [viewApplicantStatus, setViewApplicantStatus] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-[1fr_4fr]'>
        <div>
          <AdminSidebar />
        </div>
        <div>

          <h1 className='text-center text-2xl my-4'>Careers</h1>

          <div className="flex justify-center cursor-pointer items-center text-lg my-10">
            <button onClick={() => { setJobPostStatus(true); setViewApplicantStatus(false) }}
              className={jobPostStatus ? `px-4 py-3 text-blue-400 text-shadow-2xs border-gray-300 border-l border-r border-t rounded` :
                `px-4 py-3 border-b border-gray-300`}>
              Job Posts</button>
            <button onClick={() => { setViewApplicantStatus(true); setJobPostStatus(false) }}
              className={viewApplicantStatus ? `px-4 py-3 text-blue-400 text-shadow-2xs border-gray-300 border-l border-r border-t rounded` :
                `px-4 py-3 border-b border-gray-300`}
            >View Applicants</button>
          </div>

          {jobPostStatus &&
            <div>
              <div className="md:flex justify-center item-center my-8 md:px-20 px-5 w-full ">
                <div className='md:flex w-full ms-2 md:ms-0'>
                  <input type="text" placeholder='Search by Title...' className='border border-gray-200 p-2 md:w-1/4 w-3/4' />
                  <button className='bg-blue-900 text-white py-2 px-3 shadow hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Search</button>
                </div>
                <div>
                  <button onClick={() => setModalStatus(true)} className='bg-green-800 mt-5 md:mt-0 w-full text-white p-2 rounded md:ms-3
                    hover:bg-white hover:border hover:border-green-800 hover:text-green-800'>Add Job+</button>
                </div>
              </div>

              <div className="md:px-20 py-5 px-3">
                <div className="shadow border border-gray-200 mt-4">
                  <div className="md:grid grid-cols-[8fr_1fr] p-5 ">
                    <div>
                      <h1 className='mb-3 text-2xl'>Job Title</h1>
                      <hr />
                      <p className="mt-3">Kochi</p>
                      <p className="mt-3">Job Type : Full-Time</p>
                      <p className="mt-3">Salary : 25000</p>
                      <p className="mt-3">Qualification: MCA</p>
                      <p className="mt-3">Experience : 0-2yr</p>
                      <p className="mt-3">Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis veritatis nihil saepe voluptatem, blanditiis consequuntur placeat ut, delectus quae magnam nam omnis! Eius explicabo error ducimus officiis, veniam perferendis omnis?</p>
                    </div>
                    <div className='flex md:justify-center justify-end items-start'>
                      <button className='bg-red-800 mt-5 md:mt-0 text-white rounded p-3 hover:bg-white hover:border 
                      hover:border-red-800 hover:text-red-800'>Delete</button>
                    </div>
                  </div>
                </div>

                <p className="text-xl mt-4 text-red-600">No Job Added</p>
              </div>
            </div>            
          }

          {viewApplicantStatus &&
            <div className='p-10 overflow-x-auto'>
              <table className='w-full my-3 shadow'>
                <thead>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>SL</th>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Job Title</th>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Name</th>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Qualifications</th>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Email</th>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Phone</th>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Cover Letter</th>
                  <th className='p-3 text-center bg-blue-800 text-white border border-gray-500'>Resume</th>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-gray-500 p-2'>1</td>
                    <td className='border border-gray-500 p-2'>Frontend Developer</td>
                    <td className='border border-gray-500 p-2'>Farsana</td>
                    <td className='border border-gray-500 p-2'>MCA</td>
                    <td className='border border-gray-500 p-2'>abc@gmail.com</td>
                    <td className='border border-gray-500 p-2'>+91 7996567676</td>
                    <td className='border border-gray-500 p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum deserunt temporibus nemo laudantium! Sunt facere rem optio. Reiciendis, quidem autem corrupti non incidunt et consectetur ducimus fugiat doloremque repellendus?</td>
                    <td className='border border-gray-500 p-2 text-blue-700 underline' >Resume</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-xl mt-4 text-red-600">No Applications Yet</p>
              
            </div>
          }

          {/* ------------------------- */}
          {/* modalstatus */}
          {  modalStatus &&
            <div id="dialog" aria-labelledby="dialog-title" className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
              <div className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"></div>
              <div tabindex="0" className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                <div className="relative w-[400px] sm:width-full transform overflow-hidden rounded-lg bg-gray-300 text-left shadow-xl transition-all data-closed:translate-y-4 ">
                  <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 bg-gray-800 flex justify-between text-white ">
                    <h1>Application Form</h1>
                    <ImCancelCircle onClick={() => setModalStatus(false)} />
                  </div>
                  <div className='bg-white px-4 pt-3 pb-4 sm:p-6 sm:pb-4'>
                    <div className="mb-3">
                      <input type="text" placeholder='Job Title' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Location' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Job Type' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Salary' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Qualification' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                    </div>
                    <div className="mb-3">
                      <input type="text" placeholder='Experience' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                    </div>
                    <div className="mb-3">
                      <textarea type="text" placeholder='Description' className='p-2 border border-gray-400 rounded placeholder-gray-500  w-full' />
                    </div>
                  </div>
                  <div className='flex flex-cols gap-2 justify-end px-4 py-3'>
                    <button className='w-1/3 inline-flex text-white justify-center rounded bg-green-600 p-2  text-sm font-semibold shadow-xs'>Reset</button>
                    <button className='w-1/3 inline-flex text-white justify-center rounded bg-orange-600 p-2  text-sm font-semibold shadow-xs'>Add</button>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

    </>
  )
}

export default AdminCareers
import React, { useState } from 'react'
import { CiEdit } from 'react-icons/ci'
import { FaEdit } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'

function EditProfile() {
  const [offCanvasStatus, setOffCanvasStatus] = useState(false)
  return (
    <>
      {
        offCanvasStatus && <div>
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
        <div className='bg-white h-full w-100 z-50 fixed top-0 left-0'>
          <div className="flex bg-gray-900 p-4 text-white justify-between">
            <h1 className='text-2xl'>Edit User Profile</h1>
            <button onClick={()=>setOffCanvasStatus(false)}><GiCancel className='text-xl' /></button>
          </div>
          <div className="my-10 flex justify-center items-center">
            <label htmlFor="editUserProfile">
              <input type="file" style={{ display: 'none' }} id='editUserProfile' />
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no image" style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '30px' }} />
              <div style={{ marginLeft: '130px', marginTop: '-50px' }}></div>
            </label>
          </div>
          <div className='px-4'>
            <div className="mb-3">
              <input type="text" placeholder='Username' className='p-2 w-full bg-white border border-gray-200 rounded' />
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Password' className='p-2 w-full bg-white border border-gray-200 rounded' />
            </div>
            <div className="mb-3">
              <input type="text" placeholder='Confirm Password' className='p-2 w-full bg-white border border-gray-200 rounded' />
            </div>
            <div className="mb-3">
              <textarea placeholder='Bio' className='p-2 w-full bg-white border border-gray-200 rounded' rows={6} ></textarea>
            </div>

            <div className="flex justify-end my-5">
              <button type='button' className='bg-amber-700 text-white px-5 py-3 rounded hover:border hover:border-amber-700 hover:text-amber-700 hover:bg-white'>Reset</button>
              <button type='button' className='bg-green-700 text-white px-5 py-3 rounded hover:border hover:border-green-700 hover:text-green-700 hover:bg-white ms-4' >Update</button>
            </div>
          </div>
        </div>
        </div>
    }

        

        <div>
          <button onClick={()=>setOffCanvasStatus(true)} className='px-3 py-2 text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600 flex rounded'>
            <CiEdit className='mt-1 me-1' /> Edit</button>
        </div>
      
    </>
  )
}

export default EditProfile
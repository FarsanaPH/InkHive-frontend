import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FaBook, FaUser, FaUserSecret } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'

function AdminHome() {
    return (
        <>
            <AdminHeader />
            <div className='md:grid grid-cols-[1fr_4fr]'>
                <div>
                    <AdminSidebar />
                </div>
                <div className='p-4'>
                    <div className='md:grid grid-cols-3 text-white'>
                        <div className="px-5">
                            <div className="grid grid-cols-[1fr_3fr] bg-blue-700 rounded p-4 ">
                                <div className='flex justify-center items-center'><FaBook className='text-3xl' /></div>
                                <div className='text-lg'>
                                    <p>Total number of Books</p>
                                    <p>10 +</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="grid grid-cols-[1fr_3fr] bg-green-700 rounded p-4 ">
                                <div className='flex justify-center items-center'><HiUserGroup className='text-3xl' /></div>
                                <div className='text-lg'>
                                    <p>Total number of Users</p>
                                    <p>10 +</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="grid grid-cols-[1fr_3fr] bg-yellow-700 rounded p-4 ">
                                <div className='flex justify-center items-center'><FaUserSecret className='text-3xl' /></div>
                                <div className='text-lg'>
                                    <p>Total number of Requests</p>
                                    <p>10 +</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminHome
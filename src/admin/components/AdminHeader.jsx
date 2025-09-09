import React from 'react'

function AdminHeader() {
    return (
        <>
            <nav className="px-3 flex items-center">
                <div className='flex items-center'>
                    <img src="https://openclipart.org/image/800px/275692" alt="" style={{ width: "60px", height: "60px" }} />
                    <h1 className='text-2xl font-bold'>BOOK STORE</h1>
                </div>
                <div className="ms-auto">
                    <button type="button" className='border rounded px-4 py-2'>Logout</button>
                </div>
            </nav>
            <div className="bg-gray-900 p-2 w-full text-center text-white">
                <p>Welcome, Admin! You're all set to manage and moniter the system. Let's get to work!</p>
            </div>
        </>
    )
}

export default AdminHeader
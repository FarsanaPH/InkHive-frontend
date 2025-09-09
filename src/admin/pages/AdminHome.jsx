import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminHome() {
    return (
        <>
            <AdminHeader />
            <div className='md:grid grid-cols-[1fr_4fr]'>
                <div>
                    <AdminSidebar/>
                </div>
                <div>
                    homecontents
                </div>
            </div>
    
        </>
    )
}

export default AdminHome
import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'

function AdminCareers() {
  return (
    <>
     <AdminHeader/>
            <div className='md:grid grid-cols-[1fr_4fr]'>
                <div>
                    <AdminSidebar/>
                </div>
                <div>
                    carrer contents
                </div>
            </div>
    </>
  )
}

export default AdminCareers
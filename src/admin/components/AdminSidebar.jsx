import React from 'react'
import { FaGraduationCap, FaHome } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { PiBooks } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'

function AdminSidebar() {
    const navigate = useNavigate();
    const filter = (data) => {
        if(data == "home"){
            navigate("/admin-home")
        }else if(data == "books"){
            navigate("/admin-books")
        }else if(data == "careers"){
            navigate("/admin-careers")
        }else if(data == "settings"){
            navigate("/admin-settings")
        }else{
            navigate("/*")
        }

    }
  return (
    <>
    <div className="bg-gray-200 w-full md:min-h-screen flex items-center flex-col">
        <div className="my-10">
            <img src="https://bookstore-feb25-backend.onrender.com/imgUpload/image-ana_portfolio.png" alt="" className='w-[170px] h-[170px] rounded-full' />
        </div>
        <h1 className="text-2xl mb-10">Farsana</h1>
        <div className="mb-10">
            <div className="mb-4 flex" onClick={()=>filter("home")}>
                <input type="radio" name="" id="home" />
                <label htmlFor="home" className='flex ms-3'><FaHome className='me-3 mt-1'/> Home</label>
            </div>
            <div className="mb-4 flex" onClick={()=>filter("books")}>
                <input type="radio" name="" id="books" />
                <label htmlFor="books" className='flex ms-3'><PiBooks className='me-3 mt-1'/> Books</label>
            </div>
            <div className="mb-4 flex" onClick={()=>filter("careers")}>
                <input type="radio" name="" id="careers" />
                <label htmlFor="careers" className='flex ms-3'><FaGraduationCap className='me-3 mt-1'/> Careers</label>
            </div>
            <div className="mb-4 flex" onClick={()=>filter("settings")}>
                <input type="radio" name="" id="settings" />
                <label htmlFor="settings" className='flex ms-3'><FiSettings className='me-3 mt-1'/> Settings</label>
            </div>
        </div>

    </div>
    </>
  )
}

export default AdminSidebar
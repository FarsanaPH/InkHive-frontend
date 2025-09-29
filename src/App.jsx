import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './common/pages/LandingPage'
import Auth from './common/pages/Auth'
import PageNotFound from './common/pages/PageNotFound'
import AllBooks from './user/pages/AllBooks'
import Careers from './user/pages/Careers'
import Contact from './user/pages/Contact'
import Profile from './user/pages/Profile'
import ViewBook from './user/pages/ViewBook'
import Preloader from './common/components/Preloader'
import { useEffect, useState } from 'react'
import AdminHome from './admin/pages/AdminHome'
import AdminBooks from './admin/pages/AdminBooks'
import AdminSettings from './admin/pages/AdminSettings'
import AdminCareers from './admin/pages/AdminCareers'
import { ToastContainer } from 'react-toastify'
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(()=>{
        setIsLoading(false)
      },5000)
  },[])

  return (
    <>
      <Routes>
        {/* common pages path */}
        <Route path="/" element={ isLoading? <Preloader/> : <LandingPage/>} />
        <Route path="/login" element={<Auth/>} />
        <Route path="/register" element={<Auth register={true}/>} />
        <Route path="*" element={<PageNotFound/>} />

        {/* user side pages path */}
        <Route path="/all-books" element={<AllBooks/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/view-book/:id" element={<ViewBook/>} />


        {/* admin side pages path */}
        <Route path="/admin-home" element={<AdminHome/>} />
        <Route path="/admin-books" element={<AdminBooks/>} />
        <Route path="/admin-careers" element={<AdminCareers/>} />
        <Route path="/admin-settings" element={<AdminSettings/>} />
      </Routes>

      <ToastContainer position="bottom-right" autoClose={3000} theme='colored'/>
    </>
  )
}

export default App

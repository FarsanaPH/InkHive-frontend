import React from 'react'
import Header from '../components/Header'
import Footer from '../../common/components/footer'
import { Link } from 'react-router-dom'

function AllBooks() {
  return (
    <>
      <Header />

      <h1 className='my-10 text-center text-3xl'>Collections</h1>
      <div className="md:grid grid-cols-3 mb-10 px-5">
        <div></div>
        <div className='flex'>
          <input className="bg-white p-2 border border-gray-200 w-full" type="text" placeholder='Search by Title... ' />
          <button className='bg-blue-900 px-4 py-3 text-white hover:bg-blue-950'>Search</button>
        </div>
        <div></div>
      </div>

      <div className="md:grid grid-cols-[1fr_4fr] md:px-10 px-5">
        
        <div>
          <h1 className='text-2xl font-medium my-4'>Filter</h1>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Literacy-Friction" />
            <label htmlFor="Literacy-Friction" className='ms-2'>Literacy Friction</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Philosophy" />
            <label htmlFor="Philosophy" className='ms-2'>Philosophy</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Romance" />
            <label htmlFor="Romance" className='ms-2'>Romance</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Mystery/Thriller" />
            <label htmlFor="Mystery/Thriller" className='ms-2'>Mystery/Thriller</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Horror" />
            <label htmlFor="Horror" className='ms-2'>Horror</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Auto/Biography" />
            <label htmlFor="Auto/Biography" className='ms-2'>Auto/Biography</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Self-Help" />
            <label htmlFor="Self-Help" className='ms-2'>Self-Help</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="Politics" />
            <label htmlFor="Politics" className='ms-2'>Politics</label>
          </div>
          <div className='my-2 flex'>
            <input type="radio" name="filter" id="No Filter" />
            <label htmlFor="No Filter" className='ms-2'>No Filter</label>
          </div>
        </div>

        <div className='md:grid grid-cols-4 '>
          <div className="p-3">
            <div className="p-3 shadow-md">
              <img src="" alt="img" />
              <div className="flex  justify-center items-center flex-col mt-3">
                <p className='text-blue-700'></p>
                <h3>Title</h3>
                <h3>Author</h3>
                <p>$ 789</p>
                <Link to={"/view-book/1"}><button className='bg-blue-900 w-full p-2 text-white my-3 hover:bg-blue-950'>View Book</button></Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default AllBooks
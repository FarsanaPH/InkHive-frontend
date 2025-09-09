import React, { useState } from 'react'
import Header from '../components/Header'
import { IoPersonCircleSharp } from 'react-icons/io5'
import { VscVerifiedFilled } from 'react-icons/vsc'
import EditProfile from '../components/EditProfile'

function Profile() {
  const [sellStatus, setSellStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)

  return (

    <>
      <Header />
      <div className="bg-gray-900 h-[200px]"></div>

      <div className="w-[230px] h-[230px]  rounded-full mt-[-130px] ml-[70px]">
        <IoPersonCircleSharp
          className="text-gray-300  bg-white w-[200px] h-[200px] rounded-full"
        />
      </div>
      <div className='flex justify-between   md:px-20 px-10'>
        <div className="flex justify-center items-center">
          <p className='text-2xl'>Farsana</p>
          <VscVerifiedFilled className='ms-2 text-2xl text-blue-400 mt-2' />
        </div>
        <EditProfile />
      </div>
      <p className='text-justify md:px-20 px-10 my-5 text-lg'>Hey...I am a book store user!!!</p>

      {/* tabs */}
      <div className="flex justify-center cursor-pointer items-center text-xl my-10">
        <h1 onClick={() => { setSellStatus(true); setBookStatus(false); setPurchaseStatus(false) }}
          className={sellStatus ? `px-4 py-3 text-blue-400 text-shadow-2xs border-gray-300 border-l border-r border-t rounded` :
            `px-4 py-3 border-b border-gray-300`}>
          Sell Book</h1>
        <h1 onClick={() => { setSellStatus(false); setBookStatus(true); setPurchaseStatus(false) }}
          className={bookStatus ? `px-4 py-3 text-blue-400 text-shadow-2xs border-gray-300 border-l border-r border-t rounded` :
            `px-4 py-3 border-b border-gray-300`}
        >Book Status</h1>
        <h1 onClick={() => { setSellStatus(false); setBookStatus(false); setPurchaseStatus(true) }}
          className={purchaseStatus ? `px-4 py-3 text-blue-400 text-shadow-2xs border-gray-300 border-l border-r border-t rounded` :
            `px-4 py-3 border-b border-gray-300`}
        >Purchase History</h1>
      </div>

      {sellStatus && (
        <div className="p-10 flex justify-center">
          <div className="bg-gray-200 p-10 rounded w-full md:w-[80%]">
            <h2 className="text-center text-2xl font-semibold mb-6">Book Details</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Left column */}
              <div className="flex flex-col gap-3">
                <input type="text" placeholder="Title" className="p-2 bg-white rounded" />
                <input type="text" placeholder="Author" className="p-2 bg-white rounded" />
                <input type="number" placeholder="No of Pages" className="p-2 bg-white rounded" />
                <input type="text" placeholder="Image Url" className="p-2 bg-white rounded" />
                <input type="number" placeholder="Price" className="p-2 bg-white rounded" />
                <input type="number" placeholder="Discount Price" className="p-2 bg-white rounded" />
                <textarea placeholder="Abstract" rows="4" className="p-2 bg-white rounded"></textarea>
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-3">
                <input type="text" placeholder="Publisher" className="p-2 bg-white rounded" />
                <input type="text" placeholder="Language" className="p-2 bg-white rounded" />
                <input type="text" placeholder="ISBN" className="p-2 bg-white rounded" />
                <input type="text" placeholder="Category" className="p-2 bg-white rounded" />
                <div className="flex justify-center items-center mt-5 flex-col">

                  <label htmlFor="uploadBookimg">
                    <input id="uploadBookimg" type="file" className='hidden' alt="no image" />
                    <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="upload img" className='h-[200px] w-[200px]' />
                  </label>

                  <div className="mt-10 flex items-center gap-4">
                    {/* First icon */}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
                      alt="icon1"
                      style={{ width: "50px", height: "50px" }}
                    />

                    {/* Second icon */}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                      alt="icon2"
                      style={{ width: "50px", height: "50px" }}
                    />

                    {/* Third icon */}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                      alt="icon3"
                      style={{ width: "50px", height: "50px" }}
                    />

                    {/* Upload Placeholder */}
                    <label htmlFor="uploadBookImg">
                      <input
                        id="uploadBookImg"
                        type="file"
                        style={{ display: "none" }}
                        alt="no image"
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1829/1829350.png"
                        alt="upload placeholder"
                        style={{ width: "50px", height: "50px", cursor: "pointer" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end mt-6 gap-4">
              <button type="reset" className="px-6 py-2 bg-orange-600 text-white rounded">Reset</button>
              <button type="submit" className="px-6 py-2 bg-green-600 text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      )}

      {
        bookStatus && <div className="p-10">
          <p>Book Status</p>
        </div>
      }
      {
        purchaseStatus && (
          <div className="p-8 flex justify-center">
            <div className="w-full md:w-[80%] border border-gray-300 shadow p-8 rounded">
              

              {/* Book 1 */}
              <div className="flex justify-between bg-gray-100 p-5 rounded-lg mb-4">
                <div className="w-[70%]">
                  <h3 className="text-xl font-bold">Ikigai: The Japanese Secret to a Long and Happy Life</h3>
                  <p className="text-gray-600">Héctor García & Francesc Miralles</p>
                  <p className="text-blue-500 font-semibold my-2">$200</p>
                  <p className="text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s...
                  </p>
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
                  alt="Ikigai"
                  className="w-[120px] h-[160px] object-cover rounded"
                />
              </div>

              {/* Book 2 */}
              <div className="flex justify-between bg-gray-100 p-5 rounded-lg mb-4">
                <div className="w-[70%]">
                  <h3 className="text-xl font-bold">The Da Vinci Code</h3>
                  <p className="text-gray-600">Dan Brown</p>
                  <p className="text-blue-500 font-semibold my-2">$13</p>
                  <p className="text-gray-700">
                    Another dummy text about the book goes here, with description and details for purchase history.
                  </p>
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/51oXKWrcYYL._SX331_BO1,204,203,200_.jpg"
                  alt="Da Vinci Code"
                  className="w-[120px] h-[160px] object-cover rounded"
                />
              </div>
            </div>
          </div>
        )
      }


    </>
  )
}

export default Profile
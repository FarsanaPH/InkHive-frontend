import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { FiEdit2 } from 'react-icons/fi'

function AdminSettings() {
    return (
        <>
            <AdminHeader />
            <div className='md:grid grid-cols-[1fr_4fr]'>
                <div>
                    <AdminSidebar />
                </div>
                <div>

                    <div className="p-10 bg-white min-h-screen">
                        {/* Page Title */}
                        <h1 className="text-2xl font-bold mb-6">Settings</h1>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Text Section */}
                            <div className="lg:col-span-2 space-y-6 text-justify leading-relaxed">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                    consectetur at mollitia deserunt, quo excepturi quod dolorum.
                                    Exercitationem debitis ea, dicta illo ullam nihil consequatur. Odio
                                    nam ut soluta incidunt. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sunt, tenetur. Consequuntur inventore adipisci
                                    blanditiis iure atque ex deleniti rem ad at dolore mollitia officiis
                                    fugiat pariatur cum, quis, delectus nihil.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                    consectetur at mollitia deserunt, quo excepturi quod dolorum.
                                    Exercitationem debitis ea, dicta illo ullam nihil consequatur. Odio
                                    nam ut soluta incidunt. Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sunt, tenetur. Consequuntur inventore adipisci
                                    blanditiis iure atque ex deleniti rem ad at dolore mollitia officiis
                                    fugiat pariatur cum, quis, delectus nihil.
                                </p>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
                                    itaque deserunt quia delectus quaerat, magnam enim totam tenetur ab
                                    occaecati hic eius facere sapiente magni asperiores ullam mollitia,
                                    et rem! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Quasi dolorum et illum earum, dolores odio! Excepturi aspernatur nemo
                                    aliquid eligendi veniam assumenda?
                                </p>
                            </div>

                            {/* Settings Form */}
                            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                                <div className="flex flex-col items-center relative">
                                    <label htmlFor="profilepic">
                                        <input id="profilepic" type="file" className='hidden' />
                                        <img
                                            src="https://bookstore-feb25-backend.onrender.com/imgUpload/image-ana_portfolio.png"
                                            alt="Profile"
                                            className="w-28 h-28 rounded-full object-cover"
                                        />
                                        <label
                                            htmlFor="profilepic"
                                            className="absolute bottom-2 right-22 bg-yellow-400 p-2 rounded-full shadow hover:bg-yellow-500 cursor-pointer"
                                        >
                                            <FiEdit2 className="text-white" />
                                        </label>
                                    </label>
                                </div>

                                {/* Input Fields */}
                                <form className="mt-6 space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Jenni"
                                        className="w-full border rounded px-3 py-2 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="admin123"
                                        className="w-full border rounded px-3 py-2 focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="admin123"
                                        className="w-full border rounded px-3 py-2 focus:outline-none"
                                    />

                                    {/* Buttons */}
                                    <div className="flex justify-between gap-4 mt-4">
                                        <button
                                            type="reset"
                                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-1/2"
                                        >
                                            Reset
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-1/2"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AdminSettings
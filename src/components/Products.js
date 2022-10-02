import React from 'react'
import vr1 from '../img/vr1.png'
import vr3 from '../img/vr3.png'

const Products = () => {
    return (
        <div className='mt-10' id="pricing">
            <div className='text-center p-5 space-y-6'>
                <h2 className='text-3xl md:text-5xl font-bold'>Our Awesome Product</h2>
                <p className='md:ml-64 md:mr-64 opacity-60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, placeat aut. Necessitatibus quisquam eaque, similique laboriosam rem unde ipsa vel!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-10 justify-center items-center md:ml-20 md:mr-20'>
                <div className='bg-golden flex flex-col h-full w-full p-10 m-2 rounded-xl shadow-md'>
                    <img className='h-full flex items-center justify-center' src={vr1} alt="" />
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-center'>VR Box</h2>
                        <ul className='space-y-1 md:space-x-2 flex justify-center items-center flex-col md:flex-row'>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>

                           

                        </ul>
                        <div className='flex flex-col justify-center items-center space-y-6'>
                            <h2 className='text-2xl text-left font-bold'>Price: ₹2000</h2>
                            <button style={{background: "linear-gradient(90deg, rgba(255,81,81,1) 0%, rgba(255,165,0,1) 100%)"}} class="flex justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <h2 className='font-bold'>Buy Now</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-golden flex flex-col h-full w-full p-10 m-2 rounded-xl shadow-md'>
                    <img className='h-full flex items-center justify-center' src={vr3} alt="" />
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-center'>VR Box</h2>
                        <ul className='space-y-1 md:space-x-2 flex justify-center items-center flex-col md:flex-row'>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>

                           

                        </ul>
                        <div className='flex flex-col justify-center items-center space-y-6'>
                            <h2 className='text-2xl text-left font-bold'>Price: ₹2000</h2>
                            <button style={{background: "linear-gradient(90deg, rgba(255,81,81,1) 0%, rgba(255,165,0,1) 100%)"}} class="flex justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <h2 className='font-bold'>Buy Now</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-golden flex flex-col h-full w-full p-10 m-2 rounded-xl shadow-md'>
                    <img className='h-full flex items-center justify-center' src={vr1} alt="" />
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-center'>VR Box</h2>
                        <ul className='space-y-1 md:space-x-2 flex justify-center items-center flex-col md:flex-row'>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>

                           

                        </ul>
                        <div className='flex flex-col justify-center items-center space-y-6'>
                            <h2 className='text-2xl text-left font-bold'>Price: ₹2000</h2>
                            <button style={{background: "linear-gradient(90deg, rgba(255,81,81,1) 0%, rgba(255,165,0,1) 100%)"}} class="flex justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <h2 className='font-bold'>Buy Now</h2>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-golden flex flex-col h-full w-full p-10 m-2 rounded-xl shadow-md'>
                    <img className='h-full flex items-center justify-center' src={vr1} alt="" />
                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-center'>VR Box</h2>
                        <ul className='space-y-1 md:space-x-2 flex justify-center items-center flex-col md:flex-row'>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>
                            <li className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className='text-md text-gray-600 opacity-60'>Feature1</span>
                            </li>

                           

                        </ul>
                        <div className='flex flex-col justify-center items-center space-y-6'>
                            <h2 className='text-2xl text-left font-bold'>Price: ₹2000</h2>
                            <button style={{background: "linear-gradient(90deg, rgba(255,81,81,1) 0%, rgba(255,165,0,1) 100%)"}} class="flex justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <h2 className='font-bold'>Buy Now</h2>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Products

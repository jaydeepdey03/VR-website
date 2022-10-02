import React from 'react'
import vrbox from '../img/vrbox.png'

const Aboutproduct = () => {
    return (
        <div className='flex flex-col justify-center md:flex-row md:m-10 md:p-10 md:pl-20 md:pr-20' id="about">
            <img className='h-auto w-auto p-10' src={vrbox} alt="" />
            <div className='flex-col space-y-2 shadow-2xl m-5 font-Lora'>
                <h2 className='font-bold text-4xl p-6'>About the product</h2>
                <p className='m-4 p-1 md:p-4 opacity-95'>There are certain important elements that a virtual reality system should possess.</p>
                <ul className='p-5 space-y-6 md:p-10'>

                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-xl opacity-60'>Viewing System</span>
                    </li>

                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-xl opacity-60'>Tracking System</span>
                    </li>

                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-xl opacity-60'>Interactivity Element</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-xl opacity-60'>Artistic Inclination</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-xl opacity-60'>Sensory Management System</span>
                    </li>
                    <li className='flex space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className='text-xl opacity-60'>Portabality</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Aboutproduct

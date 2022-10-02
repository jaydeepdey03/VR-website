import React from 'react'

const Feature = () => {
    return (
        <div className='mt-32 md:mt-96' id='features'>
            <div className='mt-10'>
                <h2 className='text-4xl font-bold text-center'>Product Features</h2>
                <p className='text-center text-gray-700 opacity-60 p-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, sunt.</p>
            </div>
            <div className='flex flex-col md:flex-row p-5 m-5 md:m-16 md:space-x-10 space-y-1'>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='rounded-full bg-red-200 border-8 border-red-100 h-28 w-28 text-red-600 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg></div>
                    <h2 className='text-xl text-center font-bold'>High Quality</h2>
                    <p className='text-gray-600 text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, non.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='rounded-full bg-red-200 border-8 border-red-100 h-28 w-28 text-red-600 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg></div>
                    <h2 className='text-xl text-center font-bold'>High Quality</h2>
                    <p className='text-gray-600 text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, non.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='rounded-full bg-red-200 border-8 border-red-100 h-28 w-28 text-red-600 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg></div>
                    <h2 className='text-xl text-center font-bold'>High Quality</h2>
                    <p className='text-gray-600 text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, non.</p>
                </div>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <div className='rounded-full bg-red-200 border-8 border-red-100 h-28 w-28 text-red-600 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg></div>
                    <h2 className='text-xl text-center font-bold'>High Quality</h2>
                    <p className='text-gray-600 text-center '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, non.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature

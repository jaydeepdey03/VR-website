import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center md:justify-around items-center p-3 md:m-0 bg-golden bottom-'>
            <button class="bg-orange-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                <span>No of Visitors: <span>3000</span></span>
            </button>
            <div className='flex space-x-2 md:space-x-10 p-7 justify-center items-center'>
                <p className='text-lg font-bold opacity-50'>Follow Us:</p>
                <a href="#"><img className='h-10 w-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="" /></a>
                <a href="#"><img className='h-10 w-10 rounded-full' src="https://pnggrid.com/wp-content/uploads/2021/07/Facebook-Logo-Square-768x768.png" alt="" /></a>
                <a href="#"><img className='h-10 w-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="" /></a>
            </div>
            <p className='text-lg font-bold opacity-50'>2022. Created by Jaydeep Dey</p>
        </div>
    )
}

export default Footer

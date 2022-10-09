import React from 'react'
import vr from '../img/vr.svg'

const Header = () => {
    return (
        <div className='relative font-Lora' id="home">
            <div className='flex flex-col md:p-6'>
                <div className='flex justify-around flex-col md:flex-row'>
                    <div className='p-10'>
                        <h2 className='mt-10 font-bold text-6xl md:text-7xl text-center opacity-80 p-5'>Virtual Reality for Life</h2>
                        <p className='text-center text-slate-500 mt-2 mb-10 pl-10 pr-10'>Virtual reality VR is a simulated experience that can be similar to or completely different from the real world.</p>
                        <button style={{background: "linear-gradient(90deg, rgba(255,81,81,1) 0%, rgba(255,165,0,1) 100%)",}} className="hover:bg-red-700 text-white font-bold py-2 px-4 rounded block m-auto">Buy Products</button>
                    </div>
                    <img className='hidden h-96 w-96 md:block m-auto motion-reduce:animate-bounce' src={vr} alt="" />
                </div>

            </div>
            <div className='absolute top-0 w-full -z-20'>
                <div className='h-screen md:h-96 bg-golden'></div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,166 0,166 C 140.78571428571428,180.32142857142856 281.57142857142856,194.64285714285714 392,178 C 502.42857142857144,161.35714285714286 582.4999999999999,113.75 702,121 C 821.5000000000001,128.25 980.4285714285716,190.35714285714286 1110,207 C 1239.5714285714284,223.64285714285714 1339.7857142857142,194.82142857142856 1440,166 C 1440,166 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#ffebe288" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 250)"></path><path d="M 0,500 C 0,500 0,333 0,333 C 147.25,362.7857142857143 294.5,392.57142857142856 425,384 C 555.5,375.42857142857144 669.2499999999999,328.50000000000006 783,331 C 896.7500000000001,333.49999999999994 1010.5,385.4285714285714 1120,394 C 1229.5,402.5714285714286 1334.75,367.78571428571433 1440,333 C 1440,333 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#ffebe2ff" className="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 250)"></path></svg>
            </div>
        </div>

    )
}

export default Header

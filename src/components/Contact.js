import React from 'react'
import vr3 from '../img/vr3.png'

const Contact = () => {
    return (
        <div className='mt-16 flex justify-center items-center' id="contact">
            <div className='p-16 space-y-20'>
                <div>
                    <h2 className='text-4xl md:text-5xl font-bold'>Contact With Us</h2>
                    <p className='text-gray-700 opacity-60 pt-7 pr-7'>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                </div>
                <form className='flex flex-col space-y-6'>
                    <input required className='rounded outline-none' type="text" placeholder='Name*'/>
                    <input className='rounded outline-none' type="text" placeholder='Email*' />
                    <textarea className='outline-none rounded' name="text" id="" cols="30" rows="10" placeholder='Your message*'></textarea>
                    <div className='flex justify-start'>
                        <button style={{background: "linear-gradient(90deg, rgba(255,81,81,1) 0%, rgba(255,165,0,1) 100%)",}} className="text-white font-bold py-2 px-4 rounded outline-none border-none">Submit</button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center'>
                <img className='' src={vr3} alt="" />
            </div>
        </div>
    )
}

export default Contact
